import React from "react";
import Todo from "./Todo";
const Todolist = (props) => {
  console.log(props);
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {props.todos.map((todo) => (
          <Todo text ={todo.text} />
      ))}
      </ul>
    </div>
  );
};
export default Todolist;
