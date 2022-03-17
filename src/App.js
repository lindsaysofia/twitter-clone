import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Profile from "./components/Profile";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/:uid" element={<Profile />} />
    </Routes>
  );
}

export default App;
