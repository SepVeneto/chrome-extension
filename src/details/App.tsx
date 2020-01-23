import React, { useEffect } from 'react';
import Detail from './detail';
import { State } from '../type';
interface DetailType {
  todos: Array<State>,
  onEditTodo: Function,
  onDelete: Function,
};
const App = ({todos, onEditTodo, onDelete}: DetailType) => {
  return (
    <ul className="detail-list">
      {todos.map(item => (
        <Detail
          {...item}
          onEdit={(title: string, content: string) => onEditTodo(item.id, title, content)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  )
}

export default App;