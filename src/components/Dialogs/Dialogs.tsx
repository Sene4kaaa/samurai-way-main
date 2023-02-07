import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>


}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Andrew'} id={'1'}/>
                <DialogItem name={'Katty'} id={'2'}/>
                <DialogItem name={'Anatoly'} id={'3'}/>
                <DialogItem name={'Lilia'} id={'4'}/>
                <DialogItem name={'Pawel'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'Lets go to the city'}/>
            </div>
        </div>
    )
}
export default Dialogs;