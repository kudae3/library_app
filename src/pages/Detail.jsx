import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import bookImg from '../assets/Book_cover.jpg';
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Detail() {

  let params = useParams()
  let url = 'http://localhost:3000/books/'+params.id

  let{data: book, loading, error} = useFetch(url)

  let {isDark} = useContext(ThemeContext)

  return (
    <div className="max-w-6xl mx-auto ">

      {error && <p>Something Went Wrong...</p>}
      
      {loading && <p>Loading...</p>}
      
      { book && 
        
        <div className="grid grid-cols-2 gap-5">

          <div>
            <img src={bookImg} className={`p-3 border ${isDark ? 'border-0' : ''}`} alt="" />
          </div>

          <div className="space-y-4">
              <h1 className="text-3xl font-semibold">{book.title}</h1>
              
              <div className="flex flex-wrap space-x-2">
                {book.categories && book.categories.map((c, index)=> (
                  <p className="bg-green-500 text-white font-bold text-sm px-2 py-1 rounded-xl w-fit" key={index}>{c}</p>
                ))}
              </div>

              <p className="italic">{book.description}</p>
          
          </div>
        
        </div>
      }
    </div>
  )
}

export default Detail
