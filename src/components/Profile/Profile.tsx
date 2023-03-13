import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     message={props.profilePage.messageForNewPost}/>
        </div>
    )
}

export default Profile;