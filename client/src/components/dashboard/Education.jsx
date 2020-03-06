import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import Moment from "react-moment";
import { deleteEducation } from "../../redux/profile/profile.actions";

class Education extends Component {
  handleDeleteAnEdu = id => {
    
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>
          <span className="text-muted"> - &nbsp;</span>
          { edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : 'Current' }
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => this.handleDeleteAnEdu(edu._id)}>
            Delete
          </Button>
        </td>
      </tr>
    ));
    return (
      <div className="education">
        <h4 className="mb-4">Experience Credentials</h4>
        <Table>
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </Table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { deleteEducation })(Education);
