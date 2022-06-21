import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
