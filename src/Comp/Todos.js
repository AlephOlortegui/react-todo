import { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";
import TodoList from "./TodoList";
import AlertMsg from "./AlertMsg";

const Todos = () => {
  const {todos} = useContext(TodoContext)
  return (
    <ul className="todos">
      {todos.length > 0 ? (
          todos.map(todo => (
            <TodoList key={todo.id} {...todo}/>
          ))
        ) : (
          <AlertMsg />
        )
      }
    </ul>
  )
}

export default Todos