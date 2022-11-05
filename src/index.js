import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";
window.store = store;
const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {

    root.render(
            <App store={store}/>
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

