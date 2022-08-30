import profileReducer, { addPost, deletePost } from "./profile_reducer";
const ADD_LIKE = "ADD_LIKE";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";


let state = {
  postsData: [
    { id: 1, likeCount: 0, message: "la la la " },
    { id: 2, likeCount: 2, message: 'guuuffff' }
  ]
}
it('new post must be added', () => {
  //1. test data
  let action = addPost("it-dniwe.com")
  //2.action
  let newState = profileReducer(state, action)
  // 3.expectation
  expect(newState.postsData.length).toBe(3)
})

it('message of first element should be an argument', () => {
  //1. test data
  let action = addPost("it-dniwe.com")
  //2.action
  let newState = profileReducer(state, action)
  // 3.expectation
  expect(newState.postsData[0].message).toBe("it-dniwe.com")

})
it('after deleting lehth of array should be decrement', () => {
  //1. test data
  let action = deletePost(1)
  //2.action
  let newState = profileReducer(state, action)
  // 3.expectation
  expect(newState.postsData.length).toBe(1)

})