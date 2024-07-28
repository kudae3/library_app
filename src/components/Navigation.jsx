import { Link, useNavigate } from "react-router-dom"
import profile from '../assets/Billie_Eilish_profile.jpeg'
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext";


function Navigation() {

  let navigate = useNavigate()

  let [key, setKey] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate('/?search='+key)
  }

  let {isDark, changeTheme} = useContext(ThemeContext)

  return (
    <div className={`p-4 ${isDark ? 'border-b-0' : 'border-b-2'}`}>
        <ul className="flex justify-around items-center max-w-6xl mx-auto">
            
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${isDark ? 'text-white': ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <form onSubmit={handleSubmit}>
                <input value={key} onChange={(e)=>setKey(e.target.value)} type="search"  placeholder="search..." className={`outline-none ${isDark ? 'bg-slate-800 text-slate-300' : ''}`}/>
              </form>
            </li>
            
            <Link to='/' className="flex justify-center items-center space-x-2 text-primary font-bold text-3xl md:mr-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              <span className="hidden md:block">
                Book Store
              </span>
            </Link>
            
            <Link to="/create" className="flex items-center space-x-2">
                <button className="bg-indigo-600 text-white font-semibold rounded-lg p-2 flex items-center space-x-1">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  <span className="hidden md:block">Create Book</span>
                </button>
            </Link>

            <div className="w-11">
              <img src={profile} className="w-full rounded-full" alt="" />
            </div>

            <div className="flex justify-center items-center">
              { isDark && 
                <button onClick={()=>changeTheme('light')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </button>}
              { !isDark && 
                <button onClick={()=>changeTheme('dark')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </button>}
            </div>
        
        </ul>
    </div>
  )
}

export default Navigation
