import React from 'react';

const Todo = props => {
  return <div className="item">{props.todo.task}</div>
}

export default Todo;