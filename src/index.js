import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWork from './registerServiceWork'
import {createStore} from 'redux'
import appReducers from './reducer/index'
import {Provider} from 'react-redux'
const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            {console.log("render trong index.js")}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
// registerServiceWork();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
