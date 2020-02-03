export const addTodo = (title: string, content: string = '') => {
  return {
    type: 'ADD_TODO',
    id: new Date().getTime(),
    title,
    content,
  }
};

export const editTodo = (id: number, title: string, content?: string) => {
  return {
    type: 'EDIT_TODO',
    id,
    title,
    content,
  }
}

export const deleteTodo = (id: number) => {
  return {
    type: 'DELETE_TODO',
    id,
  }
}

export const setVisibilityFilter = (filter: string) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
};

export const toggleTodo = (id: number) => {
  return {
    type:'TOGGLE_TODO',
    id,
  }
};

export const addColumn = (name: string) => {
  return {
    type: 'ADD_COLUMN',
    id: `column ${new Date().getTime()}`,
    name,
  }
}