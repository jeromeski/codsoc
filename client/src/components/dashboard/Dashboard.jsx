import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Button, Nav, Col } from "react-bootstrap";

import { connect } from "react-redux";

import { getCurrentProfile, deleteAccount } from "../../redux/profile/profile.actions";
import SpinnerComponent from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from './Education';

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  handleGoToCreateProfile(path) {
    this.props.history.push(path);
  }

  handleDeleteAccount = () => {
    this.props.deleteAccount()
  }

  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <SpinnerComponent />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <span className="h5">{user.name}</span>
            </p>
            <ProfileActions/>
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginTop: "60px" }}>
              <Button 
                variant="danger"
                onClick={this.handleDeleteAccount}
              > Delete My Account</Button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome{" "}
              <Nav.Item as={Link} to={`/profile/${profile.handle}`}>
                <span className="h4"> {user.name}</span>
              </Nav.Item>{" "}
            </p>
            <p className="lead text-muted">
              You don't have a profile configured yet, add some info by clicking
              the button below.
            </p>
            <Button
              className="mt-4"
              onClick={() => this.handleGoToCreateProfile("/create-profile")}>
              Create Profile
            </Button>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <Container className="h-100">
          <Row className="h-100 main">
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              style={{ marginTop: "7rem" }}>
              <h1 className="display-5 mb-0">Dashboard</h1>
              {dashboardContent}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
