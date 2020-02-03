import { combineReducers } from 'redux';

import todos from './todos';
import columns from './columns';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  columns,
  visibilityFilter
})

export default todoApp;