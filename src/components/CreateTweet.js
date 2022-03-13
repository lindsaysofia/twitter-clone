import React, { useState } from 'react';
import '../styles/CreateTweet.css';
import Avatar from '@mui/material/Avatar';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from './StateProvider';
import db from '../firebase';
import { collection, addDoc, Timestamp, doc,setDoc } from "firebase/firestore";

function CreateTweet() {
  const [{ user }] = useStateValue();
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTweetRef = doc(collection(db, 'tweets'));
    setDoc(newTweetRef, {
      created_at: Timestamp.now(),
      in_like_to_tweetid: '',
      in_reply_to_tweetid: '',
      in_retweet_to_tweetid: '',
      like_count: 0,
      reply_count: 0,
      retweet_count: 0,
      text,
      url,
      uid: user.uid,
      tweetid: newTweetRef.id,
    })
    .catch((err) => console.log(err));
    setText('');
    setUrl('');
  };

  return (
    <form className="createTweet" onSubmit={handleSubmit}>
      <div className="createTweet__top">
        <Avatar src={user.photoURL}/>
        <textarea
          placeholder="What's happening?"
          minLength="1"
          maxLength="280"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="createTweet__bottom">
        <div className="createTweet__asides">
          <div 
            className="createTweet__engagement"
            title="Media"
          >
            <IconButton>
              <BrokenImageOutlinedIcon />
            </IconButton>
            <input 
            type=""
            placeholder="image URL (Optional)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          </div>
          <div 
            className="createTweet__engagement"
            title="GIF"
          >
            <IconButton>
              <GifBoxIcon />
            </IconButton>
          </div>
          <div 
            className="createTweet__engagement"
            title="Poll"
          >
            <IconButton>
              <PollIcon />
            </IconButton>
          </div>
          <div 
            className="createTweet__engagement"
            title="Emoji"
          >
            <IconButton>
              <SentimentSatisfiedAltOutlinedIcon />
            </IconButton>
          </div>
          <div 
            className="createTweet__engagement"
            title="Schedule"
          >
            <IconButton>
              <DateRangeOutlinedIcon />
            </IconButton>
          </div>
          <div 
            className="createTweet__engagement"
            title="Location"
          >
            <IconButton>
              <LocationOnOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="createTweet__submit">
          <p>0/280</p>
          <button type="submit">Tweet</button>
        </div>
      </div>
    </form>
  )
}

export default CreateTweet;