import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = ( todo ) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = ( id ) => {
    const nuevosTodos = todos.filter(todo => todo.id !== id)
    setTodos(nuevosTodos)
  }

  const updateTodo = ( id ) => {
    const nuevosTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(nuevosTodos)
  }

  const orderTodo = ( arrayTodos ) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0 
      if (a.priority === true) return -1
      if (!a.priority) return 1
    })
  }
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Formulario addTodo={addTodo}/>
      <Todos 

        todos={orderTodo(todos)}
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo} />
    </div>
 

  

  )
};

export default App