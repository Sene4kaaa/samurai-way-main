import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string,
    likeCounts: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'}/>
            {props.message}
            <div>
                <span>like </span>{props.likeCounts}
            </div>
        </div>
    )
}

export default Post;