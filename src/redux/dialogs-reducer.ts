import {ActionsTypes} from "./store";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Matwei'},
        {id: 2, name: 'Katy'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Lilia'},
        {id: 5, name: 'Anatoliy'},
        {id: 6, name: 'Pawel'},
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as MessagesType[],
    newMessageBody: ''
}

export type initialStateType = typeof initialState


export const dialogsReducer = (state:initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            }

        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
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
