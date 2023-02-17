import React, {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
}

const Profile: FC<ProfileType> = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts}/>
        </div>
    )
}

export default Profile;