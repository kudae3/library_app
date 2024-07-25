import { Link, useNavigate } from "react-router-dom"
import profile from '../assets/Billie_Eilish_profile.jpeg'
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext";


function Navigation() {

  let navigate = useNavigate();

  let [searchKey, setSearchKey] = useState();

  let handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/?search='+searchKey)
  }

  let {theme} = useContext(ThemeContext)
  console.log(theme);

  return (
    <div className="p-4 border-b-2">
        <ul className="flex justify-around items-center max-w-6xl mx-auto">
            
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <form onSubmit={handleSubmit}>
                <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} type="search"  placeholder="search..." className="outline-none"/>
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
                <div className="w-11">
                  <img src={profile} className="w-full rounded-full" alt="" />
                </div>
            </Link>
        
        </ul>
    </div>
  )
}

export default Navigation
