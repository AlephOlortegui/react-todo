import { BiPlusCircle} from "react-icons/bi";

const Form = () => {
  return (
    <form>
      <div className="input-container">
        <input type="text" 
            placeholder='Type something...' required/>
      </div>
      <button className="btn" type="submit"><BiPlusCircle /></button>
    </form>
  )
}

export default Form