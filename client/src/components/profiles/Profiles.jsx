import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../redux/profile/profile.actions";
import SpinnerComponent from "../common/Spinner";
import { Row, Container, Col } from "react-bootstrap";
import ProfileItem from "./ProfileItem";
// import NotFound from "../common/NotFound";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <SpinnerComponent />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h1 style={{marginTop: '5rem'}}> No Profiles Found</h1>;
      }
    }

    return (
      <div className="profiles">
        <Container>
          <Row className="h-100">
            <Col lg={12} style={{ marginTop: "7rem" }}>
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with the best developers
              </p>
              <Row>{profileItems}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
