import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <form action="POST">
        <div className="input-row">
          <div className="input=group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
