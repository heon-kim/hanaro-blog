import { useSession } from "../context/SessionContext";

const Profile = () => {
  const { session, logout } = useSession();
  const { loginUser: user } = session;

  return (
    <div className="profile-container">
      <h1>Hello, {user?.name}!</h1>
      <span className="user-name">
        {user?.name} <span className="status">logged in</span>
      </span>
      <button onClick={logout} className="logout-button">
        SignOut
      </button>
    </div>
  );
};

export default Profile;
