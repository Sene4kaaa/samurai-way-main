import React from "react";
import {FormikProvider, useFormik} from "formik";
import {connect, useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"


const Login = (props: LoginPropsType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password?.length < 4) {
                errors.password = 'Please add more symbols';
            }

            return errors;
        },
        onSubmit: (values, {setStatus}) => {
            dispatch(login(values.email, values.password, values.rememberMe, setStatus, values.captcha))
            formik.resetForm();
        },
    });

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder={'email'}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div>
                    <input type={'password'}
                           placeholder={'password'}
                           {...formik.getFieldProps('password')}
                    />
                </div>
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                <div>
                    <input
                        type={'checkbox'}
                        name="rememberMe"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                    <span> Remember Me</span>
                </div>
                {formik.status && <div className={s.formSummaryError}>{formik.status}</div>}
                <button type="submit">Submit</button>
                {props.captchaUrl && <img src={props.captchaUrl || undefined}/>}
                {props.captchaUrl && <div>
                    <input
                        placeholder={'captcha'}
                        {...formik.getFieldProps('captcha')}
                    />
                </div>}
            </form>
        </FormikProvider>
    </div>
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: null | string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type ErrorType = {
    email?: string,
    password?: string
}

type LoginPropsType = {
    isAuth: boolean,
    captchaUrl: null | string
}

export default connect(mapStateToProps, {loginTC: login})(Login)