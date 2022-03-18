import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dateFormat, { masks } from "dateformat";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import db from '../firebase';

function Profile() {
  let { uid } = useParams();

  const [profile, setProfile] = useState({
    at: '',
    created_at: Timestamp.now(),
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
        setProfile({
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
        setProfile({
          at: '',
          created_at: Timestamp.now(),
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
  } = profile;
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
            <Avatar className="profile__avatar" src={photoURL} />
            <button>Follow</button>
          </div>
          <h4 className="profile__name">{name}</h4>
          <h5 className="profile__at">@{at}</h5>
          <p className="profile__description">{description}</p>
          <p className="profile__created_at"><CalendarMonthIcon /> Joined {dateFormat(new Date(created_at?.toDate()), 'mmmm yyyy')}</p>
          <div className="profile__followings">
            <p className="profile__following"><span>{following.length}</span> Following</p>
            <p className="profile__followers"><span>{followers.length}</span> Followers</p>
          </div>
        </div>
        <div className="profile__tweets">
          <div className="profile__options">
            <h5 className="profile__option profile__option--active">Tweets</h5>
            <h5 className="profile__option">Tweets & Replies</h5>
            <h5 className="profile__option">Media</h5>
            <h5 className="profile__option">Likes</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;