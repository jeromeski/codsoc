import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaField from "../common/TextAreaField";
import SocialMediaInputField from "../common/SocialMediaInputField";
import { connect } from "react-redux";

class CreateProfile extends Component {
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

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = evt => {
    evt.preventDefaul();
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
            icon={["fab", "twitter"]}
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
            icon={["fab", "facebook"]}
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
            icon={["fab", "instagram"]}
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
            icon={["fab", "linkedin"]}
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
            icon={["fab", "youtube"]}
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
              lg={{ span: 6, offset: 3 }}
              style={{ marginTop: "7rem", marginBottom: "5rem" }}>
              <Button variant="secondary">Go back</Button>

              <h1 className="display-4 text-center mb-0">Basic Profile</h1>
              <h4 className="text-center mb-4">
                Let's make your profile stand out
              </h4>

              <Form autoComplete="off" onSubmit={this.handleSubmit}>
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
                    "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
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
                  </Button>{' '}
                  <span className='text-muted'>Optional</span>
                </Form.Group>
                {socialInputs}
              </Form>
              <Form.Group className="mt-4" as={Col}>
                <Button className="btn-block" variant="success">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
