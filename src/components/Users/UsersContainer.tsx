import React from "react";
import {connect} from "react-redux";
import {
    getUsersTC,
    setCurrentPage,
    UserType, followTC, unfollowTC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type MapDispatchToPropsType = {
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersAPIPropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainerAPI extends React.Component<UsersAPIPropsType, {}> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollowTC}
                   follow={this.props.followTC}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

// export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage,
//     getUsersTC,
//     followTC,
//     unfollowTC
// })(UsersContainerAPI))

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        setCurrentPage,
        getUsersTC,
        followTC,
        unfollowTC
    }),
    withAuthRedirect
)(UsersContainerAPI)