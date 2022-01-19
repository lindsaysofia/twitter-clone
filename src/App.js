import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CreateAccount from "./components/CreateAccount";
import Login from './components/Login';
import Home from './components/Home';

import firebaseConfig from './firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { doc, getDoc, getFirestore, updateDoc, arrayUnion, Timestamp} from "firebase/firestore";

function App() {

  const LOGO = <Link to="/" className="logo"><i className="fab fa-twitter"></i><p>clone</p></Link>;

  const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  // const storage = getStorage(app);

  const createAccount = (e) => {
    e.preventDefault();
    const name = e.target.elements['name'].value;
    const at = e.target.elements['at'].value;
    const email = e.target.elements['email'].value;
    const password = e.target.elements['password'].value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential);
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }

  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login LOGO={LOGO}/>} />
      <Route path="/createaccount" element={<CreateAccount LOGO={LOGO} createAccount={createAccount} />} />
    </Routes>
  );
}

export default App;
