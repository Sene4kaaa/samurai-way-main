import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from './ProfileStatus'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'https://ic.pics.livejournal.com/usolt/5104380/764394/764394_original.jpg'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBloch}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;