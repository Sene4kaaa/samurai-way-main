import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageCreatorCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsType) => {

    const state = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageCreatorCreator(body))

    }

    return (
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
                 dialogPage={state.dialogPage}/>
    )
}
export default DialogsContainer;
