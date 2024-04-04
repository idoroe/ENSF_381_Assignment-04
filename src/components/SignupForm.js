import React, { useState } from 'react';


function SignupForm({ switchComponent }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 

  // Handle form submission
  const handleSubmit = async (event) => {
      event.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try{
      console.log("Signup form submitted with:", { username, password, email });

      const response = await fetch("http://localhost:5001/create-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password,email})
      });

      if (!response.ok){
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      console.log('User registered successfully!');
      setRegistrationSuccess(true);
      
    }catch (error){
      console.error('Registration Failed:', error.message);
    }
    // API call to authenticate the user
  };



  return (
    <div>
      {registrationSuccess && <p>User Created Succesfully, return to login.</p>}
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

      <button onClick={switchComponent}>Switch to login</button>
    </div>
  );
}

export default SignupForm;
