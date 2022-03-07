import React from 'react';
import '../styles/HomeRight.css';
import Happening from './Happening';
import Search from './Search';

function HomeRight() {
  return (
    <div className="homeRight">
      <Search />
      <Happening />
    </div>
  )
}

export default HomeRight;