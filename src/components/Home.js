import '../styles/Home.css';
import HomeLeft from './HomeLeft';
import HomeMain from './HomeMain';
import HomeRight from './HomeRight';

function Home() {
  
  return (
    <div className="home">
      <HomeLeft />
      <HomeMain />
      <HomeRight />
    </div>
  );
}

export default Home;