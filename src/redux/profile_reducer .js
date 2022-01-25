const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, likeCount: 3, message: "How are guf in your house?" },
        { id: 2, likeCount: 0, message: "la la la " },
        { id: 3, likeCount: 2, message: "first Guf crtrtm!!" },
        { id: 4, likeCount: 0, message: "Alo Guf came in to" }

    ],
    newPostText: "guf.com"
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newpost = {
                    id: 33,
                    likeCount: 0,
                    message: state.newPostText
                };
                let stateCopy = {...state };
                stateCopy.postsData = [...state.postsData];
                stateCopy.postsData.push(newpost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = {...state };
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST, });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;