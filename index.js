import React, { Component } from 'react';
import {name as appName} from './app.json';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import allReducers from './src/reducers/index.js';
import App from './src/App.js';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class NativeBaseRedux extends Component {
  render() {
    return (
      <Provider store= {store}>
      <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => NativeBaseRedux);
