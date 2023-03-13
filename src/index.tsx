import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";


const renderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store.getState()} dispatch={store.dispatch}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);
