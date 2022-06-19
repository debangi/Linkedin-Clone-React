import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={OndemandVideoIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <InputOption
            Icon={ArticleIcon}
            title='Write Article'
            color='#7fc15e'
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          name='debangi'
          description='test'
          message='jjkjsjsdidiu'
          photoUrl=''
        />
      ))}
      <Post
        name='debangi'
        description='test'
        message='jjkjsjsdidiu'
        photoUrl=''
      />
    </div>
  );
};

export default Feed;
