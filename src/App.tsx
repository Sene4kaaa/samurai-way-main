import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Route render={() => <Header/>}/>
                <Route render={() => <Navbar/>}/>
                <Route render={() => <Profile/>}/>
            </div>
        </BrowserRouter>
    );
}


export default App;
