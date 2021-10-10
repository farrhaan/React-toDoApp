import React,{useState,useRef} from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodo] = useState([])
  const toDoRef = useRef()
  function handleAddToDo(e){
    const name = toDoRef.current.value
    if(name==='')

  }
  
  return (
    <>
      <ToDoList todos ={todos} />
      <input ref={toDoRef} type="text"></input>
      <button onClick={handleAddToDo}>Add</button>
      <button>Clear Completed</button>
      <div>0 left to dp</div>
    </>
  );
}

export default App;
