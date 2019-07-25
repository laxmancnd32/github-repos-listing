import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import dashboardReducers from './reducers';
import './index.scss';
import Router from './router/router';

const store = createStore(dashboardReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
