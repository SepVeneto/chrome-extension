import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import Reducer from '../reducer';
import './details.scss';
import { Provider } from 'react-redux';
import VisibleDetailList from './containers/visibleDetaiList';

chrome.storage.local.get(res => {
  const list = res || {};
  const store = createStore(Reducer, list);
  ReactDom.render(
    <Provider store={store}>
      <VisibleDetailList />
    </Provider>,
    document.getElementById('root')
  );
})