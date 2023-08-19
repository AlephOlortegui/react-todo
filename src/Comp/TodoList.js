import { useContext } from "react"
import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi"
import { TodoContext } from "../Context/TodoProvider"

const TodoList = ({id, text, isChecked}) => {
  const {dispatch} = useContext(TodoContext)
  const checkTodo  = () => { dispatch({type: "CHECK_TODO", payload: id}) }
  const deleteTodo = () => { dispatch({type: "DELETE_TODO", payload: id}) }
  //console.log(isChecked)
  return (
    <li>
      <button className="checkBtn btn btn-circle"
          onClick={checkTodo}><BiCheck /></button>
      <p className={`text ${isChecked && "liChecked"}`}>{text}</p>
      <button className={`editBtn btn btn-circle ${isChecked && "v-hide"}`}><BiEdit /></button>
      <button className="trashBtn btn btn-circle"
          onClick={deleteTodo}><BiTrashAlt /></button>    
    </li>
  )
}

export default TodoList