import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProfileMain from "./components/ProfileMain";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/:uid" element={<ProfileMain />} />
    </Routes>
  );
}

export default App;
