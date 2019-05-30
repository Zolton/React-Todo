import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  //and any change handlers you need to work with your state
    constructor () {
      super ();
      this.state = {
        task: "Default task message",
      };
      
    }

  render() {
    return (
      <div>
        <h2>{this.task}</h2>
        
          <h2>
          <TodoForm task={this.state.task} newTask={this.newTask} />
          </h2>
      </div>
    );
  }
}


export default App;
