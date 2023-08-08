import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./redux-store";


const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS'

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
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export type ProfilePhotosPropsType = {
    small: string,
    large: string,
}

export type ProfileUpdateDataType = {
    userId?: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts?: ProfileUpdateContactsType

}

export type ProfileUpdateContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST :
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS :
            return {...state, profile: {...state.profile, photos: action.photoFile} as ProfileType}
        case SAVE_PROFILE_SUCCESS :
            return {...state, profile: {...state.profile, profile: action.profile} as ProfileType}
        default:
            return state
    }

}

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}
export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST, postId
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const savePhotoSuccess = (photoFile: ProfilePhotosPropsType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photoFile
    } as const
}

export const saveProfileSuccess = (profile: any) => {
    return {
        type: SAVE_PROFILE_SUCCESS,
        profile
    } as const
}


export const getUserProfile = (userId: string): AppThunk => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string): AppThunk => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): AppThunk => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}

export const savePhoto = (photoFile: File): AppThunk => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))

    }
}

export const saveProfile = (profile: ProfileUpdateDataType) => async (dispatch: Dispatch) => {
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(saveProfileSuccess(response.data.data.profile))

    }
}


