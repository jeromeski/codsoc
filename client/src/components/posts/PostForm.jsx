import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../redux/post/post.actions";
import { Card, Form, Button, Col } from "react-bootstrap";
import TextAreaField from "../common/TextAreaField";

class PostForm extends Component {

  state = {
    text: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };


  handleSubmit = evt => {
    evt.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  };

  render() {
    const { text, errors } = this.state;
    const { user } = this.props.auth
    return (
      <div className="post-form">
        <Card>
          <Card.Header>
            <Card.Title>Post a topic</Card.Title>
          </Card.Header>
          <Form className="mt-3" onSubmit={this.handleSubmit}>
            <Form.Group>
              <TextAreaField
                name="text"
                value={text}
                controlId="textArea1"
                placeholder="Type your topic here"
                onChange={this.handleTitleChange}
                error={errors.text}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({errors, auth}) => ({
  auth,
  errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
