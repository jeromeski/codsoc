import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../redux/post/post.actions";
import { Card, Col, Image, Button, Row } from "react-bootstrap";

class CommentItem extends Component {

  handleDeleteComment = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  }


  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="post-item" style={{ margin: "2rem 0 2rem 0" }}>
        <Card>
          <Card.Body as={Row}>
            <Col
              xs={3}
              className="d-flex justify-content-center"
              style={{
                paddingBottom: "1.5rem"
              }}>
              <div className="avatar-container">
                <Image
                  className="avatar-image"
                  roundedCircle
                  src={comment.avatar}
                />
                <p className="text-center">{comment.name}</p>
              </div>
            </Col>
            <Col xs={9} className="h-100">
              <Row className="h-100 justify-content-between">
                <Col className="align-self-start" xs={12}>
                  <p className="lead mb-0">{comment.text}</p>
                </Col>
                <Col className="align-self-end" xs={12}>
                {comment.user === auth.user.id ? (
                  <Button size="sm" variant="light" onClick={() => {this.handleDeleteComment( postId, comment._id)}}>
                    <i
                      className="fa fa-trash mr-1"
                      aria-hidden="true"></i>
                      <span>Delete Comment</span>
                  </Button>
                ) : (
                  null
                )}
                </Col>
              </Row>
            </Col>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {deleteComment})(CommentItem);
