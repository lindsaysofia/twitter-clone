import React from 'react';
import '../styles/CreateTweet.css';
import Avatar from '@mui/material/Avatar';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Tooltip from '@mui/material/Tooltip';
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
          <Tooltip title="Media">
            <IconButton>
              <BrokenImageOutlinedIcon />
            </IconButton>
          </Tooltip>
          <input 
            type=""
            placeholder="image URL (Optional)"
          />
          <Tooltip title="GIF">
            <IconButton>
              <GifBoxIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Poll">
            <IconButton>
              <PollIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Emoji">
            <IconButton>
              <SentimentSatisfiedAltOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Schedule">
            <IconButton>
              <DateRangeOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Location">
            <IconButton>
              <LocationOnOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="createTweet__submit">
          <h4>0/280</h4>
        <button type="submit">Tweet</button>
        </div>
      </div>
    </form>
  )
}

export default CreateTweet;