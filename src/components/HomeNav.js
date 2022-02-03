import { Link } from "react-router-dom";
import '../styles/HomeNav.css';

function HomeNav(props) {
  const {
    uid,
    LOGO
  } = props;
  return (
    <nav className="HomeNav">
      <Link to="/profile">Profile Pic Here</Link>
      {LOGO}
      <button className="tweet"><i className="far fa-edit"></i></button>
    </nav>
  );
}

export default HomeNav;