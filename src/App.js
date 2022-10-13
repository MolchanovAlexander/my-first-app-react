import React, { Suspense } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import {NavBar} from './components/NavBar/NavBar';
import Music from './components/music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendlistContainer from 'components/friendlist/FriendlistContainer';
import DialogsContainer from 'components/Dialogs/DialogsContainer';
import UsersContainer from 'components/Users/UsersContainer';
import ProfileContainer from 'components/Profile/ProfileContainer';
import LoginPage from './components/login/Login';
import { initializedApp } from "./redux/app_reducer.js"
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from 'components/preloader/Preloader';
import { getFollowedUsersThunkCreator } from "redux/users_reducer ";

// const UsersContainer = React.lazy(()=>import('components/Users/UsersContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp()
        this.props.getFollowedUsersThunkCreator()
    }

   render() { 
    
        if (!this.props.initialized ) {
            
            return <Preloader />
        } 
        
       
        return (
            <React.Suspense fallback={<Preloader />}>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar />
                <div className="app-wrapper-content">
              
                    <Redirect to='/login'/>
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />

                    <Route path='/dialogs'
                        component={DialogsContainer} />

                    <Route path='/users'
                       component={UsersContainer}/>

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
            </div> </React.Suspense>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    login:state.auth.login,
    isAuth:state.auth.isAuth,
}) 
   

export default compose(
    withRouter,
    connect(mapStateToProps, { initializedApp, getFollowedUsersThunkCreator }))(App);
