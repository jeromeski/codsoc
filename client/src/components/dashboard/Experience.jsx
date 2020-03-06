import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import Moment from "react-moment";
import { deleteExperience } from "../../redux/profile/profile.actions";

class Experience extends Component {
  handleDeleteAnExp = id => {

    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>
          <span className="text-muted"> - &nbsp;</span>
          { exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : 'Current' }
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => this.handleDeleteAnExp(exp._id)}>
            Delete
          </Button>
        </td>
      </tr>
    ));
    return (
      <div className="experience">
        <h4 className="mb-4">Experience Credentials</h4>
        <Table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{experience}</tbody>
        </Table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { deleteExperience })(Experience);
