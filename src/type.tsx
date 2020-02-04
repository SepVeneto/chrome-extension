import { MouseEventHandler, ChangeEvent, ChangeEventHandler } from 'react';

export interface State {
  id: number,
  title: string,
  content: string,
  update: number,
  completed: boolean,
  columnId: string,
};

export interface Action {
  type: string,
  id: number,
  title: string,
  content: string,
  filter: string,
  columnId: string,
}

export interface todo {
  onClick?: ChangeEventHandler,
  onEdit: Function,
  onDelete: Function,
  title: string,
  completed: boolean,
  content: string,
  update: number,
}

export interface Options {
  workTime: string,
  lunchTime: string,
  homeTime: string,
};

export interface Column {
  id: string,
  name: string,
};

export interface Store {
  columns: Array<Column>,
  todos: Array<State>,
  visibilityFilter: string,
  columnId: string,
}