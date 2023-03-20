import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch
console.log(store.getState().dialogPage)