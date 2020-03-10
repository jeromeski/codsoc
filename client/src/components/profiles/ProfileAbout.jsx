import React, { Component, Fragment } from "react";
import isEmpty from "../../validation/is-empty";
import { Card, Badge } from "react-bootstrap";


class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    return (
      <Fragment>
        {isEmpty(profile.bio) ? null : (
          <Card.Body>
            <Card.Title className="text-center text-info">{profile.user.name}'s Bio</Card.Title>
            <Card.Text className="lead">{profile.bio}</Card.Text>
            <hr></hr>
            <Card.Title className="text-center text-info mb-2">Skill Set</Card.Title>
            <Card.Text style={{
              padding: '.5rem'
            }}>
            {profile.skills.map((skill, index) => (
              <Badge className='mr-2 badge-pill' size='lg' variant="light" key={index}>
                <span
                  style={{padding: '.25rem'}}
                >{skill}</span>
              </Badge>
            ))}
            </Card.Text>
          </Card.Body>
          
        )}
      </Fragment>
    );
  }
}

export default ProfileAbout;
