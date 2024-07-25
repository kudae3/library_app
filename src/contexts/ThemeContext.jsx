/* eslint-disable react/prop-types */
import { createContext } from "react"

export let ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={{theme : 'light'}}>
        {children}
    </ThemeContext.Provider>
  )
}

