import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../redux/post/post.actions";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostItem from "../posts/PostItem";
import SpinnerComponent from "../common/Spinner";
import CommentForm from "./CommentForm";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <SpinnerComponent />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </div>
      );
    }
    return (
      <div className="post">
        <Container>
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              style={{ marginTop: "5rem" }}
              >
              <Button variant="light" as={Link} to="/feed">
                Back to feed
              </Button>
              {postContent}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
