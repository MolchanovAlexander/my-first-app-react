import { profileAPI } from "api/api";
const ADD_LIKE = "ADD_LIKE";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";


let initialState = {
  postsData: [{ id: 1, likeCount: 0, message: "la la la " }, { id: 2, likeCount: 2, message: 'guuuffff' }],
  profile: null,
  status: "test"
};
const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newpost = {
        id: 33,
        likeCount: 0,
        message: action.body,
      };
      return {
        ...state,
        postsData: [newpost, ...state.postsData],
      };
    case DELETE_POST:
      console.log(action);
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id != action.postId)
      };
    case ADD_LIKE:
      const post = state.postsData.find(item => item.id === action.body.id)
      post.likeCount += 1

      console.log(post);
      return {
        ...state,
        //postsData: [...state.postsData, {...post, likeCount: action.body.likeCount}]
        postsData: [...state.postsData.filter(p => p.id !== action.body.id), post]
      };
    case SET_USER_PROFILE:
      return { ...state, profile: { ...action.profile } };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};
export const addPost = (body) => ({ type: ADD_POST, body });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const addLike = (body) => ({ type: ADD_LIKE, body });
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile: profile };
};
export const setStatus = (status) => {
  return { type: SET_USER_STATUS, status: status };
};
export const getUserProfile = (userID) => {
  return (dispatch) => {
    profileAPI.getProfile(userID).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  }
};
export const getUserStatus = (userID) => (dispatch) => {
  profileAPI.getStatus(userID)
    .then((response) => {
      dispatch(setStatus(response.data))
    });

};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) dispatch(setStatus(status));
    });

};

export default profileReducer;
