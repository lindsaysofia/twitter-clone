import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Profile */}
      {/* Login */}
      
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
