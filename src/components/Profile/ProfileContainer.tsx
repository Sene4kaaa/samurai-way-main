import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatus(userId)
    }

    render() {
        return this.props.profile ? (
            <Profile {...this.props} profile={this.props.profile}/>
        ) : null
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


// export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfileTC})(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)