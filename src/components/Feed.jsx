import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return unsubscribe;
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    const commentsDocRef = doc(db, 'posts', `Post${Date.now()}`);
    const payload = {
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || '',
      timestamp: firebase.firestore.Timestamp.now(),
    };
    setInput('');
    await setDoc(commentsDocRef, payload);
  };
  console.log(posts);
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
