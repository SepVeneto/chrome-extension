import { combineReducers } from 'redux';

import todos from './todos';
import columns from './columns';
import currentColumnId from './visibleColumn';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  columns,
  visibilityFilter,
  columnId: currentColumnId,
})

export default todoApp;