import '../styles/Home.css';
import HomeLeft from './HomeLeft';
import HomeMain from './HomeMain';

function Home() {
  
  return (
    <div className="home">
      <HomeLeft />
      <HomeMain />
      <div>HomeRight</div>
    </div>
  );
}

export default Home;