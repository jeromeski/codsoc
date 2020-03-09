import React, { Component } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import ProfileAbout from "./ProfileAbout";

import { getProfileByHandle } from "../../redux/profile/profile.actions";
import { Container, Row, Col, Button } from "react-bootstrap";
import SpinnerComponent from "../common/Spinner";


class Profile extends Component {
  componentDidMount() {
    // check if selected profile has the same handle
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found')
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <SpinnerComponent />;
    } else {
      profileContent = (
        <Container>
          <Row>
            <Col
              xs={12}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 8, offset: 2 }}
              style={{ marginTop: "5rem", marginBottom: "5rem" }}
              >
              <Button variant="dark" as={Link} to="/profiles">
                Go Back
              </Button>
              <ProfileHeader profile={profile} />
              <ProfileAbout />
              <ProfileCreds />
              <ProfileGithub />
            </Col>
          </Row>
        </Container>
      );
    }

    return (
      <div className='profile'>
        {profileContent}
      </div>
      );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
