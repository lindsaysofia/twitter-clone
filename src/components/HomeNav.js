import { Link } from "react-router-dom";
import '../styles/HomeNav.css';

function HomeNav(props) {
  const {
    user,
    getImage,
    LOGO
  } = props;
  let profileImage = getImage();
  return (
    <nav className="HomeNav">
      <Link to="/profile">
        <img src={profileImage} alt=""/>
      </Link>
      {LOGO}
      <button className="tweet"><i className="far fa-edit"></i></button>
    </nav>
  );
}

export default HomeNav;