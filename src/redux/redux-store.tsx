import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export type DispatchType = typeof store.dispatch

let store = createStore(reducers);

export default store;