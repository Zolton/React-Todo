// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class iterateArray extends React.Component {
    
const todosArray = [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    },
    {
      task: "DO THE THING",
      id: 15288170,
      completed: false
    },
    {
      task: "Do the other thing",
      id: 152858,
      completed: false
    }
  ];

render () {
const dataList = todosArray.map(test => {
    return <div>{test.task}</div>
})
}
}
export default TodoList