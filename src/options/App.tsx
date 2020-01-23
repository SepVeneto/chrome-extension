import React, { useState, MouseEvent, useEffect } from 'react';
import { saveData } from '../utils/storage';
import { request } from 'http';

const App: React.FC = () => {
  const [workTime, setWorkTime] = useState('09:00');
  const [lunchTime, setLunchTime] = useState('11:45');
  const [homeTime, setHomeTime] = useState('17:45');
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    chrome.runtime.sendMessage('save', () => {
      const settings = { workTime, lunchTime, homeTime };
      saveData({settings})
      window.close();
    })
  }
  useEffect(() => {
    chrome.storage.local.get(res => {
      const settings = res.settings;
      setWorkTime(settings.workTime);
      setLunchTime(settings.lunchTime);
      setHomeTime(settings.homeTime);
    })
  }, [])
  return (
      <form className="options">
        <div className="options__item">
          <label>上班时间：</label>
          <input value={workTime} onChange={(e) => setWorkTime(e.target.value)} />
        </div>
        <div className="options__item">
          <label>午饭时间：</label>
          <input value={lunchTime} onChange={(e) => setLunchTime(e.target.value)} />
        </div>
        <div className='options__item'>
          <label>下班时间：</label>
          <input value={homeTime} onChange={(e) => setHomeTime(e.target.value)} />
        </div>
        <button onClick={handleClick}>保存</button>
      </form>
  )
}

export default App;