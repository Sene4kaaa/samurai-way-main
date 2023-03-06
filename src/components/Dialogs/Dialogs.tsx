import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageCreatorCreator} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogPage.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageCreatorCreator(body))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button
                            onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
