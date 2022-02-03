import Login from "./Login";

function Profile(props) {
  const {
    isLoggedIn,
    uid
  } = props;
  if (isLoggedIn) {
    return (
      <div>
        <h1>Profile Logged In</h1>
      </div>
    );
  }
  return (
    <Login />
  );
}

export default Profile;