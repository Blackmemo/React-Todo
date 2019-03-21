import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todoItems = [
    {
  task: 'Learn React',
  id: 1528817077286,
  completed: false
    },
    {
      task: 'Stop Crying',
      id: 1528817084358,
      completed: false
    }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoList: todoItems,
      task: ''
    }
  }

  toDoChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewTodo = event => {
    event.preventDefault();

    this.setState({
      todoList: [...this.state.todoList, {task: this.state.task, id: Date.now(), completed: false}
      ],
      task: ''
    });
  };

  toggleCompleted = id => {
    let todoList = this.state.todoList.slice();
    todoList = todoList.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ todoList })
  }

  removeCompleted = event => {
    event.preventDefault();
    let todoList = this.state.todoList.filter(task => !task.completed);
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="main">
      <h1>TO-DO</h1>
        <TodoList
        toggleCompleted={this.toggleCompleted}
        theTodoList={this.state.todoList}
        />
        <TodoForm 
        addNewTodo={this.addNewTodo}
        handleChanges={this.toDoChanges}
        task={this.state.task}
        removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
