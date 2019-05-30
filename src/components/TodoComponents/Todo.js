import React from "react"

//displays the task key of whatever it's passed
function Todo (props) {
    return (
        <div
        style={props.tasks.completed ? {textDecoration: 'line-through', color: "black"} : null}
        >
            <p>{props.task}</p>

        </div>
    )
}

export default Todo