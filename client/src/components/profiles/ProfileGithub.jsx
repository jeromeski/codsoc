import React, { Component } from "react";
import PropTypes from "prop-types";
import githubKey from "./keys";
import { Link } from "react-router-dom";
import { Badge, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";

class ProfileGithub extends Component {
  state = {
    clientId: githubKey.id,
    clientSecret: githubKey.secret,
    count: 5,
    sort: "created: asc",
    repos: []
  };

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    const repoItems = repos.map((repo, index) => (
      <ListGroupItem key={index}>
        <Row>
          <Col
            className="text-sm-center text-md-left"
            // xs={{ span: 6, offset: 3 }}
            md={6}>
            <h6>
              <Link
                to={repo.html_url}
                className="text-secondary"
                target="_blank">
                {repo.name}
              </Link>
            </h6>
            <p>{repo.description}</p>
          </Col>
          <Col
            className="text-sm-center text-md-right"
            // xs={{ span: 8, offset: 2 }}
            md={6}>
            <Badge variant="info" className="mr-1">
              Stars: {repo.stargazers_count}
            </Badge>
            <Badge variant="secondary" className="mr-1">
              Stars: {repo.watchers_count}
            </Badge>
            <Badge variant="success" className="mr-1">
              Stars: {repo.forks_count}
            </Badge>
          </Col>
        </Row>
      </ListGroupItem>
    ));
    return (
      <div ref="myRef">
        <ListGroup>
          <ListGroupItem>
            <h5 className="text-info">Latest Github Repos</h5>
          </ListGroupItem>
          {repoItems}
        </ListGroup>
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;

/*
Client ID
16d34a15e5f4aff1dedd
Client Secret
ed876ae87265c7e78f30453c83e2cf91d03dbea8
*/
