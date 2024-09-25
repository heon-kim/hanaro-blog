import React from "react";
import { useSession } from "../context/SessionContext";

interface User {
  id: number;
  name: string;
}

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { logout } = useSession();

  return (
    <div className="profile-container">
      <h1>Hello, {user.name}!</h1>
      <span className="user-name">
        {user.name} <span className="status">logged in</span>
      </span>
      <button onClick={logout} className="logout-button">
        SignOut
      </button>
    </div>
  );
};

export default Profile;
