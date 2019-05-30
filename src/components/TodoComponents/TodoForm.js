import React from 'react';

//class TodoForm extends React.Component {
   
const userForm = props => {
    return (
        <form>
            <input placeholder="Enter task here" onChange={() => taskChange()) />
        </form>
    )
}


taskChange = event => {
    this.setState({task: event.target.value})
}

// render () {
// return (

//     <div>
//         <form>
//          <input placeholder="Enter task here" onChange={this.newTask}/>
//         </form>
//         <button onClick={taskChange}>Enter</button>
//         <button>Clear</button>
//     </div>
//     )
// }
// }

export default TodoForm