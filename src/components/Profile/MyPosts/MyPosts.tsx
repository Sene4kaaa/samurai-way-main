import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
    message: string
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <div key={p.id}><Post message={p.message} likeCounts={p.likesCounts}/>
    </div>)


    const addPost = () => {
        props.addPost(props.message);
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message}
                              onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;