import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';


const ProfileActions = () => {
  return (
    <ButtonToolbar className='profile-actions mb-4'>
      <ButtonGroup>
        <Button variant='light' as={Link} to='/edit-profile'>
        <i className='fas fa-user' aria-hidden='true'></i>{' '}
          Edit Profile
        </Button>
        <Button variant='light' as={Link} to='/add-experience'>
        <i className='fab fa-black-tie' aria-hidden='true'></i>{' '}
          Add Experience
        </Button>
        <Button variant='light' as={Link} to='/add-education'>
        <i className='fas fa-graduation-cap' aria-hidden='true'></i>{' '}
          Add Education
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default ProfileActions;