import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Profile */}
      {/* Login */}
      {/* CreateAccount */}
      
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/createaccount" element={<CreateAccount />} /> */}
    </Routes>
  );
}

export default App;
