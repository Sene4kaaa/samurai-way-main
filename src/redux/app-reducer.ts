import {ActionsTypes} from "./actionsTypes";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";


const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

let initialState: InitialStateType = {
    initialized: false,
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

export const initializeApp = (): AppThunk => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export type InitialStateType = {
    initialized: boolean
}


