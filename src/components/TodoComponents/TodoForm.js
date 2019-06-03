import React from "react";

// creat a form
// create an input box, name is taskInput for later hooks, the value is ... hell if I know.
// Take whatever is given to you, find something in it called taskInput, and assign it as the value
// on change, run the function changeHandler
// clear button - on click, run the function clearCompleted

function TodoForm(props) {
  return (
    <form className="form" onSubmit={e => props.addTask(e)}>
      <input
        type="text"
        name="taskInput"
        placeholder="Enter task here"
        value={props.taskInput}
        onChange={e => props.changeHandler(e)}
      />
      <button>Submit</button>
      <button onClick={e => props.clearCompleted(e)}>Clear </button>
    </form>
  );
}

export default TodoForm;
