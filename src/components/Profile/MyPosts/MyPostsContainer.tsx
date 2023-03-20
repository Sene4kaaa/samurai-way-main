import React from "react";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType, DispatchType} from "../../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newTextChangeHandler: (value: string) => {
            dispatch(changeNewTextActionCreator(value))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
