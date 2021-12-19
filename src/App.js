import React from 'react'

import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      
      <div class="app-wrapper-content">
        {/* dont working neither nor */}
        <Route path='/dialogs' component={<Dialogs />}/>
        <Route path='/profile' element={<Profile />}/>
        
      </div>
    </div>
    </BrowserRouter>)
}

export default App;
