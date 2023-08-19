import { useContext } from "react";
import { BiEdit,BiCheck,BiTrashAlt} from "react-icons/bi";
import { TodoContext } from "../Context/TodoProvider";
import TodoList from "./TodoList";
import AlertMsg from "./AlertMsg";

const Todos = () => {
  const {todos} = useContext(TodoContext)
  return (
    <ul className="todos">
      <li>
        <button className="checkBtn btn btn-circle"><BiCheck /></button>
        <p className="text">Create a BikeShop simple website</p>
        <button className="editBtn btn btn-circle"><BiEdit /></button>
        <button className="trashBtn btn btn-circle"><BiTrashAlt /></button>    
      </li>
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