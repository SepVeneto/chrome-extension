import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import Reducer from '../reducer';
import './details.scss';
import { Provider } from 'react-redux';
import App from './App';

chrome.storage.local.get(res => {
  const list = res || {};
  const store = createStore(Reducer, list);
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})