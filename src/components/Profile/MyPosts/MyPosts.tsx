import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 1, message: "It's my first post", likeCounts: 20},
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/>
                <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/>
            </div>
        </div>
    )
}

export default MyPosts;