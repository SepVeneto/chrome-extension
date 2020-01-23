import { Action } from '../type';
const visibilityFiter = (state: string = 'SHOW_ALL', action: Action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFiter;