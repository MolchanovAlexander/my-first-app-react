const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage:1
    
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            // let stateCopy = { ...state }
            // stateCopy.users = [...state.users]
            // stateCopy.users.push([]) //stateCopy;[...state.users, 


            return {
                ...state,
                users: action.users.items,
                totalUsersCount: action.users.totalCount,

            }
        }
        case SET_USERS:
            return {
                ...state,
                currentPage: action.currentPage,
                

            }
        default:
            return state;
    }

}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, users: currentPage });


export default usersReducer;