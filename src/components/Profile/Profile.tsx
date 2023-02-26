import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     message={props.profilePage.messageForNewPost}
                     changeNewText={props.changeNewText}/>
        </div>
    )
}

export default Profile;