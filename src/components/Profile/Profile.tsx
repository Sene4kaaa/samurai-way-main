import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, ProfileUpdateDataType} from "../../redux/profile-reducer";


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
    saveProfile: (profile: ProfileUpdateDataType) => void
}

export default Profile;