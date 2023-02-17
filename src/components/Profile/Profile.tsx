import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
}

const Profile: FC<ProfileType> = ({profilePage}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}/>
        </div>
    )
}

export default Profile;