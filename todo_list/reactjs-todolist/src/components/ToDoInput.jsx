import React, { useState } from "react"

export default function ToDoInput(props) {
    const {handleAddTodos, todoValue, setToDoValue} = props

  



      return(
        <div>
            <input value={todoValue} onChange={(e)=>{
                setToDoValue(e.target.value)
            }} placeholder="what'd u like to do...." />
            <button onClick={()=>{
                handleAddTodos(todoValue)
                setToDoValue('') 
                {/* reset the input bar */}
            }}>Add</button>
        </div>
    )
}