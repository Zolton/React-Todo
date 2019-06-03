import React from "react"

//displays the task key of whatever it's passed
function Todo (props) {
    return (
        <div
        onClick={e=>props.toggleTask(props.task.id)}
        style={props.task.completed ? {textDecoration: 'line-through', color: "black"} : null}
        >
            <p>{props.task.phrase}</p>

        </div>
    )
}

export default Todo