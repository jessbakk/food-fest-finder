import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';

const LoginPage = (props) => {
  return (
    <div className="container">
      <NavBar/>
      <br/>
      <br/>
      <LoginForm
        {...props}
        handleLogin={props.handleLogin}
      />
    </div>
  );
};

export default LoginPage;