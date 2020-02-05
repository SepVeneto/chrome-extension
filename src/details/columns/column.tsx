import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Column } from '../../type';

interface Props extends Column {
  active: string,
  onEditColumn: Function,
  onChangeActive: Function,
}

const Column = ({ id, name, active, onEditColumn, onChangeActive }: Props) => {
  const [editable, toggleEditable]: [boolean, Function] = useState(false);
  const [columnName, setColumnName]: [string, Function] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  function handleMouseDown(e: MouseEvent, columnName: string) {
    if (e.button === 1) {
      toggleEditable(true);
      setColumnName(columnName);
    }
  }
  function handleBlur(id: string) {
    toggleEditable(false);
    onEditColumn(id, columnName);
  }
  useEffect(() => {
    const el = inputEl.current;
    el && el.focus();
  }, [editable])
  return (
    <li
      title={name}
      onClick={() => onChangeActive(id)}
      onMouseDown={(e) => handleMouseDown(e, name)}
    >
      {!editable
        ? <div className="mark-name" ><span>{name}</span></div>
        : <input
            ref={inputEl}
            value={columnName}
            onBlur={() => handleBlur(id)}
            onChange={(e) => {setColumnName(e.target.value); console.log('input')}}
          />
      }
      {id === active && <div className="mark"></div>}
    </li>
  )
}

export default Column;