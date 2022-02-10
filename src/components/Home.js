import HomeNav from './HomeNav';
import '../styles/Home.css';

function Home(props) {
  const {
    isLoggedIn,
    user,
    LOGO,
    getImage
  } = props;
  if (isLoggedIn) {
    return (
      <div className="Home">
        <HomeNav user={user} LOGO={LOGO} getImage={getImage}/>
      </div>
    );
  }
  return (
    <h1>I'm Logged Out!</h1>
  );
}

export default Home;