import React from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import Profile from './Profile';
import '../styles/ProfileMain.css';

function ProfileMain() {
  return (
    <div className="profileMain">
      <HomeLeft />
      <Profile />
      <HomeRight />
    </div>
  )
}

export default ProfileMain;