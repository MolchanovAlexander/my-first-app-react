const ADD_POST = 'xT';
const UPDATE_NEW_POST_TEXT = 'xxT';

const friendsReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newpost = {
            id: 33,
            likeCount: 0,
            message: this._state.profile.newPostText
        }
        state.postsData.push(newpost);
        state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;

    }
    return state;
}
export default friendsReducer;