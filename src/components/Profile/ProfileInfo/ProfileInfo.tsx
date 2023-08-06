import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/UserAvatar.png";


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

                <div>
                    <div>
                        <b>Full name</b>: {props.profile.fullNam}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = (props: ContactPropsType) => {
    return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export default ProfileInfo;