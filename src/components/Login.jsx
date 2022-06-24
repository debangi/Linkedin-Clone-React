import React from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { auth } from '../firebase-config';
import './Login.css';
import { login, selectUser } from '../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter a full name!');
    }
    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic ? profilePic : userAuth.user.photoURL,
          })
        );
      });
      setName('');
      setEmail('');
      setPassword('');
      setProfilePic('');
    } catch (e) {
      console.log(e.message);
    }
  };
  const loginToApp = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      try {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      } catch (e) {
        console.log(e.message);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='login'>
      <img src='' alt='logo' />
      <form>
        <input
          placeholder='Full name (required if registering)'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Profile pic URL (optional)'
          type='text'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
