import React, {FC} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state, {DialogPageType} from "../../redux/state";

type DialogsType = {
    dialogPage: DialogPageType
}

const Dialogs: FC<DialogsType> = () => {

    let dialogsElements = state.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.dialogPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;