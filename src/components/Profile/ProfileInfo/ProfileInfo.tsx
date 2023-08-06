import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileContactsPropsType, ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/UserAvatar.png";
import {ProfileData} from "./ProfileData";


type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBloch}>
                <img src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : UserAvatar} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileData profile={props.profile}/>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}



export default ProfileInfo;