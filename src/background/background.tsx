import { setBadge } from "../utils/storage";
import { Options } from '../type';

// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './App'
// import './background.scss';

// ReactDom.render(<App />, document.getElementById('root'));

chrome.storage.local.get(res => {
  const list = res.todos || [];
  const settings = res.settings;
  setBadge(list);
  setNotifcations(settings);
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.storage.local.get(res => {
    sendResponse('success');
    const settings = res.settings;
    console.log('lunchTime: ', settings.lunchTime)
    const list = res.todos || [];
    setBadge(list);
    setNotifcations(settings)
  })
})

chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({url: 'details.html'});
})

let timer: NodeJS.Timeout;

function setNotifcations(settings: Options) {
  clearInterval(timer);
  timer = setInterval(() => {
    const stage = getStage(settings)
    console.log(stage)
    if (stage === 'workTime') {
      createNotification(stage);
    } else if (stage === 'lunchTime') {
      createNotification(stage);
      // chrome.notifications.create({
      //   type: 'basic',
      //   title: '摸鱼小助手',
      //   iconUrl: 'static/image/haibara.jpg',
      //   message: `${readData()}个待办事项`
      // })
    } else if (stage === 'homeTime') {
      createNotification(stage);
      // chrome.notifications.create({
      //   type: 'basic',
      //   title: '摸鱼小助手',
      //   iconUrl: 'static/image/haibara.jpg',
      //   message: `${readData()}个待办事项`
      // })
    }
  }, 1000 * 60)
}

function createNotification(stage: string) {
  chrome.storage.local.get(res => {
    const list = res.todos || [];
    chrome.notifications.create({
        type: 'basic',
        title: '摸鱼小助手',
        iconUrl: 'static/image/haibara.jpg',
        message: `${list.length}个待办事项`
    })
  })
}

function getStage(settings: Options) {
  const current = new Date();
  const currentHour = current.getHours();
  const currentMinute = current.getMinutes();
  const hour = currentHour > 9 ? currentHour.toString() : `0${currentHour}`;
  const minute = currentMinute > 9 ? currentMinute.toString() : `0${currentMinute}`;
  const {workTime, lunchTime, homeTime} = settings;
  console.log(lunchTime, hour, minute);
  return {
    [ workTime ]: 'workTime',
    [ lunchTime ]: 'lunchTime',
    [ homeTime ]: 'homeTime',
  }[[hour, minute].join(':')];
}
