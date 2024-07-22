import { useState } from "react"

function Create() {

  let [password, setPassword] = useState();
  let [description, setDescription] = useState();
  let [category, setCategory] = useState();

  return (
      <form className="w-full max-w-lg mx-auto">

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input value={password} onChange={e=> setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="title..." />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description 
            </label>
            <textarea value={description} onChange={e=> setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="description..." />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Categories
            </label>
            
            <div className="flex space-x-2 items-center">
              <input value={category} onChange={e=> setCategory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="category..." />
              <button className="bg-blue-400 font-bold text-white p-2 rounded-md mb-3 hover:bg-blue-600 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
              </button>
            </div>
          
          </div>
        </div>

        <div>
          <button className="text-white font-bold text-center bg-green-400 rounded-lg w-full py-3 hover:bg-green-700 duration-300">Create</button>
        </div>
        
      </form>
  )
}

export default Create
