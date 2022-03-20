import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import FeedTweet from './FeedTweet';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore";

function Feed({ feed, category, uid }) {
  const [tweets, setTweets] = useState([]);
  console.log(category);

  useEffect(() => {
    let q;
    if (feed.length > 0 && category) {
      switch(category) {
        case 'tweetsandreplies':
          q = query(collection(db, 'tweets'), where('tweetid', 'in', feed), where('uid', '==', uid), where('in_like_to_tweetid', '==', ''), orderBy('created_at', 'desc'));
          break;
        case 'media':
          q = query(collection(db, 'tweets'), where('tweetid', 'in', feed), where('uid', '==', uid), where('url', '!=', ''), orderBy('url'), orderBy('created_at', 'desc'));
          break;
        case 'likes':
          q = query(collection(db, 'tweets'), where('tweetid', 'in', feed), where('uid', '==', uid), where('in_like_to_tweetid', '!=', ''), orderBy('in_like_to_tweetid'), orderBy('created_at', 'desc'));
          break;
        default:
          q = query(collection(db, 'tweets'), where('tweetid', 'in', feed), where('uid', '==', uid), orderBy('created_at', 'desc'));
          break;
      }
      
    } else {
      q = query(collection(db, 'tweets'), orderBy('created_at', 'desc'));
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newTweets = [];
      querySnapshot.forEach((doc) => {
        newTweets.push(doc.data());
      });
      setTweets(newTweets);
    });

    return () => {
      setTweets([]);
    }
  }, [category]);

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