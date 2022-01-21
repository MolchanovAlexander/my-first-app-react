import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friendlist from 'components/friendlist/Friendlist';
const App = (props) => {
  return (

    <div className="app-wrapper">
      <Header />
      <NavBar friends={props.state.friends.friendsData} />
      <div className="app-wrapper-content">
        <Routes>

          <Route path='/profile'
            element={<Profile
              profile={props.state.profile}
              dispatch={props.dispatch} />} />

          <Route path='/dialogs'
            element={<Dialogs
              store={props.store} />} />

          <Route path='/news'
            element={<News />} />

          <Route path='/music'
            element={<Music />} />

          <Route path='/settings'
            element={<Settings />} />

          <Route path='/friendlist'
            element={<Friendlist
              friends={props.state.friends.friendsData} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
