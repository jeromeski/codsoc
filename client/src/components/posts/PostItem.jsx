import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Card, Col, Row, Image, Button, Badge } from "react-bootstrap";
import { deletePost, addLike, removeLike } from '../../redux/post/post.actions';

class PostItem extends Component {

  handleDeletePost = (evt, id) => {
    console.log(evt)
    this.props.deletePost(id)
  }

  handleLike = (evt, id) => {
    this.props.addLike(id)
  }

  handleUnlike = (evt, id) => {
    this.props.removeLike(id)
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if(likes.filter(like => like.user === auth.user.id).length > 0 ) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { post, auth } = this.props;

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
                <div
                  className="avatar-container">
                  <Image
                    className="avatar-image"
                    roundedCircle
                    src={post.avatar}
                  />
                  <p className="text-center">{post.name}</p>
                </div>

            </Col>
            <Col xs={9} className="h-100">
              <Row className="h-100 justify-content-between">
                <Col className="align-self-start" xs={12}>
                  <p className="lead mb-0">{post.text}</p>
                </Col>
                <Col className="align-self-end xs={12}">
                  <Button 
                    variant="light" 
                    className="mr-1" 
                    size="sm"
                    onClick={(evt) => this.handleLike(evt, post._id)}
                  >  
                  <i className={classnames('fas fa-thumbs-up',{
                    'text-info' : this.findUserLike(post.likes) 
                  })}></i>
                    <Badge variant="light">{post.likes.length}</Badge>
                  </Button>
                  <Button 
                    variant="light" 
                    className="mr-1" 
                    size="sm"
                    onClick={(evt) => this.handleUnlike(evt, post._id)}
                  >
                    <i className="text-secondary fas fa-thumbs-down"></i>
                  </Button>
                  <Button
                    size="sm"
                    variant="light"
                    as={Link}
                    to={`/post/${post._id}`}>
                    <i className="fa fa-comment-o mr-1" aria-hidden="true"></i>
                    Comment
                  </Button>
                  {post.user === auth.user.id ? (
                    <Button size="sm" variant="light" onClick={(evt) => this.handleDeletePost(evt, post._id)}>
                      <i
                        className="fa fa-trash mr-1"
                        aria-hidden="true"></i>
                        <span>Delete Post</span>
                    </Button>
                  ) : (
                    ""
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

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {deletePost, addLike, removeLike})(PostItem);
