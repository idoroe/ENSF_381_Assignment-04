import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ switchComponent,setIsAuthenticated}) {
  // State to hold the username and password input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = async (event) => {
    console.log("Form submitted with username:", username, "and password:", password);
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/auth-user", {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Authentification succesful');
        setIsAuthenticated(true);
        navigate('/products')

      } else {
        console.error('Authentification Failed:', data.message);
    } 
  }catch (error){
    console.error("Authentification Failed:", error.message);
    }
    // API call to authenticate the user
  };

  return (
    <div>
      <h3>Login</h3>
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
        <button type="submit">Login</button>
      </form>

      <button onClick={switchComponent}>Switch to Signup</button>
    </div>
  );
}

export default LoginForm;
