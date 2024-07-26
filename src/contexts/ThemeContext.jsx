/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export let ThemeContext = createContext();

let themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {...state, theme: action.payload}  
    default:
      return {state};
  }
}

export const ThemeContextProvider = ({children}) => {

  let [action, dispatch] = useReducer(themeReducer, {'theme': 'light'});

  let changeTheme = () => {
    dispatch({type: 'CHANGE_THEME', payload: 'dark'})
  }

  return (
    <ThemeContext.Provider value={{...action, changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

