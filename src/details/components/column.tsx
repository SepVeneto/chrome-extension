import React from 'react';
import { DispatchProp, connect } from 'react-redux';
import { addColumn } from '../../action';

const Column = ({ dispatch }: DispatchProp) => {
  return (
    <div className="todo-column">
      <ul>
        
      </ul>
      <div
        onClick={() => dispatch(addColumn(new Date().getTime().toString()))}
      >add</div>
    </div>
  )
}

export default connect()(Column);