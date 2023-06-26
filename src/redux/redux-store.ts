import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
})


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch
