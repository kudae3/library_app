import { Outlet, useLocation } from "react-router-dom"
import Navigation from "./components/Navigation"
import './index.css'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import './style.css'
import {  useContext, useEffect } from "react"
import { ThemeContext } from "./contexts/ThemeContext"


function App() {
  const location = useLocation()
  let {isDark} = useContext(ThemeContext)
  
  useEffect(()=>{
    let body = document.body
    if(isDark){
      body.classList.add('bg-slate-800')
    }
    else{
      body.classList.remove('bg-slate-800')
    }
  })
  
  return (
    <div className={`space-y-3 ${isDark ? 'bg-slate-800 text-slate-400 duration-300' : ''}`}>
        <Navigation/>
        <SwitchTransition>
          <CSSTransition timeout={200} classNames="fade" key={location.pathname}>            
              <Outlet/>            
          </CSSTransition>
        </SwitchTransition>
    </div>
  )
}

export default App
