import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
function UserToggle() {
  const [isUserVisible, setIsUserVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (isUserVisible) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data: User) => setUser(data)); // data를 User 타입으로 지정
    } else {
      setUser(null);
    }
  }, [isUserVisible]);

  return (
    <div>
      <button onClick={() => setIsUserVisible(!isUserVisible)}>
        {isUserVisible ? "Hide User" : "Show User"}
      </button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserToggle;
