import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { addTodo } from '../../action';
import '../style/addTodo.scss'

const AddTodo = ({ dispatch }: DispatchProp) => {
  let input: HTMLInputElement;
  const handleClick = () => {
    chrome.tabs.create({ url: 'details.html'});
  };
  return (
    <div className="add-todo">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={(node: HTMLInputElement) => {
            input = node
          }}
        />
        <button type="submit">添加</button>
        <button onClick={handleClick}>详情</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);