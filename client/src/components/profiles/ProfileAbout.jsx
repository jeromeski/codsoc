import React, { Component, Fragment } from "react";
import isEmpty from "../../validation/is-empty";
import { Button, Card } from "react-bootstrap";


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
              <Button className='mr-1 mb-1 py-0' size='md' variant="secondary" key={index}>
                {skill}
              </Button>
            ))}
            </Card.Text>
          </Card.Body>
          
        )}
      </Fragment>
    );
  }
}

export default ProfileAbout;
