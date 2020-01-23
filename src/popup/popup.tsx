import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from '../reducer';

import App from './App';
import './style/global.scss'

chrome.storage.local.get('todos', res => {
  const list = res || {};
  const store = createStore(Reducer, list);
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
})