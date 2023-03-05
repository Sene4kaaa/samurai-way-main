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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCounts: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._renderEntireTree();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._renderEntireTree();
        } else if (action.type === 'UPDATE-NEW-MESSAGE_BODY') {
            this._state.dialogPage.newMessageBody = action.body
            this._renderEntireTree();
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.messages.push({id: 6, message: body})
            this._renderEntireTree();
        }
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
export const updateNewMessageCreatorCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE_BODY',
        body: body
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}


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

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

