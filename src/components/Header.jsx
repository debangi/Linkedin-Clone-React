import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = async () => {
    dispatch(logout());
    await signOut(auth);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img src='' alt='logo' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption title='home' Icon={HomeIcon} />
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOption title='Messaging' Icon={ChatIcon} />
        <HeaderOption title='Notifications' Icon={NotificationsIcon} />
        <HeaderOption onClick={logoutOfApp} avatar='true' title='me' />
      </div>
    </div>
  );
};

export default Header;
