import { Link } from "react-router-dom";

function Login(props) {
  const {
    LOGO,
    login
  } = props;
  return (
    <form className="login" onSubmit={login}>
    {LOGO}
    <h2>Sign in to Twitter Clone</h2>
    <input 
      type="email" 
      placeholder="Email" 
      required
      name="email"
    />
    <input 
      type="password" 
      placeholder="Password" 
      required
      name="password"
    />
    <button 
      type="submit"
    >Log in</button>
    <p>Don't have an account? <Link to="/createaccount">Sign up</Link></p>
  </form>
  );
}

export default Login;