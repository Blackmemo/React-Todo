import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
            onChange={props.handleChanges}
            type="text"
            name="task"
            value={props.task}
            placeholder="Todo"
            />
            <div className="btns">
            <button onClick={props.addNewTodo}>Add Todo</button>
            <button>Clear Completed</button>
            </div>
        </form>
    );
};

export default TodoForm;