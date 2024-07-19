import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function Detail() {

  let params = useParams()
  let url = 'http://localhost:3000/books/'+params.id

  let{data: book, loading, error} = useFetch(url)

  {error && <p>Something Went Wrong...</p>}

  return (
    <div>
      {loading && <p>Loading...</p>}
      { book && 
        <div>
            <h1>Title - {book.title}</h1>
            <h2>{book.description}</h2>
            {book.categories && book.categories.map((c, index)=> (
               <p key={index}>{c}</p>
            ))}
        </div>
      }
    </div>
  )
}

export default Detail
