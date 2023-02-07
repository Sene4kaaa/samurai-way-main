import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = ()  => {
    return (
    <div className={s.dialogs}>
       <div className={s.dialogsItem}>
           <div className={s.dialog}>
               <NavLink to={'/dialogs/1'}>Andrew</NavLink>
           </div>
           <div className={s.dialog + ' ' + s.active}>
               <NavLink to={'/dialogs/2'}>Katty</NavLink>
           </div>
           <div className={s.dialog}>
               <NavLink to={'/dialogs/3'}>Anatoly</NavLink>
           </div>
           <div className={s.dialog}>
               <NavLink to={'/dialogs/4'}>Lilia</NavLink>
           </div>
           <div className={s.dialog}>
               <NavLink to={'/dialogs/5'}>Pawel</NavLink>
           </div>
    </div>
        <div className={s.messages}>
            <div className={s.message}>
                Hello
            </div>
            <div className={s.message}>
               How are you?
            </div>
            <div className={s.message}>
                Lets go to the city
            </div>
        </div>
    </div>
    )
}
export default Dialogs;