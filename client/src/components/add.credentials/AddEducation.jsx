import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import { addEducation } from "../../redux/profile/profile.actions";

class AddEducation extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleOnCheck = () => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  handleOnSubmit = evt => {
    evt.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addEducation(eduData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="add-education">
        <Container>
          <Row>
            <Col
              xs={12}
              md={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              style={{ marginTop: "7rem", marginBottom: "5rem" }}>
              <Button variant="dark" as={Link} to="/dashboard">
                Go Back
              </Button>

              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Tell your audience about your education
              </p>
              {/*<small className='d-block pb-3'>* = required fields</small>*/}

              <Form onSubmit={this.handleOnSubmit}>
                <TextInputField
                  placeholder="School"
                  name="school"
                  value={this.state.school}
                  onChange={this.handleTitleChange}
                  error={errors.school}
                />
                <TextInputField
                  placeholder="Degree"
                  name="degree"
                  value={this.state.degree}
                  onChange={this.handleTitleChange}
                  error={errors.degree}
                />
                <TextInputField
                  placeholder="Field of study"
                  name="fieldofstudy"
                  value={this.state.fieldofstudy}
                  onChange={this.handleTitleChange}
                  error={errors.fieldofstudy}
                />
                <h6 className="ml-4">From Date</h6>
                <TextInputField
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.handleTitleChange}
                  error={errors.from}
                />
                <h6 className="ml-4">To Date</h6>
                <TextInputField
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.handleTitleChange}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <Form.Group className="ml-4" controlId="formCheckbox">
                  <Form.Check
                  id="current"
                  type="checkbox"
                  name="current"
                  value={this.state.current}
                  checked={this.state.current}
                  label="Current"
                  onChange={this.handleOnCheck}
                  />
                </Form.Group>
                <TextAreaField
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleTitleChange}
                  info="Tell us about the position"
                />
                <Form.Group as={Col}>
                  <Button className="btn-block" variant="success" type="submit">
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

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
