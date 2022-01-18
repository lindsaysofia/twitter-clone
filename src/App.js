import { Routes, Route } from "react-router-dom";
import './App.css';
import CreateAccount from "./components/CreateAccount";
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const LOGO = <div className="logo"><i className="fab fa-twitter"></i><i className="far fa-clone"></i></div>;
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login LOGO={LOGO}/>} />
      <Route path="/createaccount" element={<CreateAccount LOGO={LOGO}/>} />
    </Routes>
  );
}

export default App;
