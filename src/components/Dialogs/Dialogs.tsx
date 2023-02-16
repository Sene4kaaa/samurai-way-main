import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name:string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessageType = {
    message:string
    id: number
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}



const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Katty'},
        {id: 3, name: 'Anatoly'},
        {id: 4, name: 'Lilia'},
        {id: 5, name: 'Pawel'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lets go to the city'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}
export default Dialogs;