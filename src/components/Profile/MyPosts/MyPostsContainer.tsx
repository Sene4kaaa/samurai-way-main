import React from "react";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const newTextChangeHandler = (value: string) => {
                    debugger
                    store.dispatch(changeNewTextActionCreator(value))
                }
                return <MyPosts addPost={addPost}
                                newTextChangeHandler={newTextChangeHandler}
                                messageForNewPost={state.profilePage.messageForNewPost}
                                posts={state.profilePage.posts}
                />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
