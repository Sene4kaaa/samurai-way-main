import {ActionsTypes} from "./store";


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
    isFetching: false
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET_USERS' :
            return {
                ...state, users: action.users
            }

        case 'SET_CURRENT_PAGE' :
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT' :
            return {
                ...state, totalUsersCount: action.totalUserCount
            }
        case 'TOOGLE_IS_FETCHING' :
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }

}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUserCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOOGLE_IS_FETCHING',
        isFetching
    } as const
}
