import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dateFormat, { masks } from "dateformat";
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase';

function Profile() {
  let { uid } = useParams();

  const [user, setUser] = useState({
    at: '',
    created_at: '',
    description: '',
    feed: [],
    followers: [],
    following: [],
    name: '',
    profile_banner_url: '',
    photoURL: ''
  });

  useEffect(() => {
    const docRef = doc(db, 'users', uid);
    getDoc(docRef)
      .then((docSnap) => {
        const {
          at,
          created_at,
          description,
          feed,
          followers,
          following,
          name,
          profile_banner_url,
          photoURL,
        } = docSnap.data();
        setUser({
          at,
          created_at,
          description,
          feed,
          followers,
          following,
          name,
          profile_banner_url,
          photoURL,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        setUser({
          at: '',
          created_at: '',
          description: '',
          feed: [],
          followers: [],
          following: [],
          name: '',
          profile_banner_url: '',
          photoURL: ''
        });
      }
  }, []);

  const {
    at,
    created_at,
    description,
    feed,
    followers,
    following,
    name,
    profile_banner_url,
    photoURL
  } = user;
  return (
    <div className="profile">
      <div className="profile__header" style={{backgroundImage: `url(${profile_banner_url})`}}>
        <IconButton title="Home">
          <HomeIcon />
        </IconButton>
        <IconButton title="Edit">
          <EditIcon />
        </IconButton>
      </div>
      <div className="profile__user">
        <div className="profile__info">
          <div className="profile__infoTop">
            <Avatar src={photoURL} />
            <button>Follow</button>
          </div>
          <h4>{name}</h4>
          <h5>@{at}</h5>
          <p>{description}</p>
          {/* <p><CalendarMonthIcon /> Joined {dateFormat(new Date(created_at?.toDate()), 'd mmm yy')}</p> */}
          <div className="profile__followings">
            <p className="profile__following">{following.length} Following</p>
            <p className="profile__followers">{followers.length} Followers</p>
          </div>
        </div>
        <div className="profile__tweets"></div>
      </div>
    </div>
  )
}

export default Profile;