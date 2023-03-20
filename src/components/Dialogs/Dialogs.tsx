import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/store";


type DialogsType = {
    dialogPage: DialogPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = props.dialogPage.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)

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

