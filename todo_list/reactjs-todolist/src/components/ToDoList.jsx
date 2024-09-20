import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {  {/* receive the prop. which contains both the child and attrib.*/}

    let {todos} = props 
    {/* we can destructure the exact attrib.*/}

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <ToDoCard {...props} key={todoIndex} index={todoIndex}>  {/* sending the entire props to todo card */}
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
    </ul>
  )
}
