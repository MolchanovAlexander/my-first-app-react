import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Music from './components/music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendlistContainer from 'components/friendlist/FriendlistContainer';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import UsersContainer from 'components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer'

const App = () => {
  return (

    <div className="app-wrapper">
      <Header />
      <NavBar  />
      <div className="app-wrapper-content">
        <Routes>

          <Route path='/profile'
            element={<ProfileContainer />} />

          <Route path='/dialogs'
            element={<DialogsContainer />} />

          <Route path='/users'
            element={<UsersContainer />} />

          <Route path='/news'
            element={<News />} />

          <Route path='/music'
            element={<Music />} />

          <Route path='/settings'
            element={<Settings />} />

          <Route path='/friendlist'
            element={<FriendlistContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
