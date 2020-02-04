import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import Reducer from '../reducer';
import './details.scss';
import { Provider } from 'react-redux';
import App from './App';

chrome.storage.local.get(res => {
  const list = res || {
    todos: [],
    columns: [],
  };
  if (!res.columns || res.columns.length === 0) {
    list.columns = [];
    list.columns.push({
      id: 'default',
      name: '默认',
    })
  }
  const store = createStore(Reducer, list);
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})