import React from 'react'
export default function Todo({todo,onToggle}) {
    
    function handleToggle(){
        onToggle(todo.id)
    }
    
    return (
        <label >
            <br/>
            <input type= "checkbox" checked={todo.complete} onChange={handleToggle}/>
            {todo.name}
        </label>
    )
}
