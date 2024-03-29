import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-all'}>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Switch>
                            <Route exact path={'/samurai-way-main'} render={() => <Redirect to={'/profile'}/>}/>
                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                            <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                            <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToProps = {
    initializeApp: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


