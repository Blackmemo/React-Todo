import React from 'react';

const Todo = props => {
  return (
    <div 
    className={`item${props.todo.completed ? " completed" : ""}`}
    onClick={() => props.ToggleCompleted(props.todo.id)}
    >
    
    {props.todo.task}
    
    </div>
  );
  }

export default Todo;