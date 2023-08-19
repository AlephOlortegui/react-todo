const TodoReducer = (state, action) => { 
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload] // or action.newTodo]
      }      
    case "CHECK_TODO":
      return {
        ...state,
        //since we're going to overwrite
        todos: state.todos.map(todo => {
            if(todo.id === action.payload){
              // Create a new object with the updated isChecked property
              return {
                ...todo,
                isChecked: !todo.isChecked
              }
            }
            return todo
        })
      }
    case "EDIT_CONFIG":
      return {
        ...state,
        editFlag: !state.editFlag,
        textToEdit: action.payload.text,
        editID: action.payload.id 
      }
    case "DELETE_TODO":
      return {
        ...state,
        //since we're going to overwrite
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case "DELETE_ALL":
      return{
        ...state,
        todos: []
      }
    default:
      return state
  }
 }

export default TodoReducer