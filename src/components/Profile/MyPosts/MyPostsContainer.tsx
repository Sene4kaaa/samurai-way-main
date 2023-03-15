import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}


const MyPostsContainer = (props: MyPostsPropsType) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const newTextChangeHandler = (value: string) => {
        debugger
        props.store.dispatch(changeNewTextActionCreator(value))
    }


    return (
        <MyPosts addPost={addPost}
                 newTextChangeHandler={newTextChangeHandler}
                 messageForNewPost={state.profilePage.messageForNewPost}
                 posts={state.profilePage.posts}
        />
    )
}

export default MyPostsContainer;
