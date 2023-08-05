import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: any
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return this.props.profile ? (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusTC}/>
        ) : null
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC: getUserProfile, getStatusTC: getStatus, updateStatusTC: updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)