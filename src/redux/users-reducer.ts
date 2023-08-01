import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = '/users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosType
    status: string
    uniqueUrlName: string

}

let initialState: InitialStateType = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS :
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state, totalUsersCount: action.totalUserCount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            console.log(action)
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}

export const acceptFollow = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const acceptUnfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    } as const
}

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingInProgress(true, userId))
        const response = await usersAPI.follow(userId)
        if (response.data.resultCode == 0) {
            dispatch(acceptFollow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleFollowingInProgress(true, userId))
        const response = await usersAPI.unfollow(userId)
        if (response.data.resultCode == 0) {
            dispatch(acceptUnfollow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}