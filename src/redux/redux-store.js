import { combineReducers, createStore } from "redux";
import profileReducer from "./profile_reducer ";
import messagesReducer from "./messages_reducer  ";
import friendsReducer from "./friends_reducer";
import usersReducer from "./users_reducer ";


let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    friends: friendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;