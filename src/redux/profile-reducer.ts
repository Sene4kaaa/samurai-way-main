import {ActionsTypes} from "./store";


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
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}


const initialState = {
    messageForNewPost: 'Hello Andrew',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: 12},
        {id: 2, message: 'it\'s my first post', likesCounts: 11},
        {id: 3, message: 'BlaBla', likesCounts: 15},
        {id: 4, message: 'Dada', likesCounts: 20},
    ] as PostType[],
    profile: null as null | ProfileType
}

export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                messageForNewPost: action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}

