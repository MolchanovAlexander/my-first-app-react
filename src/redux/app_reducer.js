import { getAuthUserData } from "./auth_reducer";
import { getFollowedUsersThunkCreator } from "./users_reducer ";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
	initialized: false
};
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			};

		default:
			return state;
	}
};


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const initializedApp = () => (dispatch) => {

	let promise = dispatch(getAuthUserData())
	//let promise1 = getFollowedUsersThunkCreator()
	Promise.all([promise])
	.then(()=>{
		dispatch(initializedSuccess())
	})
}


export default appReducer;
