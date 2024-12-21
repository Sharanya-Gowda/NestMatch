// src/pages/PGOwnerLogin.js
import React from 'react';

const PGOwnerLogin = () => {
  return (
    <div className="loginPageWrapper">
      <h2>PG Owner Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" required placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" required placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default PGOwnerLogin;
