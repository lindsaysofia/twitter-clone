import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import FeedTweet from './FeedTweet';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { useStateValue } from './StateProvider';

function Feed({ from, feed, category, uid }) {
  const [{ user }] = useStateValue();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    let q;
    switch(from) {
      case 'profile':
        switch(category) {
          case 'tweetsandreplies':
            q = query(collection(db, 'tweets'), where('uid', '==', uid), where('in_like_to_tweetid', '==', ''), orderBy('created_at', 'desc'));
            break;
          case 'media':
            q = query(collection(db, 'tweets'), where('uid', '==', uid), where('url', '!=', ''), orderBy('url'), orderBy('created_at', 'desc'));
            break;
          case 'likes':
            q = query(collection(db, 'tweets'), where('uid', '==', uid), where('in_like_to_tweetid', '!=', ''), orderBy('in_like_to_tweetid'), orderBy('created_at', 'desc'));
            break;
          default:
            q = query(collection(db, 'tweets'), where('uid', '==', uid), where('in_like_to_tweetid', '==', ''), where('in_reply_to_tweetid', '==', ''), orderBy('created_at', 'desc'));
            break;
        break;
        }
        break;
      case 'home':
        if (feed && feed.length > 0) {
          q = query(collection(db, 'tweets'), where('tweetid', 'in', feed), orderBy('created_at', 'desc'));
        } else {
          q = query(collection(db, 'tweets'), where('tweetid', 'in', ['']), orderBy('created_at', 'desc'));
        }
        break;
      default:
        q = query(collection(db, 'tweets'), orderBy('created_at', 'desc'));
        break;
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
  }, [category, user, feed]);

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