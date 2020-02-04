import { Action } from "../type";

const visibleColumn = (state: string = 'default', action: Action) => {
  switch(action.type) {
    case 'SET_VISIBLE_COLUMN':
      return action.columnId
    default:
      return state
  }
}

export default visibleColumn;
