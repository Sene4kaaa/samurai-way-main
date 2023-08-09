import React from 'react';
import s from './../Dialogs.module.css'


const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

type MessageType = {
    message: string
}

export default Message;