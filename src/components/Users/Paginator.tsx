import React from "react";
import styles from "./users.module.css";


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return <div>
        {pages.map(p => {
            return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}