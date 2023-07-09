import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} /* updatestatus={props.updateStatus}*//>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;