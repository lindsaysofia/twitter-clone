import '../styles/HomeMain.css'

import React, { useState, useEffect } from 'react';
import CreateTweet from './CreateTweet';
import Feed from './Feed';
import { useStateValue } from './StateProvider';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase';

function HomeMain() {
  const [{ user }, dispatch] = useStateValue();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      getDoc(docRef)
        .then((docSnap) => {
          setFeed(docSnap.data().feed);
      });
    }
    return () => {
      setFeed([]);
    };
  }, [user]);

  if (user) {
    return (
      <div className="homeMain">
        <CreateTweet />
        <Feed from="home" feed={feed} />
      </div>
    );
  } return (
    <div className="homeMain">
      <Feed />
    </div>
  );

  
}

export default HomeMain;