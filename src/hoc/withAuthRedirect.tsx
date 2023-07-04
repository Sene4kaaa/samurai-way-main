import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {MapStateForRedirectPropsType} from "../components/Profile/ProfileContainer";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectPropsType => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component{...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}