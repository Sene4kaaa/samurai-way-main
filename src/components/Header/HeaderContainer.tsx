import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean,
    login: null | string

}

type MapDispatchToPropsType = {
    logoutTC: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);