import React from "react"

function TodoForm (props) {
    return (
        <form className = "form" onSubmit={e => props.addTask(e)}>
        <input 
        type="text" 
        name="taskInput"
        placeholder="Enter task here" 
        value={props.taskInput}
        onChange={e=>props.changeHandler(e)}
        />
         <button>Submit</button>
         <button onClick={e=>props.clearCompleted(e)}>Clear </button>
         </form>
    )
}

export default TodoForm