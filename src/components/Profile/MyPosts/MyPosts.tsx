import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";


type PostType = {
    id: number
    message: string
    likesCounts: number
}

type MyPostsPropsType = {
    addPost: (values: string) => void
    posts: Array<PostType>
}

type AddNewPostFormReduxType = {
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <div key={p.id}><Post message={p.message} likeCounts={p.likesCounts}/>
    </div>)


    const addPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormReduxType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormReduxType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
