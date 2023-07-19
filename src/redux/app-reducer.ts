import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


let initialState: InitialStateType = {
    initialized: false,
}

export type InitialStateType = {
    initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS' :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',
    } as const
}


export const initializeApp = (): AppThunk => (dispatch) => {
    dispatch(getAuthUserData())


    dispatch(initializedSuccess())
}


// export const loginTC = (email: string, password: string, rememberMe: boolean, setStatus: (status: string) => void): AppThunk => (dispatch) => {
//     console.log('loginTC')
//
//     authAPI.login(email, password, rememberMe)
//         .then(response => {
//             console.log(response)
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             } else if (response.data.resultCode !== 0) {
//                 setStatus(response.data.messages[0])
//             }
//         })
// }
//
// export const logoutTC = (): AppThunk => (dispatch: Dispatch) => {
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false))
//             }
//         })
// }