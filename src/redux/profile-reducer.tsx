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

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCounts: 0
            };
            state.posts.push(newPost);
            state.messageForNewPost = '';
            return state
        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText;
            return state
        default:
            return state
    }

}

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export default profileReducer;