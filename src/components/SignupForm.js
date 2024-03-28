import React from "react";
function SignupForm({switchComponent}) {
    return (
      <div>
          <h3>Signup</h3>
         <form> 
              <label for="username">Username:</label>
              <input type="text" placeholder="Username" /> 
              <br />
              <label for="password">Password:</label>
              <input type="password" placeholder="Password" />
              <br />
              <label for ="confirmPassword">Confirm Password:</label>
              <input type="password" placeholder="Confirm Password" />
              <br />
              <label for="email">Email:</label>
              <input type="text" placeholder="email" />
              <br />
              <button type="submit">Login</button>
         </form>
       
          <button onClick={switchComponent}>Switch to login</button>
      </div>
    );
  }
  export default SignupForm;