import { profileAPI } from "api/api";
import { stopSubmit } from "redux-form";
const ADD_LIKE = "ADD_LIKE";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";


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


      return {
        ...state,
        //postsData: [...state.postsData, {...post, likeCount: action.body.likeCount}]
        postsData: [...state.postsData.filter(p => p.id !== action.body.id), post]
      };
    case SET_USER_PROFILE: console.log(action);
      return { ...state, profile: { ...action.profile } };
    case SET_PHOTO_SUCCESS:

      return { ...state, profile: { ...state.profile, photos: action.photos } };
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
export const setPhotoSuccess = (photos) => {
  return { type: SET_PHOTO_SUCCESS, photos };
};

export const setStatus = (status) => {
  return { type: SET_USER_STATUS, status: status };
};

export const getUserProfile = (userID) => async (dispatch) => {
  const response = await profileAPI.getProfile(userID)
  dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userID) => async (dispatch) => {
  const response = await profileAPI.getStatus(userID)
  dispatch(setStatus(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};
export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  console.log(response);
  if (response.data.resultCode === 0) dispatch(setPhotoSuccess(response.data.data.photos));

};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  console.log(response);
  if (response.data.resultCode === 0) dispatch(getUserProfile(userId));
  else {
		let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
		//dispatch(stopSubmit("edit_profile", { _error: message })) //need to find all errors
    dispatch(stopSubmit("edit_profile", { "contacts":{"website":message}  }))
    return Promise.reject(response.data.messages[0])
	}
};
export default profileReducer;
