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
const App = (props) => {
  return ( 
    
    <div className="app-wrapper">
        <Header />
        <NavBar />        
    <div class="app-wrapper-content">    
        <Routes>
            <Route path='/profile' element={<Profile dataposts={props.dataposts}/>}/>
            <Route path='/dialogs' element={<Dialogs dData={props.dData}  mData={props.mData} />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
    </div>
    )
}

export default App;
