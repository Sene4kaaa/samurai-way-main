import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string
}

type MapDispatchToPropsType = {
    logoutTC: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {logoutTC: logout})(HeaderContainer);