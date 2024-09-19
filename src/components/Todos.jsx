import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="p-2">
           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                todos.map(todo => ( 
                  <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                ))
            }
           </ul>
        </div>
    )
}

export default Todos;
