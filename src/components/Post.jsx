import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css';

const Post = ({ name, description, message, photoURL }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={photoURL}>{name[0].toUpperCase()}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
};

export default Post;
