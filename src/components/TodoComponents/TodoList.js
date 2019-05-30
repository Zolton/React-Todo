// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"
// function Todolist - you'll be given something.  Map thru it, find the tasks, and . . . something.  Hell if I know 
function TodoList (props) {
    return (
        <div>
            
        {props.tasks.map(task => <Todo task={task.task}/>)} 

        </div>
    )

}


export default TodoList