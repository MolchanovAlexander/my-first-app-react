import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Music from './components/music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendlistContainer from 'components/friendlist/FriendlistContainer';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import UsersContainer from 'components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer';
import LoginPage from './components/login/Login';



const App = () => {
  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar  />
      <div className="app-wrapper-content">
       

          <Route path='/profile/:userId?'
            render={()=> <ProfileContainer />} />

          <Route path='/dialogs'
            component={DialogsContainer} />

          <Route path='/users'
            component={UsersContainer} />

          <Route path='/login'
            component={LoginPage} />

          <Route path='/news'
            component={News} />

          <Route path='/music'
            component={Music} />

          <Route path='/settings'
            component={Settings} />

          <Route path='/friendlist'
            component={FriendlistContainer} />
        
      </div>
    </div>
  )
}

export default App;
