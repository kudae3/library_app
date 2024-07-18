import { Outlet, useLocation } from "react-router-dom"
import Navigation from "./components/Navigation"
import './index.css'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import './style.css'

function App() {
  const location = useLocation()
  return (
    <div className="space-y-3">
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
