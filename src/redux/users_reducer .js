import { usersAPI } from "api/api";
import { updateObjectInArray } from "utils/obj_helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";
const SET_FOLLOWED_USERS = "SET_FOLLOWED_USERS"

let initialState = {
  users: [],
  followed: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  pagesCount: 0,
  lastPageFromCount: 0,
  step: 20,
  toCount: 20,
  fromCount: 1,
  followingRun: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", { followed: true })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", { followed: false })
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_FOLLOWED_USERS: {

      return { ...state, followed: action.users };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
        pagesCount: Math.ceil(action.count / state.pageSize),
        lastPageFromCount:
          1 +
          state.step * Math.floor(action.count / state.pageSize / state.step),
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
        toCount: action.toCount,
        fromCount: action.fromCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingRun: action.isFetching
          ? [...state.followingRun, action.userID]
          : state.followingRun.filter((id) => id != action.userID),
      };
    }

    default:
      return state;
  }

};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setFollowedUsers = (users) => ({ type: SET_FOLLOWED_USERS, users: users });
export const setCurrentPage = (currentPage, fromCount, toCount) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
  fromCount,
  toCount,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setFollowingRun = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userID,
});
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersTotalCount(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(setIsFetching(false));

  };
};
export const getFollowedUsersThunkCreator = (pageSize = 100) => {

  return async (dispatch) => {
    dispatch(setIsFetching(true));

    let data = await usersAPI.getFollowedUsers(pageSize)
    dispatch(setFollowedUsers(data.items));
    dispatch(setIsFetching(false));
    console.log(data);
  };
};
const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {

  dispatch(setFollowingRun(true, userID));
  let data = await apiMethod(userID)
  // let data2 = await usersAPI.getFollowedUsers(110)
  // data2.items ? dispatch(setFollowedUsers(data2.items)) : null 

  if (data.resultCode == 0) {
    dispatch(actionCreator(userID))
  }
 
  dispatch(setFollowingRun(false, userID));
  
};

export const following = (userID, isFollow) => {
  return async (dispatch) => {
    let apiMethod = isFollow ? usersAPI.follow.bind(usersAPI) : usersAPI.unfollow.bind(usersAPI)
    let actionCreator = isFollow ? follow : unfollow

    followUnfollowFlow(dispatch, userID, apiMethod, actionCreator)
    getFollowedUsersThunkCreator()
  };
}


export default usersReducer;
