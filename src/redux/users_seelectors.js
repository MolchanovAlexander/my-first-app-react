import { createSelector } from "reselect"

export const getUsersSelector = (state) =>{
  return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,(users) => {
  return users.filter(u => true)
})
export const getPageSize = (state) =>{
  return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) =>{
  return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) =>{
  return state.usersPage.currentPage
}
export const getIsFetching = (state) =>{
  return state.usersPage.isFetching
}
export const getPagesCount = (state) =>{
  return state.usersPage.pagesCount
}
export const getLastPageFromCount = (state) =>{
  return state.usersPage.lastPageFromCount
}
export const getStep = (state) =>{
  return state.usersPage.step
}
export const getFromCount = (state) =>{
  return state.usersPage.fromCount
}
export const getToCount = (state) =>{
  return state.usersPage.toCount
}
export const getFollowingRun = (state) =>{
  return state.usersPage.followingRun
}