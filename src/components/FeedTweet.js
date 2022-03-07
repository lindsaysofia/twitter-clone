import React from 'react';
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

function FeedTweet({ created_at, in_like_to_tweetid, in_reply_to_tweetid, in_retweet_to_tweetid, like_count, reply_count, retweet_count, text, at, uid }) {

  let top = '';
  if (in_like_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <FavoriteBorderIcon />
        <p><Link to="/">ProfileName</Link> liked</p>
      </div>
    );
  } else if (in_reply_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <p><Link to="/">ProfileName</Link> replied to</p>
      </div>
    );
  } else if (in_retweet_to_tweetid) {
    top = (
      <div className="feedTweet__top">
        <CompareArrowsIcon />
        <p><Link to="/">ProfileName</Link> retweeted</p>
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
              <Link to="/">ProfileName</Link>
              <p>@username</p>
              <FiberManualRecordIcon />
              <p>Date</p>
            </div>
            <div className="feedTweet__more">
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="feedTweet__text">
            {'Lorem ipsum dolor sit amet, liber posidonium suscipiantur vim cu, eu duo vitae dictas. Consulatu evertitur argumentum duo an. Id percipitur persequeris quo. No modo oratio pro. An mundi nostrum splendide has. Modus ocurreret at mea.'}
          </div>
          <div className="feedTweet__media">
            <img src={""} alt="" />
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
          <p>{0}</p>
        </div>
        <div 
          className="feedTweet__engagement"
          title="Retweet"
          style={{color: '#4cbb17'}}
        >
          <IconButton>
            <CompareArrowsIcon style={{color: '#4cbb17'}}/>
          </IconButton>
          <p>{0}</p>
        </div>
        <div 
          className="feedTweet__engagement"
          title="Like"
          style={{color: '#ff4500'}}
        >
          <IconButton>
            <FavoriteBorderIcon style={{color: '#ff4500'}} />
          </IconButton>
          <p>{0}</p>
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