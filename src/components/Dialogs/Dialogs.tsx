import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = ()  => {
    return (
    <div className={s.dialogs}>
       <div className={s.dialogsItem}>
           <div className={s.dialog}>
               Andrew
           </div>
           <div className={s.dialog + ' ' + s.active}>
               Katty
           </div>
           <div className={s.dialog}>
               Anatoly
           </div>
           <div className={s.dialog}>
               Lilia
           </div>
           <div className={s.dialog}>
               Pawel
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