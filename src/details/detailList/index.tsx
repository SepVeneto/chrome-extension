import React, { useEffect, Fragment } from 'react';
import Detail from '../components/detail';
import { State } from '../../type';
import ButtonAdd from '../components/ButtonAdd';
interface DetailType {
  todos: Array<State>,
  columnId: string,
  onEditTodo: Function,
  onDelete: Function,
  onAddTodo: Function,
};
const App = ({todos, columnId, onEditTodo, onDelete, onAddTodo}: DetailType) => {
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
      <ButtonAdd onClick={() => onAddTodo('', '', columnId)} />
      {/* <div
        className="detail-add"
        onClick={() => onAddTodo('', '', columnId)}
      >
        <div className="add-icon"></div>
      </div> */}
    </ul>
    // </Fragment>
  )
}

export default App;