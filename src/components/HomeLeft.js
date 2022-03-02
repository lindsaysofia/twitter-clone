import React from 'react';
import '../styles/HomeLeft.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function HomeLeft() {
  return (
    <div className="homeLeft">
      <TwitterIcon className="homeLeft__logo"/>
      <div className="homeLeft__option">
        <HomeIcon />
        <h4>Home</h4>
      </div>
      <div className="homeLeft__option">
        <TagIcon />
        <h4>Explore</h4>
      </div>
      <div className="homeLeft__option">
        <NotificationsNoneOutlinedIcon />
        <h4>Notifications</h4>
      </div>
      <div className="homeLeft__option">
        <EmailOutlinedIcon />
        <h4>Messages</h4>
      </div>
      <div className="homeLeft__option">
        <BookmarkBorderOutlinedIcon />
        <h4>Bookmarks</h4>
      </div>
      <div className="homeLeft__option">
        <FormatListBulletedOutlinedIcon />
        <h4>Lists</h4>
      </div>
      <div className="homeLeft__option">
        <PermIdentityOutlinedIcon />
        <h4>Profile</h4>
      </div>
      <div className="homeLeft__option">
        <MoreHorizOutlinedIcon />
        <h4>More</h4>
      </div>
      <button className="homeLeft__button">Tweet</button>
    </div>
  )
}

export default HomeLeft;