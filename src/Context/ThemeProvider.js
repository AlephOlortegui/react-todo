import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => { 
  switch (action.type) {
    case 'toggleTheme':
      return !state
    default:
      return state;
  }
}

export const ThemeProvider = ({children}) => { 
  const [isDark, dispatch] = useReducer(ThemeReducer, null, ()=>{
    const LS_theme = localStorage.getItem('theme')
    return LS_theme ? Boolean(LS_theme) : false;
  })
  
  useEffect(() => {
    localStorage.setItem('theme', isDark.toString())
    if(isDark){
      document.querySelector('.App').classList.add('dark')
    }
    else{
      document.querySelector('.App').classList.remove('dark')
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{isDark, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}