import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos ,onToggle}) {
  return( 
    todos.map(todo => {
    return <Todo key={todo.id} onToggle= {onToggle} todo={todo} />
  })
  )
}
