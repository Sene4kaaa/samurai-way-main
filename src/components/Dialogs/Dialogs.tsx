import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

}

type DialogsPropsType = {
    dialogPage: DialogPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

type AddMessageFormReduxType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

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

            </div>
            <AddMessageFormRedux/>
        </div>
    )
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormReduxType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormReduxType>({form: 'dialogAddMessageForm'})(AddMessageForm)
