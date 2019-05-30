import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    tasks: [
      {
        phrase: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        phrase: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ],
    taskInput: ""
  };

  // Takes user input as a value, assigns it as the name 
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Adds new task - task is set to taskInput above, id is random, default completed is false
  addTask = e => {
    e.preventDefault();
    const newTask = {
      phrase: this.state.taskInput,
      id: Date.now(),
      completed: false
    };
   
    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskInput: ""
    });
  };

  // clear button.  Whatever the state is, switch it
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };


  toggleTask = id => {
    console.log(id)
    this.setState(prevTask => {
      return {
        tasks: prevTask.tasks.map(tasks => {
          if (tasks.id === id) {
            tasks.completed = !tasks.completed;
            return tasks;
          }
            else {
              return tasks;
            }
          }
        )
      }
    })
  }

  // markComplete = e => {
  //   e.preventDefault();
  //   this.setState ({
  //     this.state.tasks.completed = true;
  //   })
  // }

  // strikeThrough = e => {
  //   e.preventDefault();
  //   this.setState({
  //     textDecoration: "line-through"
  //   })
  // }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList 
        tasks={this.state.tasks}
        //strikethrough on click
        toggleTask={this.toggleTask}
        />
        <TodoForm
          taskInput={this.state.taskInput}
          changeHandler={this.changeHandler}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
