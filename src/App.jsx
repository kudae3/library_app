import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import './index.css'

function App() {
  return (
    <div className="space-y-3">
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default App
