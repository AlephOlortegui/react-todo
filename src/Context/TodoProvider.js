import { createContext, useReducer } from "react"
import TodoReducer from "../reducer/TodoReducer"

const initialState = {
  todos : []
}

export const TodoContext = createContext()

export const TodoProvider = ({children}) => { 
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      dispatch
    }}>
      {children}
    </TodoContext.Provider>
  )
}