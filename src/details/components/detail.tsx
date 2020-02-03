import React, { useState, Fragment, useRef, CSSProperties, AnimationEventHandler } from 'react';
import { todo } from '../../type';

const detail = ({title, content, onDelete, onEdit}: todo) => {
  const [detailClass, addDetailClass] = useState('');
  const [editable, toggleEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [transform, setTransform] = useState();
  const detailEl = useRef<HTMLLIElement>(null);
  const handleClick = () => {
    addDetailClass('detail');
    toggleEditable(true);
    const node = detailEl.current;
    const CENTER_WIDTH = document.body.offsetWidth / 2;
    const CENTER_HEIGHT = document.body.offsetHeight / 2;
    const DETAIL_X = node?.offsetLeft;
    const DETAIL_WIDTH = (node?.offsetWidth || 0) / 2;
    const DETAIL_Y = node?.offsetTop;
    const x = CENTER_WIDTH - (DETAIL_X || 0) - DETAIL_WIDTH;
    const y = CENTER_HEIGHT - (DETAIL_Y || 0);
    setTransform(`translate(${x}px, ${y}px) scale(2)`);
  }
  const handleBlur = () => {
    // setTransform('');
    addDetailClass('remove');
    toggleEditable(false);
    onEdit(newTitle, newContent);
  }
  const handleAnimationEnd = ({animationName}: AnimationEventInit) => {
    animationName === 'removeDetail' && setTransform('');
  }
  function editTitle() {
    return (
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
    )
  }
  function editContent() {
    return (
      <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
    )
  }
  return (
    <Fragment>
      <li
        className={detailClass}
        ref={detailEl}
        style={{transform: transform}}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="detail-title" onClick={handleClick} >
          {editable ? editTitle() : title}
        </div>
        <pre className="detail-content" onClick={handleClick} >
          {editable ? editContent(): content}
        </pre>
        <i className="delete" onClick={() => onDelete()}></i>
      </li>
      <div
        className={editable ? "mask" : ''}
        onClick={handleBlur}
      ></div>
    </Fragment>
  )
}

export default detail;