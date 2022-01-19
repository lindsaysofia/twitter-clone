import { Link } from "react-router-dom";

function CreateAccount(props) {
  const {
    LOGO,
    createAccount
  } = props;
  return (
    <form className="create-account" onSubmit={createAccount}>
      {LOGO}
      <h2>Create your account</h2>
      <input 
        type="text" 
        placeholder="Name" 
        required
        name="name"
      />
      <input 
        type="text" 
        placeholder="@" 
        required
        name="at"
      />
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
      >Create account</button>
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
  );
}

export default CreateAccount;