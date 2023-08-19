import { createContext, useReducer } from "react"
import TodoReducer from "../reducer/TodoReducer"

const initialState = {
  todos : [],
  editFlag: false,
  editID: '',
  textToEdit: ''
}

export const TodoContext = createContext()

export const TodoProvider = ({children}) => { 
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      editFlag: state.editFlag,
      editID: state.editID,
      textToEdit: state.textToEdit,
      dispatch
    }}>
      {children}
    </TodoContext.Provider>
  )
}