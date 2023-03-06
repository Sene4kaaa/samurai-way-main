import {ActionsTypes, DialogPageType} from "./state";

const dialogsReducer = (store: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE_BODY':
            store.newMessageBody = action.body
            return store
        case 'SEND_MESSAGE':
            let body = store.newMessageBody
            store.newMessageBody = ''
            store.messages.push({id: 6, message: body})
            return store
        default:
            return store
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