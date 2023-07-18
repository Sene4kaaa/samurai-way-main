import React from "react";
import {FormikProvider, useFormik} from "formik";
import {connect, useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";


type ErrorType = {
    email?: string,
    password?: string
}

const Login = () => {

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
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
            formik.resetForm();
        },
    });


    return <div>
        <h1>Login</h1>
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder={'email'}
                        // name="email"
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div>
                    <input type={'password'}
                        placeholder={'password'}
                        // name="password"
                        // onChange={formik.handleChange}
                        // value={formik.values.password}
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
                <button type="submit">Submit</button>
            </form>
        </FormikProvider>
    </div>
}

export default connect(null, {loginTC})(Login)