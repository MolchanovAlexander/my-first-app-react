import { combineReducers, createStore } from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer  ";
import friendsReducer from "./friends_reducer";
import usersReducer from "./users_reducer ";
import authReducer from "./auth_reducer"
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;