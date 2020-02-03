import React, { useEffect, Fragment } from 'react';
import Detail from '../components/detail';
import { State } from '../../type';
interface DetailType {
  todos: Array<State>,
  onEditTodo: Function,
  onDelete: Function,
  onAddTodo: Function,
};
const App = ({todos, onEditTodo, onDelete, onAddTodo}: DetailType) => {
  return (
    // <Fragment>
    // <Operate />
    <ul className="detail-list">
      {todos.map(item => (
        <Detail
          key={item.id}
          {...item}
          onEdit={(title: string, content: string) => onEditTodo(item.id, title, content)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
      <div
        className="detail-add"
        onClick={() => onAddTodo('', '')}
      >
        <div className="add-icon"></div>
      </div>
    </ul>
    // </Fragment>
  )
}

export default App;