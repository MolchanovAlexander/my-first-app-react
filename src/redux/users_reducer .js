const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'dniwe', status: "How are you guf ?", location: { city: 'city17', country: 'Belarus' } },
        { id: 2, followed: false, fullName: 'yu78yu', status: "Ya dno guf guf ?", location: { city: 'Spriengfield', country: 'Romania' } },
        { id: 3, followed: true, fullName: '1a2s3f4h', status: "STATUS 1111 2?", location: { city: 'Chop', country: 'Ukraine' } },
        { id: 4, followed: true, fullName: 'DmitroOvsyanikov', status: "Arbeit", location: { city: 'NoName', country: 'Cheh' } }

    ]

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
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }

}
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = () => ({ type: SET_USERS, userID });

export default usersReducer;