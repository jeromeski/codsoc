import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import SpinnerComponent from '../common/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import { getPosts } from '../../redux/post/post.actions';
import PostFeed from './PostFeed';



class Posts extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    const {posts, loading} = this.props.post

    let postContent;

    if(posts === null || loading) {
      postContent = <SpinnerComponent/>
    } else {
      postContent = <PostFeed posts={posts}/>
    }
    return (
      <div className='feed'>
        <Container>
          <Row>
            <Col
              xs={12}
              md={{span:8, offset:2}}
              style={{marginTop: '5rem'}}
            >
              <PostForm/>
              {postContent}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts);