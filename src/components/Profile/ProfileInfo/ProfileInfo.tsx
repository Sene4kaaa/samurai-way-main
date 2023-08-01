import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/UserAvatar.png";


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
            <div className={s.descriptionBloch}>
                <img src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : UserAvatar}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;