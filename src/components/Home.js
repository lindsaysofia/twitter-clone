import '../styles/Home.css';
import HomeLeft from './HomeLeft';

function Home() {
  
  return (
    <div className="home">
      <HomeLeft />
      <div>HomeMain</div>
      <div>HomeRight</div>
    </div>
  );
}

export default Home;