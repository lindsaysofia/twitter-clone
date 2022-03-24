import React from 'react';
import '../styles/Login.css';
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"; 
import { Firestore } from '@firebase/firestore';
import db from '../firebase';

function Login() {
  const [state, dispatch] = useStateValue();
  let navigate = useNavigate();

  const signIn = () => {
    //sign in
    signInWithPopup(auth, provider)
    .then((result) => {
      const userRef = doc(db, "users", result.user.uid);
      getDoc(userRef)
      .then((userSnap) => {
        if (userSnap.exists()) {
          dispatch({ 
            type: actionTypes.SET_USER,
            user: result.user,
           });
        } else {
          const data = {
            at: result.user.displayName,
            created_at: Timestamp.now(),
            description: '',
            feed: [],
            followers: [],
            following: [],
            name: result.user.displayName,
            photoURL: result.user.photoURL,
            profile_banner_url: '',
            uid: result.user.uid
          };
          setDoc(doc(db, "users", result.user.uid), data);
          dispatch({ 
            type: actionTypes.SET_USER,
            user: result.user,
           });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      ;
      navigate('/');
    })
    .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <TwitterIcon />
        <h1>TwitterClone</h1>
      </div>
      <Button
        type="submit"
        onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  )
}

export default Login;