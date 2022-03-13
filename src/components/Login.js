import React from 'react';
import '../styles/Login.css';
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, dispatch] = useStateValue();
  let navigate = useNavigate();

  const signIn = () => {
    //sign in
    signInWithPopup(auth, provider)
    .then((result) => {
      dispatch({ 
        type: actionTypes.SET_USER,
        user: result.user,
       });
       navigate('/');
    })
    .catch((err) => alert(err.message));
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