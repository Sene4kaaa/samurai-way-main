import {ActionsTypes} from "./store";


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA' :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }

}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {userId, email, login}
    } as const
}