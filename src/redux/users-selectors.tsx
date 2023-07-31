import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => {
    return state.users.users
}
export const getUsersSelector = (state: AppStateType) => {
    return getUsers(state).filter(u => true)
}
export const getUsersSuperSelector = createSelector(getUsers,(users)=> {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress
}