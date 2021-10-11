import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [todos, setTodo] = useState([]);
  const toDoRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodo(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddToDo(e) {
    const name = toDoRef.current.value;
    if (name === "") return;
    setTodo((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name, complete: false }];
    });
    toDoRef.current.value = null;
  }
  function onToggle(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodo(newTodos);
  }

  const enterr = evt =>{
    if(evt.key === "Enter")
    {
      handleAddToDo();
    }
  }
  function handleClearComplete() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodo(newTodos);
  }
  return (
    <>
        <p style={{ fontWeight: "bold" }}>TO DO LIST</p>
        <input ref={toDoRef} type="text" onKeyPress={enterr}></input><br/>
        <button onClick={handleAddToDo}>Add</button>
        <div className="wrap">
        <div className="list">
          <ToDoList todos={todos} onToggle={onToggle} />
          <br />
        </div>
        </div>
        <button onClick={handleClearComplete}>Clear Completed</button>
        <br /><br/>
      <div>Tasks Left: {todos.filter((todo) => !todo.complete).length}</div>
    </>
  );
}

export default App;
