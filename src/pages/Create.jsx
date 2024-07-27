import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import 'ldrs/superballs'


function Create() {

  let [title, setTitle] = useState();
  let [description, setDescription] = useState();
  let [category, setCategory] = useState();
  let [categoryList, setCategoryList] = useState([]);
  let [loading, setLoading] = useState(false)
  let [titleError, setTitleError] = useState(false)
  let [descriptionError, setdescriptionError] = useState(false)
  let [categoryError, setCategoryError] = useState(false)

  let navigate = useNavigate();

  let AddCategory = () =>{

      if(category == null || category == ""){
        setCategoryError(true)
      }
      else if(categoryList.includes(category)){
        setCategory('');
      }
      else{
        setCategoryList(prev => [...prev, category])
        setCategory('');
      }

  }

  let RemoveCategory = (c) => {
    setCategoryList((prev)=> prev.filter((category) => category !== c ))
  };

  let CreateBook = (e) => {
    
    e.preventDefault();

    {title == null || title == "" ? setTitleError(true) : null}
    {description == null || description == "" ? setdescriptionError(true) : null}

    if (title && description){

      setTitleError(false)
      setdescriptionError(false)
      setLoading(true)

      let data = {
        title, description, categories : categoryList
      }
      axios.post('http://localhost:3000/books', data)
      .then(() => {
        setLoading(false)
        navigate('/')
      }).catch((err) => {
        setLoading(false)
        console.log(err);
      });

    }
    
  }

  return (
      <div className="min-h-screen">
        <form onSubmit={CreateBook} className="w-full max-w-lg mx-auto pt-14">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
              </label>
              <input value={title} onChange={ e => {
                      setTitle(e.target.value)
                      setTitleError(false)
                    }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="title..." />
              { titleError && <p className="text-sm text-red-500 font-semibold">Title field is required!</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Description
              </label>
              <textarea value={description} onChange={e=> {
                  setDescription(e.target.value)
                  setdescriptionError(false)
                }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="description..." />
              { descriptionError && <p className="text-sm text-red-500 font-semibold">Description field is required!</p>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
        
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Categories
              </label>
        
              <div className="flex space-x-2 items-center">
                <input value={category} onChange={e=> {
                  setCategory(e.target.value)
                  setCategoryError(false)
                }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="category..." />
                <button onClick={AddCategory} type="button" className="bg-blue-400 font-bold text-white p-2 rounded-md mb-3 hover:bg-blue-600 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
              </div>
              { categoryError && <p className="text-sm text-red-500 font-semibold">You need to type something!</p>}
              <div className="flex flex-wrap space-x-2">
                  {categoryList && categoryList.map((c, index)=> (
                    <div className="relative" key={index}>
        
                      <p className="bg-orange-400 text-white font-bold text-sm px-2 py-1 rounded-xl w-fit" >{c}</p>
        
                      <div onClick={() => RemoveCategory(c)} className="absolute -top-1 -right-1 rounded-full bg-red-600 text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      </div>
        
                    </div>
                  ))}
              </div>
        
            </div>
          </div>
          <div>
            <button type="submit" className="text-white font-bold text-center bg-green-400 rounded-lg w-full py-3 hover:bg-green-700 duration-300">
              <div className="flex space-x-2 justify-center items-center">
              { loading && <l-superballs
                    size="35"
                    speed="1.4"
                    color="white">
                </l-superballs>}
                <p>{loading ? 'Creating' : 'Create'}</p>
              </div>
            </button>
          </div>
        
        </form>
      </div>
  )
}

export default Create
