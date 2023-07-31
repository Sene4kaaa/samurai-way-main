import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {FormikProvider, useFormik} from "formik";

import {useDispatch} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";


type PostType = {
    id: number
    message: string
    likesCounts: number
}

type MyPostsPropsType = {
    // addPost: (values: string) => void
    posts: Array<PostType>
}



type ErrorType = {
    message?: string,
}

const MyPosts = React.memo((props: MyPostsPropsType) => {
    console.log('RENDER')
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message?.length > 150) {
                errors.message = 'Max length is 150 symbols';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(addPostActionCreator(values.message))
            formik.resetForm();
        },
    });

    let postsElements = props.posts.map(p => <div key={p.id}><Post message={p.message} likeCounts={p.likesCounts}/>
    </div>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        placeholder={'Enter you text'}
                        // name="message"
                        // onChange={formik.handleChange}
                        // value={formik.values.message}
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message &&
                        <div style={{color: 'red'}}>{formik.errors.message}</div>}
                    <button type="submit">Submit</button>
                </form>
            </FormikProvider>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})


export default MyPosts;
