import React from "react";
import styles from "./users.module.css";
import UserAvatar from "../../assets/images/UserAvatar.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";


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

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return <div>
        {/*<div>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}*/}
        {/*                     onClick={(e) => {*/}
        {/*                         props.onPageChanged(p)*/}
        {/*                     }}>{p}</span>*/}
        {/*    })}*/}
        {/*</div>*/}
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserAvatar} className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed

                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}