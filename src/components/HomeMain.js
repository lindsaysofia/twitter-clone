import '../styles/HomeMain.css'

import React from 'react';
import CreateTweet from './CreateTweet';
import Feed from './Feed';
import { useStateValue } from './StateProvider';

function HomeMain() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="homeMain">
      {user ? <CreateTweet /> : ''}
      <Feed />
    </div>
  )
}

export default HomeMain;