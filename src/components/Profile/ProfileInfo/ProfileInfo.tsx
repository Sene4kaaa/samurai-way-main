import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://ic.pics.livejournal.com/usolt/5104380/764394/764394_original.jpg'}/>
            </div>
            <div className={s.descriptionBloch}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;