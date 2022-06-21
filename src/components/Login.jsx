import React from 'react';
import './Login.css';

const Login = () => {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className='login'>
      <img src='' alt='logo' />
      <form>
        <input placeholder='Full name (required if registering)' type='text' />
        <input placeholder='Profile pic URL (optional)' type='text' />
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? &nbsp;
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
