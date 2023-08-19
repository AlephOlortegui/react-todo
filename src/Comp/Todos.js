import { BiEdit,BiCheck,BiTrashAlt} from "react-icons/bi";

const Todos = () => {
  return (
    <ul className="todos">
      <li>
        <button className="checkBtn btn btn-circle"><BiCheck /></button>
        <p className="text">Create a BikeShop simple website</p>
        <button className="editBtn btn btn-circle"><BiEdit /></button>
        <button className="trashBtn btn btn-circle"><BiTrashAlt /></button>    
      </li>
      <li>
        <button className="checkBtn btn btn-circle"><BiCheck /></button>
        <p className="text">Checkout the basics of Redux</p>
        <button className="editBtn btn btn-circle"><BiEdit /></button>
        <button className="trashBtn btn btn-circle"><BiTrashAlt /></button>    
      </li>
      <li>
        <button className="checkBtn btn btn-circle"><BiCheck /></button>
        <p className="text">Read about authentication in Express JS</p>
        <button className="editBtn btn btn-circle"><BiEdit /></button>
        <button className="trashBtn btn btn-circle"><BiTrashAlt /></button>    
      </li>
    </ul>
  )
}

export default Todos