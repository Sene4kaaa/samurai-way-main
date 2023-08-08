import {ProfileContactsPropsType, ProfileType} from "../../../redux/profile-reducer";
import s from "./ProfileInfo.module.css";
import React from "react";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: (event: React.MouseEvent) => void
}

export const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {
                Object.keys(props.profile.contacts).map(key => {
                    const value: string = props.profile.contacts[key as keyof ProfileContactsPropsType]
                    return <Contact key={key} contactTitle={key} contactValue={value}/>
                })
            }
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}
