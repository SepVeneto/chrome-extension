import React from 'react';
import Todo from './Todo';
import { State } from '../../type';
import '../style/todoList.scss';

interface todoList {
  todos: Array<State>,
  onTodoClick: Function, 
  onEditTitle: Function,
  onDelete: Function,
};
const TodoList = ({ todos, onTodoClick, onEditTitle, onDelete }: todoList) => {
  return (
    <fieldset className="todo-list">
      {todos.map((todo: State) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onEdit={(title: string) => onEditTitle(todo.id, title)}
          onDelete={() => onDelete(todo.id)}
        ></Todo>
      ))}
    </fieldset>
)}

export default TodoList;