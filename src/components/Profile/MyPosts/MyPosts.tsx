import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {FormikProvider, useFormik} from "formik";
import {sendMessageCreator} from "../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";


type PostType = {
    id: number
    message: string
    likesCounts: number
}

type MyPostsPropsType = {
    addPost: (values: string) => void
    posts: Array<PostType>
}

// type AddNewPostFormReduxType = {
//     newPostText: string
// }

type ErrorType = {
    message?: string,
}

const MyPosts = (props: MyPostsPropsType) => {

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


    // const addPost = (values: { newPostText: string }) => {
    //     props.addPost(values.newPostText)
    // }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        placeholder={'Enter you text'}
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
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
}

// const maxLength10 = maxLengthCreator(10)
//
// const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormReduxType>> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field
//                     name={'newPostText'}
//                     component={Textarea}
//                     placeholder={'Post message'}
//                     validate={[requiredField,maxLength10]}/>
//             </div>
//             <div>
//                 <button>Add post</button>
//             </div>
//         </form>
//     )
// }
//
// const AddNewPostFormRedux = reduxForm<AddNewPostFormReduxType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
