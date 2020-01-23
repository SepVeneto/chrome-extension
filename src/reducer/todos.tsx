import { State, Action } from '../type';
import { saveData } from '../utils/storage';
const todos = (state: Array<State>=[], action: Action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const {id, title, content} = action;
      const list = [
        ...state,
        {
          id,
          title,
          content,
          update: new Date().getTime(),
          completed: false
        }
      ];
      saveData({todos: list});
      return list;
    case 'EDIT_TODO':
      const editList = state.map(todo =>
        (todo.id === action.id) ? {...todo, title: action.title, content: action.content}: todo
      );
      saveData({todos: editList})
      return editList;
    case 'DELETE_TODO':
      const deleteList = [...state];
      for (let i = 0; i < state.length; ++i) {
        if (state[i].id === action.id) {
          deleteList.splice(i, 1);
          saveData({todos: deleteList});
          return deleteList;
        }
      }
      return deleteList;
    case 'TOGGLE_TODO':
      const res = state.map(todo => 
        (todo.id === action.id) ? {...todo, completed: !todo.completed} 
        : todo
      )
      saveData({todos: res});
      return res;
    default:
      return state;
  }
}

export default todos;
