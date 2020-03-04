import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  NavLink
} from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import SelectInputField from "../common/SelectInputField";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";
import SocialMediaInputField from "../common/SocialMediaInputField";
import { getCurrentProfile } from "../../redux/profile/profile.actions";
import SpinnerComponent from "../common/Spinner";

class Dashboard extends Component {
  // state = {
  //   name: '',
  //   locality: '',
  //   skills: '',
  //   company: ''
  //   }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
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
            <p className="lead text-muted">You have not yet setup a profile, please add some info.</p>
            <Button
              className='mt-4'
              onClick={() => console.log("clicked")}>Create Profile</Button>
          </div>
        );
      }
    }

    return (
      <div className="create-profile">
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

/*

<Col
              // className='my-auto'
              xs={12}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              style={{ marginTop: "7rem", marginBottom: "5rem" }}
              >
              
            <Button variant="secondary">Go back</Button>

              <h1 className="display-4 text-center mb-0">Basic Profile</h1>
              <h4 className="text-center mb-4">
                Let's make your profile stand out
              </h4>

              <Form
                // onSubmit={this.handleFormSubmit}
                autoComplete="off">
                <TextInputField
                  controlId="formBasicName"
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Enter your profile handle"
                  onChange={this.handleTitleChange}
                  info={"A unique handle for your profile URL"}
                />
                <SelectInputField
                  info={"Give us an idea of where you are in your career"}
                />
                <TextInputField
                  controlId="formBasicCompany"
                  name="company"
                  value={company}
                  type="text"
                  placeholder="Company"
                  onChange={this.handleTitleChange}
                  info={"Company you are working for"}
                />
                <TextInputField
                  controlId="formBasicLocation"
                  name="locality"
                  value={locality}
                  type="text"
                  placeholder="Your location"
                  onChange={this.handleTitleChange}
                  info={"City & state (eg. Boston, MA)"}
                />
                <TextInputField
                  controlId="formBasicSkills"
                  name="skills"
                  value={skills}
                  type="text"
                  placeholder="Skills"
                  onChange={this.handleTitleChange}
                  info={
                    "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                  }
                />
                <TextAreaField
                  controlId="formBasicTextArea"
                  placeholder="Enter some text here"
                  info={"Tell us a little about yourself"}
                />
                <FormGroup className="mt-4" as={Col}>
                  <Button variant="secondary">Add Social Network Links</Button>
                </FormGroup>
                <SocialMediaInputField
                  type="text"
                  placeholder="twitter"
                  icon={["fab", "twitter"]}
                  id="input-social1"
                  ariaLabel="twitter"
                  ariaDescribedby="input-social1"
                />
                <SocialMediaInputField
                  type="text"
                  placeholder="facebook"
                  icon={["fab", "facebook"]}
                  id="input-social2"
                  ariaLabel="facebook"
                  ariaDescribedby="input-social2"
                />
                <SocialMediaInputField
                  type="text"
                  placeholder="instagram"
                  icon={["fab", "instagram"]}
                  id="input-social3"
                  ariaLabel="instagram"
                  ariaDescribedby="input-social3"
                />
                <SocialMediaInputField
                  type="text"
                  placeholder="linkedin"
                  icon={["fab", "linkedin"]}
                  id="input-social4"
                  ariaLabel="linkedin"
                  ariaDescribedby="input-social4"
                />
                <SocialMediaInputField
                  type="text"
                  placeholder="youtube"
                  icon={["fab", "youtube"]}
                  id="input-social5"
                  ariaLabel="youtube"
                  ariaDescribedby="input-social5"
                />
              </Form>
              <FormGroup className="mt-4" as={Col}>
                <Button className="btn-block" variant="success" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </Col>
*/
