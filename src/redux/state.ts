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
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

const state: RootStateType = {
    profilePage: {
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
            {id: 4, message: 'Yo'},
        ]
    },
    sidebar: {}
}

export default state;
