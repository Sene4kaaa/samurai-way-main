import {ActionsTypes} from "./store";


type SidebarType = {}

const initialState: SidebarType = {}

export const sidebarReducer = (state:SidebarType = initialState, action: ActionsTypes) : SidebarType => {
    return state
}

