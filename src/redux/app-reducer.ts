import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
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


export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


