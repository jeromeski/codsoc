import React, { Component } from "react";
// import isEmpty from "../../validation/is-empty";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props;

    const expContent = experience.map((exp, index) => (
      <ListGroupItem key={index}>
        <h5>{exp.company}</h5>
        <div>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> to{" "}
          {exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : "Current"}
        </div>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          <strong>Location:</strong> {exp.location}
        </p>
        <p>
          <strong>Description:</strong> {exp.description}
        </p>
      </ListGroupItem>
    ));

    const eduContent = education.map((edu, index) => (
      <ListGroupItem key={index}>
        <h5>{edu.school}</h5>
        <div>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> to{" "}
          {edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : "Current"}
        </div>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Location:</strong> {edu.location}
        </p>
        <p>
          <strong>Description:</strong> {edu.description}
        </p>
      </ListGroupItem>
    ));

    return (
      <Row>
        <Col xs={12} md={6} className='mb-0'>
          <ListGroup>
            <ListGroupItem>
              <h5 className="text-center text-info">Experience</h5>
            </ListGroupItem>
            {expContent}
          </ListGroup>
        </Col>
        <Col xs={12} md={6}>
          <ListGroup>
            <ListGroupItem>
              <h5 className="text-center text-info">Education</h5>
            </ListGroupItem>
            {eduContent}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default ProfileCreds;
