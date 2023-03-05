import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={props.store.getState().profilePage}
                                              addPost={props.store.addPost.bind(props.store)}
                                              changeNewText={props.store.changeNewText.bind(props.store)}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogPage={props.store.getState().dialogPage}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
