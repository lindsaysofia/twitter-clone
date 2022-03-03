import React from 'react';
import '../styles/CreateTweet.css';
import Avatar from '@mui/material/Avatar';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@mui/material/IconButton';

function CreateTweet() {
  return (
    <form className="createTweet">
      <div className="createTweet__top">
        <Avatar src=""/>
        <textarea
          placeholder="What's happening?"
          minLength="1"
          maxLength="280"
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