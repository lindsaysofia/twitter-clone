import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import FeedTweet from './FeedTweet';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore"; 

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'tweets'));
    //  orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newTweets = [];
      querySnapshot.forEach((doc) => {
        newTweets.push(doc.data());
      });
      setTweets(newTweets);
    });
  }, []);

  return (
    <div className="feed">
      {tweets.map((tweet, index) => {
        return (
          <FeedTweet key={`${tweet.id}${index}`} tweet={tweet} />
        );
      })}
    </div>
  )
}

export default Feed;