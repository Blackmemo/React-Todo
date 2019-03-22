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

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

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
