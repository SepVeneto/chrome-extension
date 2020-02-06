import { Column } from "../type";
import { saveData } from "../utils/storage";

interface Action {
  type: string,
  id: string,
  name: string,
  items: Array<number>,
}

const columns = (state: Array<Column> = [], action: Action) => {
  let list: Array<Column> = [];
  switch(action.type) {
    case 'ADD_COLUMN':
      const {id, name} = action;
      list = [
        ...state,
        { id, name }
      ];
      saveData({columns: list})
      return list
    case 'EDIT_COLUMN':
      list = state.map(item => (
        item.id === action.id
          ? { ...item, name: action.name }
          : item
      ))
      saveData({columns: list});
      return list;
    case 'DELETE_COLUMN':
      list = [...state];
      for (let i = 0; i < list.length; ++i) {
        if (list[i].id === action.id) {
          list.splice(i, 1);
          saveData({columns: list})
          break;
        }
      }
      return list;
    default:
      return state;
  }
}

export default columns;