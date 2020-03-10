import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
// import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Card 
        className='mx-auto mb-3'
        bg="light" 
        style={{ width: "15rem" }}
        >
        <Card.Body as={Row} className="mb-0">
          <Col xs={6} className="mx-0 pr-0">
            <Image fluid src={profile.user.avatar} alt="" roundedCircle />
          </Col>
          <Col>
            <h6 className="strong bold" style={{ fontSize: ".85rem" }}>
              {profile.user.name}
            </h6>
            <p className="text-muted" style={{ fontSize: ".85rem" }}>
              {profile.status}
            </p>
            <Card.Text className="small">{profile.location}</Card.Text>
          </Col>
        </Card.Body>
        <div>
          <hr style={{
            margin: 0
          }} />
        </div>
        <Card.Body as={Row} className='mt-0'>
          <Col 
            xs={12} style={{
            height: '5rem'
          }}>
            {profile.skills.slice(0, 4).map((skill, index) => (
              <Button className='mr-1 mb-1 py-0' size='sm' variant="secondary" key={index}>
                {skill}
              </Button>
            ))}
          </Col >
          <Col xs={12}>
            <Button as={Link} to={`profile/${profile.handle}`} className="btn-sm" variant="success">View profile</Button>
          </Col>
        </Card.Body>
      </Card>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
