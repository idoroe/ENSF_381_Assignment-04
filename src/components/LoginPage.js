import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header';
import Footer from './Footer';

const LoginPage = ({ setIsAuthenticated }) => {
  const [switchComponent, setSwitchComponent] = useState(false);

  return (
    <>
      <Header />
      <div>
        {switchComponent ? (
          <SignupForm switchComponent={() => setSwitchComponent(false)} />
        ) : (
          <LoginForm setIsAuthenticated={setIsAuthenticated} switchComponent={() => setSwitchComponent(true)} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
