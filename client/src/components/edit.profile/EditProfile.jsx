import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaField from "../common/TextAreaField";
import SocialMediaInputField from "../common/SocialMediaInputField";
import { createProfile, getCurrentProfile } from "../../redux/profile/profile.actions";
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {

  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  componentDidMount(){
    this.props.getCurrentProfile();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if(nextProps.profile.profile) {
      const profile = nextProps.profile.profile
      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
      profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
      profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
      profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
      profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  };

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };


  render() {
    const {
      displaySocialInputs,
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors
    } = this.state;

    const options = [
      { label: "Select Professional Status", value: 0 },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Developer", value: "Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <SocialMediaInputField
            name="twitter"
            type="text"
            value={twitter}
            placeholder="twitter"
            icon='fab fa-twitter'
            id="input-social1"
            ariaLabel="twitter"
            ariaDescribedby="input-social1"
            onChange={this.handleTitleChange}
            error={errors.twitter}
          />
          <SocialMediaInputField
            name="facebook"
            type="text"
            value={facebook}
            placeholder="facebook"
            icon='fab fa-facebook-f'
            id="input-social2"
            ariaLabel="facebook"
            ariaDescribedby="input-social2"
            onChange={this.handleTitleChange}
            error={errors.facebook}
          />
          <SocialMediaInputField
            name="instagram"
            type="text"
            value={instagram}
            placeholder="instagram"         
            icon='fab fa-instagram'
            id="input-social3"
            ariaLabel="instagram"
            ariaDescribedby="input-social3"
            onChange={this.handleTitleChange}
            error={errors.instagram}
          />
          <SocialMediaInputField
            name="linkedin"
            type="text"
            value={linkedin}
            placeholder="linkedin"
            icon='fab fa-linkedin'
            id="input-social4"
            ariaLabel="linkedin"
            ariaDescribedby="input-social4"
            onChange={this.handleTitleChange}
            error={errors.linkedin}
          />
          <SocialMediaInputField
            name="youtube"
            type="text"
            value={youtube}
            placeholder="youtube"
            icon='fab fa-youtube'
            id="input-social5"
            ariaLabel="youtube"
            ariaDescribedby="input-social5"
            onChange={this.handleTitleChange}
            error={errors.youtube}
          />
        </div>
      );
    }
    return (
      <div>
        <Container className="h-100">
          <Row className="h-100">
            <Col
              xs={12}
              md={{ span: 6, offset: 3 }}
              style={{ marginTop: "7rem", marginBottom: "5rem" }}>
              <Button variant="dark" as={Link} to="/dashboard">
                Go Back
              </Button>
              <h1 className="display-4 text-center mb-0">Basic Profile</h1>
              <p className="lead text-center">
                Complete this form to get you started
              </p>

              <Form onSubmit={this.onSubmit} >
                <TextInputField
                  controlId="formBasicName"
                  name="handle"
                  value={handle}
                  type="text"
                  placeholder="Enter your profile handle"
                  onChange={this.handleTitleChange}
                  info={"A unique handle for your profile URL"}
                  error={errors.handle}
                />
                <SelectListGroup
                  name="status"
                  value={status}
                  onChange={this.handleTitleChange}
                  error={errors.status}
                  options={options}
                  info={"Give us an idea of where you are in your career"}
                />
                <TextInputField
                  controlId="formBasicCompany"
                  name="company"
                  value={company}
                  type="text"
                  placeholder="Company"
                  onChange={this.handleTitleChange}
                  error={errors.company}
                  info={"Company you are working for"}
                />
                <TextInputField
                  controlId="formBasicWebsite"
                  name="website"
                  value={website}
                  type="text"
                  placeholder="Website"
                  onChange={this.handleTitleChange}
                  error={errors.website}
                  info={"Company you are working for"}
                />
                <TextInputField
                  controlId="formBasicLocation"
                  name="location"
                  value={location}
                  type="text"
                  placeholder="Your location"
                  onChange={this.handleTitleChange}
                  error={errors.location}
                  info={"City & state (eg. Boston, MA)"}
                />
                <TextInputField
                  controlId="formBasicSkills"
                  name="skills"
                  value={skills}
                  type="text"
                  placeholder="Skills"
                  onChange={this.handleTitleChange}
                  error={errors.skills}
                  info={
                    "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                  }
                />
                <TextInputField
                  controlId="formBasicGithub"
                  name="githubusername"
                  value={githubusername}
                  type="text"
                  placeholder="Github Username"
                  onChange={this.handleTitleChange}
                  error={errors.githubusername}
                  info={
                    "Your github username"
                  }
                />
                <TextAreaField
                  name="bio"
                  value={bio}
                  controlId="textArea1"
                  placeholder="Enter a short intro about you"
                  info={"Tell us a little about yourself"}
                  onChange={this.handleTitleChange}
                  error={errors.bio}
                />
                <Form.Group className="mt-4" as={Col}>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}>
                    Add Social Network Links
                  </Button>{" "}
                  <span className="text-muted">Optional</span>
                </Form.Group>
                {socialInputs}

                <Form.Group className="mt-4" as={Col}>
                  <Button type='submit' className="btn-block" variant="success">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
