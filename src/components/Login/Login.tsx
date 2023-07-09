import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>

}