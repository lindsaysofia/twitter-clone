import { Link } from "react-router-dom";

function CreateAccount(props) {
  const {
    LOGO
  } = props;
  return (
    <form className="create-account">
      {LOGO}
      <h2>Create your account</h2>
      <input 
        type="text" 
        placeholder="Name" 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        required
      />
      <button 
        type="submit"
      >Create account</button>
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
  );
}

export default CreateAccount;