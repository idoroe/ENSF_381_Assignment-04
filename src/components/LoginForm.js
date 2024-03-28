import React from 'react';



function LoginForm({ switchComponent}) {
  return (
    <div>
        <h3>Login</h3>
       <form> 
            <label for="username">Username:</label>
            <input type="text" placeholder="Username" /> 
            <br />
            <label for="password">Password:</label>
            <input type="password" placeholder="Password" />
            
            <br />
            <button type="submit">Login</button>
       </form>
     
        <button onClick={switchComponent}>Switch to Signup</button>
    </div>
  );
}
export default LoginForm;