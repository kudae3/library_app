/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export let ThemeContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      return ({...state, theme: 'light'});
    case 'DARK_MODE':
      return ({...state, theme: 'dark'})    
    default:
      return state;
  }
}

export let ThemeContextProvider = ({children}) => {

  let [state, dispatch] = useReducer(reducer, {theme: 'light'});

  // action -> type + payload
  let changeTheme = () => {
    if(state.theme == 'dark'){
      dispatch({type: 'LIGHT_MODE'})
    }
    else{
      dispatch({type: 'DARK_MODE'})
    }
  }

  return (
    <ThemeContext.Provider value={{...state, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

