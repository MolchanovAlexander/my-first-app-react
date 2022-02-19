import { usersAPI } from "api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [{ id: 1, likeCount: 0, message: "la la la " }],
  newPostText: "guf.com",
  profile: {
    aboutMe: "guf",
    contacts: {
      facebook: "/test/fb/guf",
      website: null,
      vk: null,
      twitter: null,
      instagram: "/test/gfg.com",
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: null,
    fullName: "121312Olexandr",
    userId: 12222,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
    },
  },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newpost = {
        id: 33,
        likeCount: 0,
        message: state.newPostText,
      };
      return {
        ...state,
        postsData: [newpost, ...state.postsData],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return { ...state, profile: { ...action.profile } };
    default:
      return state;
  }
};
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile: profile };
};
export const getUserProfile = (userID) =>  {
        return (dispatch) => {
        usersAPI.getProfile(userID).then((response) => {
        dispatch(setUserProfile(response.data));
        });
    }
};

export default profileReducer;
