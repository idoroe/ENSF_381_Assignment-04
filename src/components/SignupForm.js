import React, { useState } from 'react';

function SignupForm({ switchComponentProp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
      event.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
    }

    console.log("Signup form submitted with:", { username, password, confirmPassword, email });
    // API call to authenticate the user
  };



  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit" >Signup</button>
      </form>

      <button onClick={switchComponentProp}>Switch to login</button>
    </div>
  );
}

export default SignupForm;
