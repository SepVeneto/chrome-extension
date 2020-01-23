import { MouseEventHandler, ChangeEvent, ChangeEventHandler } from 'react';

export interface State {
  id: number,
  title: string,
  content: string,
  update: number,
  completed: boolean,
};

export interface Action {
  type: string,
  id: number,
  title: string,
  content: string,
  filter: string,
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

export interface Store {
  todos: Array<State>,
  visibilityFilter: string,
}