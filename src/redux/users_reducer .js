import { usersAPI } from "api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  users: [],
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
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
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
  return (dispatch) => {
    dispatch(setIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsersTotalCount(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(setIsFetching(false));
    });
  };
};
export const followSuccess = (userID) => {
  return (dispatch) => {
    dispatch(setFollowingRun(true, userID));
    usersAPI.follow(userID).then((data) => {
      if (data.resultCode == 0) {
        dispatch(follow(userID));
      }
      dispatch(setFollowingRun(false, userID));
    });
  };
};
export const unfollowSuccess = (userID) => {
	return (dispatch) => {
	  dispatch(setFollowingRun(true, userID));
	  usersAPI.unfollow(userID).then((data) => {
		if (data.resultCode == 0) {
		  dispatch(follow(userID));
		}
		dispatch(setFollowingRun(false, userID));
	  });
	};
  };
  
// export const stepCountChange = (way) => {
//     let from = state.fromCount;
//     let to = state.toCount;

//     // 0 - toStart / 1 - previous / 2 - next / 3 - toLast
//     let goStart = way === 0 && from > 1;
//     let goPrev = way === 1 && from > 1;
//     let goNext = way === 2 && to < pagesCount;
//     let goLast = way === 3 && to < pagesCount;

//     if (goLast) {
//       from = tlastPageFromCount;
//       to = pagesCount;
//       setCurrentPage(from, from, to);
// 	  getUsersThunkCreator(from, pageSize );
//     } else if (goNext) {
//       from = from + step;
//       to = to + step;
//       setCurrentPage(from, from, to);
// 	  getUsersThunkCreator(from, pageSize );
//     } else if (goPrev) {
//       from = from - step;
//       to = from + step - 1;
//       setCurrentPage(to, from, to);
// 	  getUsersThunkCreator(from, pageSize );
//     } else if (goStart) {
//       from = 1;
//       to = step;
//       setCurrentPage(from, from, to);
// 	  getUsersThunkCreator(from, pageSize );
//     }
//   };

export default usersReducer;
