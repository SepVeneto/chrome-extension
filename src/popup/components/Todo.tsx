import React, { useState, useRef, Fragment, useEffect } from 'react';
import { todo } from '../../type';

const Todo = ({ onClick, onEdit, onDelete, title, completed, update }: todo) => {
  const [editable, toggleEditable] = useState(false);
  const [titleText, setTitleText] = useState(title);
  const [deleteClass, addDeleteClass] = useState('');
  const editNode = useRef<HTMLInputElement>(null);
  const handleDelete = null;
  const handleBlur = () => {
    toggleEditable(false);
    onEdit(titleText);
  }
  const handleAnimationEnd = ({ animationName }: AnimationEventInit) => {
    animationName === 'removeItem' && onDelete();
  };
  function displayTitle() {
    return (
      <Fragment>
        <input
          type="checkbox"
          checked={completed}
          name=""
          id=""
          onChange={onClick}
        />
        <i className="checkbox"></i>
        <span className="todo-list__content" title={title}>{title}</span>
        <span className="todo-list__time">{formatTime(update)}</span>
      </Fragment>
    )
  }
  function editTitle() {
    return (
      <input
        ref={editNode}
        className="title-edit"
        value={titleText}
        onChange={(e) => {setTitleText(e.target.value)}}
        onBlur={() => handleBlur()}
      />
    )
  }
  useEffect(() => {
    const node =  editNode.current;
    node && node.focus();
  });
  return (
    <div
      className={`todo-list__item ${deleteClass}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <label className="todo-list__label">
        {editable ? editTitle() : displayTitle()}
      </label>
      <div className="operate">
        <i className="operate__edit" title="修改" onClick={(e) => {toggleEditable(true)}}>
          <span className="wrap"><span className="pen"></span></span>
        </i>
        {!editable &&<i
          className="operate__delete"
          title="删除"
          onClick={() => addDeleteClass('remove-item')}
        ></i>}
      </div>
    </div>
  )
}

function formatTime(time: number): string {
  const diff = new Date().getTime() - time;
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  const year = Math.floor(diff / YEAR);
  const month = Math.floor(diff / MONTH);
  const week = Math.floor(diff / WEEK);
  const day = Math.floor(diff / DAY);
  const hour = Math.floor(diff / HOUR);
  const minute = Math.floor(diff / MINUTE);

  if (year >= 1) {
    return `${year}年前`;
  } else if (month >= 1) {
    return `${month}月前`;
  } else if (week >= 1) {
    return `${week}周前`;
  } else if (day >= 1) {
    return `${day}天前`;
  } else if (hour >= 1) {
    return `${hour}小时前`;
  } else if (minute >= 1) {
    return `${minute}分钟前`;
  } else {
    return '刚刚';
  };
}

export default Todo;