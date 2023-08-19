import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi"

const TodoList = ({id, text, isChecked}) => {
  return (
    <li>
      <button className="checkBtn btn btn-circle"><BiCheck /></button>
      <p className="text">{text}</p>
      <button className="editBtn btn btn-circle"><BiEdit /></button>
      <button className="trashBtn btn btn-circle"><BiTrashAlt /></button>    
    </li>
  )
}

export default TodoList