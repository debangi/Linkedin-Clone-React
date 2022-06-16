import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='sidebar'
        />
        <Avatar className='sidebar__avatar' />
        <h2>Debangi choudhury</h2>
        <h4>debangi@gmail.comghjgjhg</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,123</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('softwareEngineering')}
        {recentItem('nextjs')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;
