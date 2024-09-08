import React from 'react';
import './UserProfile.css';
import profileimg  from './profileimg.png';

const UserProfile = (props) => {
  const { name, email, bio } = props;

  return (
    <div className="user-profile">
    <img className="profile-image" src={profileimg} alt="Profile" />
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default UserProfile;
