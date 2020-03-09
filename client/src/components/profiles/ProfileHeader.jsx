import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <Card.Header className="text-center">
        <Image src={profile.user.avatar} roundedCircle />
        <Card.Title className="display-4 text-center">{profile.user.name}</Card.Title>
        <Card.Text className="lead text-center">
          {profile.status}{" "}
          {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
        </Card.Text>
        {isEmpty(profile.location) ? null : <Card.Text>{profile.location}</Card.Text>}
        <p>
          {isEmpty(profile.website) ? null : (
            <Link
              className="text-info p-2"
              to={profile.website}
              >
              <i className="fas fa-globe fa-2x" />
            </Link>
          )}

          {isEmpty(profile.social && profile.social.twitter) ? null : (
            <Link
              className="text-info p-2"
              to={profile.social.twitter}
              >
              <i className="fab fa-twitter fa-2x" />
            </Link>
          )}

          {isEmpty(profile.social && profile.social.facebook) ? null : (
            <Link
              className="text-info p-2"
              to={profile.social.facebook}
              >
              <i className="fab fa-facebook fa-2x" />
            </Link>
          )}

          {isEmpty(profile.social && profile.social.linkedin) ? null : (
            <Link
              className="text-info p-2"
              to={profile.social.linkedin}
              >
              <i className="fab fa-linkedin fa-2x" />
            </Link>
          )}

          {isEmpty(profile.social && profile.social.youtube) ? null : (
            <Link
              className="text-info p-2"
              to={profile.social.youtube}
              >
              <i className="fab fa-youtube fa-2x" />
            </Link>
          )}

          {isEmpty(profile.social && profile.social.instagram) ? null : (
            <Link
              className="text-info p-2"
              to={profile.social.instagram}
              target="_blank">
              <i className="fab fa-instagram fa-2x" />
            </Link>
          )}
        </p>
      </Card.Header>
    );
  }
}

export default ProfileHeader;
