import { useContext } from "react"
import { TodoContext } from "../Context/TodoProvider"

const Sect = () => {
  const {dispatch} = useContext(TodoContext)
  const clearAll = () => { 
    dispatch({type: "DELETE_ALL"})
   }
  return (
    <section>
      <p className="counter"><span>3</span> items left</p>
      <div className="filterBox">
        <button className="btn active">All</button>
        <button className="btn">Undone</button>
        <button className="btn">Completed</button>
      </div>
      <div className="corner">
        <button className="btn" onClick={clearAll}>Clear All Items</button>
      </div>
    </section>
  )
}

export default Sect