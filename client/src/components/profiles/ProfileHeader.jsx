import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';

class ProfileHeader extends Component {
  render() {
    const {profile} = this.props
    return (
      <div>
        <Card>
          <Card.Header>
            <Image src={profile.user.avatar} />
          </Card.Header>
        </Card>
      </div>
    );
  }
}


export default ProfileHeader;