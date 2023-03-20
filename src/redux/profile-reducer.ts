import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    messageForNewPost: 'Hello Andrew',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: 12},
        {id: 2, message: 'it\'s my first post', likesCounts: 11},
        {id: 3, message: 'BlaBla', likesCounts: 15},
        {id: 4, message: 'Dada', likesCounts: 20},
    ]
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    debugger
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
    debugger
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

