import React from "react";
import styles from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import UserAvatar from '../../assets/images/UserAvatar.png'

export class Users extends React.Component <UsersPropsType> {

    getUsers() {

        if (this.props.usersPage.users.length === 0) {

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }


    componentDidMount() {
        this.getUsers()
    }


    render() {
        return <div>

            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : UserAvatar} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

