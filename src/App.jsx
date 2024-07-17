import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import './index.css'

function App() {
  return (
    <div className="max-w-6xl mx-auto">
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default App
