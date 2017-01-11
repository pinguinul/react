/**
 * Created by Andra on 14-Dec-16.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import app from './reducers';
import App from './components/app/app';

const logger = createLogger();
const store = createStore(
    app,
    applyMiddleware(thunk, reduxPackMiddleware, logger)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
