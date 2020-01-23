import { connect } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../../action';
import TodoList from '../components/TodoList';
import { State, Store } from '../../type';
import { Dispatch } from 'react'

const getVisibleTodos = (todos: Array<State>, filter: string) => {
  switch(filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const mapStateToProps = (state: Store) => {
  let list = state.todos;
  chrome.storage.local.get('todos', res => {
    list = res.todos || state.todos;
  })
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter),
    todos: getVisibleTodos(list, state.visibilityFilter),
  }
}

const mapDispatchtoProps = (dispatch: Dispatch<any>) => {
  return {
    onTodoClick (id: number) {
      dispatch(toggleTodo(id));
    },
    onEditTitle (id: number, title: string) {
      dispatch(editTodo(id, title));
    },
    onDelete (id: number) {
      dispatch(deleteTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchtoProps
)(TodoList);

export default VisibleTodoList;