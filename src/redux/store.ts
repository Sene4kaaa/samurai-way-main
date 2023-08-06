// import profileReducer, {addPostActionCreator, changeNewTextActionCreator} from "./profile-reducer";
// import dialogsReducer, {sendMessageCreator, updateNewMessageCreatorCreator} from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";

// export type StoreType = {
//     _state: RootStateType
//     changeNewText: (newText: string) => void
//     addPost: (postMessage: string) => void
//     _renderEntireTree: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }


import {addPost, deletePost, savePhotoSuccess, setStatus, setUserProfile} from "./profile-reducer";
import {sendMessage} from "./dialogs-reducer";
import {
    acceptFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    acceptUnfollow
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>


/*
export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'Hello Andrew',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCounts: 12},
                {id: 2, message: 'it\'s my first post', likesCounts: 11},
                {id: 3, message: 'BlaBla', likesCounts: 15},
                {id: 4, message: 'Dada', likesCounts: 20},
            ]
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Matwei'},
                {id: 2, name: 'Katy'},
                {id: 3, name: 'Andrew'},
                {id: 4, name: 'Lilia'},
                {id: 5, name: 'Anatoliy'},
                {id: 6, name: 'Pawel'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._renderEntireTree();
    },
    addPost(postMessage: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postMessage,
            likesCounts: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = '';
        this._renderEntireTree();
    },
    _renderEntireTree() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._renderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage,action)
       this._state.dialogPage = dialogsReducer(this._state.dialogPage,action)
       this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._renderEntireTree();

    }
}*/

// type UsersPageType = {
//     users: UsersType[]
// }
//  type UsersType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: UserLocationType
// }

// type UserLocationType = {
//     city: string
//     country: string
// }


//  type MessagesType = {
//     id: number
//     message: string
// }

//  type DialogsType = {
//     id: number
//     name: string
// }
//
//  type PostType = {
//     id: number
//     message: string
//     likesCounts: number
// }
//
//  type ProfilePageType = {
//     messageForNewPost: string
//     posts: Array<PostType>
// }

// export type DialogPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
//     newMessageBody: string
//
// }

// type SidebarType = {}

// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogPageType
//     sidebar: SidebarType
// }

