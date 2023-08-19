const TodoReducer = (state, action) => { 
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload] // or action.newTodo]
      }      
  
    default:
      return state
  }
 }

export default TodoReducer