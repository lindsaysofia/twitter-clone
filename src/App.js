import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './App.css';
import CreateAccount from "./components/CreateAccount";
import Login from './components/Login';
import Home from './components/Home';
import Profile from "./components/Profile";

//Firebase imports
import firebaseConfig from './firebase';
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  doc, 
  getDoc
} from "firebase/firestore";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { 
  getStorage, 
  ref,
  getDownloadURL 
} from "firebase/storage";


function App() {

  const LOGO = <Link to="/" className="logo"><i className="fab fa-twitter"></i><p>clone</p></Link>;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage();
  const storageRef = ref(storage);
  const imagesRef = ref(storageRef, 'images');
  const bannersRef = ref(storageRef, 'banners');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null);

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

  async function getUser(userId) {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      console.log("Document data:", userSnap.data());
      setUser(userSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
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
        getUser(userId);
        console.log(userId);
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
      console.log('now signed in');
      // ...
    } else {
      // User is signed out
      // ...
      setIsLoggedIn(false);
      setUser(null);
    }
  });

  const getImage = () => {
    if (user === null) return;
    getDownloadURL(ref(storage, `images/${user.profile_image_url}`))
      .then((url) => {
        console.log(url);
      })
      .catch((error) => {
        console.log(error);
    });
  };

  // const getBanner = (bannerName) => {
  //   const profileBanner = ref(bannersRef, user.profile_banner_url);
  //   getDownloadURL(ref(storage, `images/${profileImage}`))
  //     .then((url) => url)
  //     .catch((error) => {
  //       console.log(error);
  //   });
  // };

  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} user={user} LOGO={LOGO} getImage={getImage}/>} />
      <Route path="/profile" element={<Profile  isLoggedIn={isLoggedIn} uid={user}/>} />
      <Route path="/login" element={<Login LOGO={LOGO} login={login}/>} />
      <Route path="/createaccount" element={<CreateAccount LOGO={LOGO} createAccount={createAccount} />} />
    </Routes>
  );
}

export default App;
