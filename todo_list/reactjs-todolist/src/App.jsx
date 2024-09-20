import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  {/* let todos = [
    'do 100 pushups',
    'study',
    'breathe'
  ] */}

  const [todos, setTodos] = useState([])

    {/* the above is a state var, we use it when we're working with a var which'd be interacted by the user;  
    todos is the name of var, setter func to update the val of that var, we define setter function by setVar
    in this case setTodos and we call useState func (we can keep the arg empty but in this case we know we'll use
    an array*/}

    const [todoValue, setToDoValue] = useState('')

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }


  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todos, toDoIndex) => {
      return toDoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setToDoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }


  return (
    <>
        {/* <h1>{4/4}</h1> */}    {/* we can write js in jsx using {}  */}

        <main>
          <ToDoInput todoValue={todoValue} setToDoValue={setToDoValue} handleAddTodos={handleAddTodos}/>    
          <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>   {/* we're passing this attrib. to child comp.*/}
        </main>

    </>
  )
}

export default App
