import React, { useEffect, useState, SetStateAction } from 'react';
import { connect } from 'react-redux';
import { Column } from '../../type';
import './style.scss';

interface ColumnList {
  columns: Array<Column>,
  columnId: string,
  onAddColumn: Function,
  onSetVisibleColumn: Function,
};

const Column = ({ columnId, columns, onAddColumn, onSetVisibleColumn }: ColumnList) => {
  const [currentColumn, setCurrentColumn]: [string, Function]= useState(columns[0].id);
  useEffect(() => {
    setCurrentColumn(columns[0].id);
  }, [])
  return (
    <div className="todo-column">
      <ul>
        {columns.map(item => (
          <li onClick={() => { setCurrentColumn(item.id); onSetVisibleColumn(item.id)}}>
            <div className="mark-name"><span>{item.name}</span></div>
            {item.id === currentColumn && <div className="mark"></div>}
          </li>
        ))}
      </ul>
      <div
        onClick={() => onAddColumn(new Date().getTime().toString())}
      >add</div>
    </div>
  )
}

export default connect()(Column);