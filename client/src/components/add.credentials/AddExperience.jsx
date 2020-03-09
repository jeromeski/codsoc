import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextAreaField from "../common/TextAreaField";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import TextInputField from "../common/TextInputField";
import { addExperience } from "../../redux/profile/profile.actions";

class AddExperience extends Component {
  state = {
    company: "",
    title: "",
    location: "",
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

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
      disabled: this.state.disabled
    };
    this.props.addExperience(expData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="add-experience">
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

              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">
                Any job or position you have had in the past
              </p>
              {/*<small className='d-block pb-3'>* = required fields</small>*/}

              <Form onSubmit={this.handleOnSubmit}>
                <TextInputField
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleTitleChange}
                  error={errors.company}
                />
                <TextInputField
                  placeholder="Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  error={errors.title}
                />
                <TextInputField
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleTitleChange}
                  error={errors.location}
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
                    label="Current Job"
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

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
