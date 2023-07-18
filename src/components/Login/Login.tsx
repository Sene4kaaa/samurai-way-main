import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {FormikProvider, useFormik} from "formik";
import {sendMessageCreator} from "../../redux/dialogs-reducer";

// type FormDataType = {
//     login: string
//     password: string
//     rememberMe: boolean
// }

// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Login'} name={'login'} component={'input'}/>
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={'input'}/>
//             </div>
//             <div>
//                 <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }


// const LoginReduxForm = reduxForm<FormDataType>({
//     // a unique name for the form
//     form: 'login'
// })(LoginForm)

type ErrorType = {
    message?: string,
    password?: string
}

export const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.email) {
                errors.message = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.message = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password?.length < 4) {
                errors.password = 'Please add more symbols';
            }

            return errors;
        },
        onSubmit: values => {
            // dispatch(sendMessageCreator(values.email))
            formik.resetForm();
        },
    });

    // const onSubmit = (formData: FormDataType) => {
    //
    // }

    return <div>
        <h1>Login</h1>
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder={'email'}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div>
                    <input
                        placeholder={'Password'}
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                <div>
                    <input
                        type={'checkbox'}
                        name="rememberMe"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        checked={formik.values.rememberMe}
                    />
                    <span> Remember Me</span>
                </div>
                <button type="submit">Submit</button>
            </form>
        </FormikProvider>
    </div>
}