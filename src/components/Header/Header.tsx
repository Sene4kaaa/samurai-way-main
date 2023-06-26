import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: null | string
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src={'https://cdn.dribbble.com/users/1790995/screenshots/5089886/dfsdfsdfsdf_4x.jpg'}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}
export default Header;