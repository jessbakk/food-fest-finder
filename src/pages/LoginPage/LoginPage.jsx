import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm
        {...props}
        handleLogin={props.handleLogin}
      />
    </div>
  );
};

export default LoginPage;