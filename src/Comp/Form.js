import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { BiBlock, BiPlusCircle, BiUpArrowCircle} from "react-icons/bi";
import { TodoContext } from "../Context/TodoProvider";

const Form = () => {
  const {dispatch, editFlag, textToEdit} = useContext(TodoContext)

  const [text, setText] = useState('')
  const handleSubmit = (e) => { 
    e.preventDefault();
    const newTodo = {id: nanoid(), text, isChecked: false}
    //use our context with - create or pass an obj with any custom properties you want
    dispatch({type: "ADD_TODO", payload: newTodo}) //or newTodo:newTodo})
    //clear input
    setText('')
  }

  useEffect(() => {
    setText(textToEdit)
  }, [textToEdit])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type something...' required/>
      </div>
      <button className="btn" type="submit">{!editFlag ? <BiPlusCircle /> : <BiUpArrowCircle/>}</button>
      {editFlag && <button className="btn" type="button" ><BiBlock /></button>}
    </form>
  )
}

export default Form