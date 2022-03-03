import '../styles/HomeMain.css'

import React from 'react';
import CreateTweet from './CreateTweet';
import Feed from './Feed';

function HomeMain() {
  return (
    <div className="homeMain">
      <CreateTweet />
      <Feed />
    </div>
  )
}

export default HomeMain;