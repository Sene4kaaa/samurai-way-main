import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

let initialState: InitialStateType = {
    initialized: false,
}

export type InitialStateType = {
    initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
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
        type: INITIALIZED_SUCCESS,
    } as const
}


export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


