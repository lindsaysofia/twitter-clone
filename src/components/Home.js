import HomeNav from './HomeNav';
import '../styles/Home.css';

function Home(props) {
  const {
    isLoggedIn,
    uid,
    LOGO
  } = props;
  if (isLoggedIn) {
    return (
      <div className="Home">
        <HomeNav uid={uid} LOGO={LOGO}/>
      </div>
    );
  }
  return (
    <h1>I'm Logged Out!</h1>
  );
}

export default Home;