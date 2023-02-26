import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, changeNewText, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree();
subscribe(renderEntireTree);
