import {addPost, deletePost, savePhotoSuccess, saveProfileSuccess, setStatus, setUserProfile} from "./profile-reducer";
import {sendMessage} from "./dialogs-reducer";
import {
    acceptFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    acceptUnfollow
} from "./users-reducer";
import {getCaptchaUrlSuccess, setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof saveProfileSuccess>
    | ReturnType<typeof getCaptchaUrlSuccess>


