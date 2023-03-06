import {ActionsTypes, PostType, ProfilePageType} from "./state";

const profileReducer = (store: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCounts: 0
            };
            store.posts.push(newPost);
            store.messageForNewPost = '';
            return store
        case 'CHANGE-NEW-TEXT':
            store.messageForNewPost = action.newText;
            return store
        default:
            return store
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