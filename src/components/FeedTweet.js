import React, { useState } from 'react';
import '../styles/FeedTweet.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import Avatar from '@mui/material/Avatar';
import {  Link } from "react-router-dom";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import dateFormat, { masks } from "dateformat";
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase';


function FeedTweet(props) {
  const { created_at, in_like_to_tweetid, in_reply_to_tweetid, in_retweet_to_tweetid, like_count, reply_count, retweet_count, text, url, uid } = props.tweet;

  const [user, setUser] = useState({name: '', at: ''})

  const docRef = doc(db, 'users', uid);
  getDoc(docRef)
    .then((docSnap) => {
      const { name, at } = docSnap.data();
      setUser({
        name,
        at,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  const { name, at } = user;

  let top = '';
  if (in_like_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <FavoriteBorderIcon />
        <p><Link to="/">{name}</Link> liked</p>
      </div>
    );
  } else if (in_reply_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <p><Link to="/">{name}</Link> replied to</p>
      </div>
    );
  } else if (in_retweet_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <CompareArrowsIcon />
        <p><Link to="/">{name}</Link> retweeted</p>
      </div>
    );
  }

  return (
    <div className="feedTweet">
      {top}
      <div className="feedTweet__middle">
        <Avatar src="" />
        <div className="feedTweet_info">
          <div className="feedTweet__header">
            <div className="feedTweet__user">
              <Link to="/">{name}</Link>
              <p>{at}</p>
              <FiberManualRecordIcon />
              <p>{dateFormat(new Date(created_at?.toDate()), 'd mmm yy')}</p>
            </div>
            <div className="feedTweet__more">
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="feedTweet__text">
            {text}
          </div>
          <div className="feedTweet__media">
            <img src={url} alt="" />
          </div>
        </div>
      </div>
      <div className="feedTweet__bottom">
        <div 
          className="feedTweet__engagement"
          title="Reply"
          style={{color: 'var(--color-blue)'}}
        >
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon style={{color: 'var(--color-blue)'}} />
          </IconButton>
          <p>{reply_count}</p>
        </div>
        <div 
          className="feedTweet__engagement"
          title="Retweet"
          style={{color: '#4cbb17'}}
        >
          <IconButton>
            <CompareArrowsIcon style={{color: '#4cbb17'}}/>
          </IconButton>
          <p>{retweet_count}</p>
        </div>
        <div 
          className="feedTweet__engagement"
          title="Like"
          style={{color: '#ff4500'}}
        >
          <IconButton>
            <FavoriteBorderIcon style={{color: '#ff4500'}} />
          </IconButton>
          <p>{like_count}</p>
        </div>
        <div 
          className="feedTweet__engagement"
          title="Share"
        >
          <IconButton>
            <IosShareIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default FeedTweet;