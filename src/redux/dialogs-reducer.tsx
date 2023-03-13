import {ActionsTypes, DialogPageType} from "./store";

let initialState: DialogPageType = {
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
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE_BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
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

export default dialogsReducer;