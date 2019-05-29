import React from 'react';

class TodoForm extends React.Component {
   


taskChange = event => {
    this.setState({newTask: event.target.value})
}

return (
    <form>
        <input placeholder="Enter task here" 
            onChange={taskChange} />
    </form>
    <button>Enter</button>
    <button>Clear</button>
    )
}



export default TodoForm