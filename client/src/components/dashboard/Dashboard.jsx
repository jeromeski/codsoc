import React, { Component } from "react";

import { Container, Row, Col, Button, Form, FormGroup } from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import SelectInputField from "../common/SelectInputField";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";
import SocialMediaInputField from "../common/SocialMediaInputField";

class Dashboard extends Component {

  
  render() {
    const { name, errors, isLoading } = this.props;
    return (
      <div className="create-profile">
        <Container className="h-100 justify-content-center">
          <Row className="h-100 main">
            <Col
              // className='m-auto'
              xs={12}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              style={{ marginTop: "7rem" }}>
              <Button
              variant="secondary"
              >Go back</Button>

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
                  error={errors.name}
                  info={'A unique handle for your profile URL'}
                />
                <SelectInputField 
                info={'Give us an idea of where you are in your career'}
                />
                <TextInputField
                  controlId="formBasicCompany"
                  name="company"
                  value={name}
                  type="text"
                  placeholder="Company"
                  onChange={this.handleTitleChange}
                  
                  info={'Company you are working for'}
                />
                <TextInputField
                  controlId="formBasicLocation"
                  name="location"
                  value={name}
                  type="text"
                  placeholder="Your location"
                  onChange={this.handleTitleChange}
                  
                  info={'City & state (eg. Boston, MA)'}
                />
                <TextInputField
                  controlId="formBasicSkills"
                  name="skills"
                  value={name}
                  type="text"
                  placeholder="Skills"
                  onChange={this.handleTitleChange}
                  
                  info={'Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)'}
                />
                <TextAreaField
                  controlId="formBasicTextArea"
                  placeholder="Enter some text here"
                  info={'Tell us a little about yourself'}
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
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, errors, isLoading }) => ({
  auth,
  errors,
  isLoading
});

export default connect(mapStateToProps, null)(Dashboard);
