import React, { useEffect, useState, SetStateAction, useRef, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Column } from '../../type';
import './style.scss';
import ButtonAdd from '../components/ButtonAdd';
import ColumnItem from './column';

interface ColumnList {
  columns: Array<Column>,
  columnId: string,
  onAddColumn: Function,
  onEditColumn: Function,
  onSetVisibleColumn: Function,
};

const Column = ({ columns, onAddColumn, onEditColumn, onSetVisibleColumn }: ColumnList) => {
  const [activeColumn, setActiveColumn]: [string, Function] = useState(columns[0].id)
  function handleClick() {
    const columnName: string = `${new Date().getTime().toString()}`;
    onAddColumn(columnName);
  }

  function changeActiveColumn(id: string) {
    setActiveColumn(id)
    onSetVisibleColumn(id);
  }

  return (
    <div className="todo-column">
      <ul>
        {columns.map(item => (
          <ColumnItem
            {...item}
            active={activeColumn}
            onChangeActive={(id: string) => changeActiveColumn(id)}
            onEditColumn={(id: string, name: string) => onEditColumn(id, name)}
          />
        ))}
      </ul>
      <ButtonAdd size="small" onClick={() => handleClick()} />
    </div>
  )
}

export default connect()(Column);