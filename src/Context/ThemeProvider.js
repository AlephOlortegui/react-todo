import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => { 
  switch (action.type) {
    default:
      return state;
  }
}

export const ThemeProvider = ({children}) => { 
  const [isDark, dispatch] = useReducer(ThemeReducer, false)
  return (
    <ThemeContext.Provider value={{isDark}}>
      {children}
    </ThemeContext.Provider>
  )
}