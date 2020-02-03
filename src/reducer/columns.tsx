interface Column {
  id: string,
  name: string,
}

interface Action {
  type: string,
  id: string,
  name: string,
  items: Array<number>,
}

const columns = (state: Array<Column> = [], action: Action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      const {id, name} = action;
      return [
        ...state,
        { id, name, items: [] }
      ];
    default:
      return state;
  }
}

export default columns;