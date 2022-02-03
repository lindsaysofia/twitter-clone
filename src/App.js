import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './App.css';
import CreateAccount from "./components/CreateAccount";
import Login from './components/Login';
import Home from './components/Home';

import firebaseConfig from './firebase';
import { initializeApp } from "firebase/app";
import { 
  getFirestore
} from "firebase/firestore";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import Profile from "./components/Profile";


function App() {

  const LOGO = <Link to="/" className="logo"><i className="fab fa-twitter"></i><p>clone</p></Link>;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [uid, setUid] = useState(0);

  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();
    const name = e.target.elements['name'].value;
    const at = e.target.elements['at'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userId = user.uid;
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }

  const login = (e) => {
    e.preventDefault();
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userId = user.uid;
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const logout = (e) => {
    signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {

      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setIsLoggedIn(true);
      setUid(user.uid);
      console.log('now signed in');
      // ...
    } else {
      // User is signed out
      // ...
      setIsLoggedIn(false);
      setUid(0);
    }
  });

  return (
    <Routes className="App">
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} uid={uid} LOGO={LOGO}/>} />
      <Route path="/profile" element={<Profile  isLoggedIn={isLoggedIn} uid={uid}/>} />
      <Route path="/login" element={<Login LOGO={LOGO} login={login}/>} />
      <Route path="/createaccount" element={<CreateAccount LOGO={LOGO} createAccount={createAccount} />} />
    </Routes>
  );
}

export default App;
