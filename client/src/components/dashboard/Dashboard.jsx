import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Button,
} from "react-bootstrap";

import { connect } from "react-redux";

import { getCurrentProfile } from "../../redux/profile/profile.actions";
import SpinnerComponent from "../common/Spinner";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  handleCreateProfile(path) {
    this.props.history.push(path);
  }

  render() {
    // const { name, skills, locality, company } = this.state
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <SpinnerComponent />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO: Display Profile</h4>;
      } else {
        dashboardContent = (
          <div
            style={{marginTop: '10rem'}}
          >
            <p className="lead text-muted">Welcome <span className='h4'> {user.name} </span>, </p>
            <p className="lead text-muted">You don't have a profile configured yet, add some info by clicking the button below.</p>
            <Button
              className='mt-4'
              onClick={() => this.handleCreateProfile('/create-profile')}>Create Profile</Button>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <Container className="h-100">
          <Row className="h-100 main">{dashboardContent}</Row>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

