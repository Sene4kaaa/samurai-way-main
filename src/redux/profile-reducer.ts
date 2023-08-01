import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


export type PostType = {
    id: number
    message: string
    likesCounts: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: ProfileContactsPropsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullNam: string,
    userId: number,
    photos: ProfilePhotosPropsType
}

export type ProfileContactsPropsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
export type ProfilePhotosPropsType = {
    small: string,
    large: string
}


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: 12},
        {id: 2, message: 'it\'s my first post', likesCounts: 11},
        {id: 3, message: 'BlaBla', likesCounts: 15},
        {id: 4, message: 'Dada', likesCounts: 20},
    ] as PostType[],
    profile: null as null | ProfileType,
    status: ''
}

export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case "DELETE-POST" :
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }

}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST", newPostText
    } as const
}
export const deletePostActionCreator = (postId: number) => {
    return {
        type: "DELETE-POST", postId
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status))
        })
}


