import React from 'react'

export default function ToDoCard(props) {   {/* we recieve child comp. through props (properties of component) */}

    const {children, handleEditTodo, handleDeleteTodo, index} = props    
    {/* gives access to all the children elements */}
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>handleDeleteTodo(index)}><i className="fa-solid fa-trash"></i></button>

            <button onClick={()=>handleEditTodo(index)}><i className="fa-solid fa-pen-to-square"></i></button>
            
        </div>
    </li>
  )
}
