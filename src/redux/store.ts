import profileReducer, {addPostActionCreator, changeNewTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageCreatorCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postMessage: string) => void
    _renderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changeNewTextActionCreator> | ReturnType<typeof updateNewMessageCreatorCreator> | ReturnType<typeof sendMessageCreator>


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
}
*/





export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

