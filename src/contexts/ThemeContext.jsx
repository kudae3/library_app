/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export let ThemeContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_MODE':
      return ({...state, theme: action.payload});  
    default:
      return state;
  }
};


export let ThemeContextProvider = ({children}) => {

  let [state, dispatch] = useReducer(reducer, {theme: 'light'});

  // action -> type + payload2
  let changeTheme = (theme) => {
    dispatch({type: 'SWITCH_MODE', payload: theme})
  }

  let isDark = state.theme === 'dark';

  return (
    <ThemeContext.Provider value={{isDark, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

