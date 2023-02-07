import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://look.com.ua/pic/202010/640x480/look.com.ua-362136.jpg'}/>
            </div>
            <div className={s.descriptionBloch}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;