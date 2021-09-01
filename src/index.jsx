// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';

const initialState = {
  user: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  messages: [],
  channels: ['general', 'react', 'helsinki'],
  selectedChannel: 'general'
};

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  user: identityReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer
});

//  Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
