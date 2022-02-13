const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, likeCount: 3, message: "How are guf in your house?" },
        { id: 2, likeCount: 0, message: "la la la " },
        { id: 3, likeCount: 2, message: "first Guf crtrtm!!" },
        { id: 4, likeCount: 0, message: "Alo Guf came in to" }

    ],
    newPostText: "guf.com",
    profile: {
        "aboutMe": "guf",
        "contacts": {
          "facebook": "null",
          "website": null,
          "vk": null,
          "twitter": null,
          "instagram": null,
          "youtube": null,
          "github": null,
          "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": null,
        "fullName": "121312Olexandr",
        "userId": 22285,
        "photos": {
          "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
          "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
      },
}
const profileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 33,
                likeCount: 0,
                message: state.newPostText
            };
            return {
                ...state,
                postsData: [newpost, ...state.postsData],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
           // console.log(type, profile);
            return {...state,
                 profile: {...action.profile}
            }
        default:
            return state;
    }

}
export const addPost = () => ({ type: ADD_POST, });
export const updateNewPostText = (text) =>({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) =>{ 
    
   return {type: SET_USER_PROFILE, profile: profile }
}

export default profileReducer;