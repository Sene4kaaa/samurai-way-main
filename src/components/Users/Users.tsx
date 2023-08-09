import React from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


export const Users = (props: UsersPropsType) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   portionSize={10} onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <User
                key={u.id}
                user={u}
                unfollow={props.unfollow}
                follow={props.follow}
                followingInProgress={props.followingInProgress}
            />)
        }
    </div>
}

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: number[]
}