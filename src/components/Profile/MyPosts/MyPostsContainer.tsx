import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType, DispatchType} from "../../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         addPost: (newPostText: string) => {
//             dispatch(addPostActionCreator(newPostText))
//         },
//     }
// }


export const MyPostsContainer = connect(mapStateToProps,/* mapDispatchToProps*/)(MyPosts)
