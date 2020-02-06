import React, { useEffect, useState, SetStateAction, useRef, MouseEvent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Column } from '../../type';
import './style.scss';
import ButtonAdd from '../components/ButtonAdd';
import ColumnItem from './column';
import ContextMenu from '../components/ContextMenu';

interface ColumnList {
  columns: Array<Column>,
  columnId: string,
  onAddColumn: Function,
  onEditColumn: Function,
  onDeleteColumn: Function,
  onSetVisibleColumn: Function,
};

const Column = ({ columns, onAddColumn, onEditColumn, onDeleteColumn, onSetVisibleColumn }: ColumnList) => {
  const [activeColumn, setActiveColumn]: [string, Function] = useState(columns[0].id)
  const [showMenu, toggleShowMenu]: [boolean, Function] = useState(false);
  const [mousePosition, setMousePosition]: [{ x: number, y: number}, Function] = useState({x: 0, y: 0});
  const [columnId, setColumnId]: [string, Function] = useState('');
  function handleClick() {
    const columnName: string = `${new Date().getTime().toString()}`;
    onAddColumn(columnName);
  }

  function changeActiveColumn(id: string) {
    setActiveColumn(id)
    onSetVisibleColumn(id);
  }
  useEffect(() => {
    document.addEventListener('click', () => {toggleShowMenu(false); console.log(showMenu)});
    return document.removeEventListener('click', toggleShowMenu(false));
  }, []);

  return (
    <Fragment>
      <div className="todo-column">
        <ul>
          {columns.map(item => (
            <ColumnItem
              {...item}
              active={activeColumn}
              onChangeActive={(id: string) => changeActiveColumn(id)}
              onEditColumn={(id: string, name: string) => onEditColumn(id, name)}
              onContextMenu={(x: number, y: number) => {
                setMousePosition({x, y});
                setColumnId(item.id);
                toggleShowMenu(true);}}
            />
          ))}
        </ul>
        <ButtonAdd size="small" onClick={() => handleClick()} />
      </div>
      {showMenu &&
        <ContextMenu
          {...mousePosition}
          // columnId={columnId}
          deleteColumn={() => onDeleteColumn(columnId)}
      />}
    </Fragment>
  )
}

export default connect()(Column);