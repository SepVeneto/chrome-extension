import React, { useEffect } from 'react';
import './ContextMenu.scss';

interface Props {
  x: number,
  y: number,
  columnId?: string,
  deleteColumn: Function,
};

const ContextMenu = ({x, y, columnId, deleteColumn}: Props) => {
  return (
    <ul className="context-menu" style={{left: `${x}px`, top: `${y}px`}}>
      <li onClick={() => deleteColumn()}>删除分类</li>
    </ul>
  )
};

export default ContextMenu;
