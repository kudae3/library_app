import { Link, useLocation } from 'react-router-dom'
import BookCover from '../assets/Book_cover.jpg'
import useFetch from '../hooks/useFetch'
function BookList() {

    let location = useLocation();
    let params = new URLSearchParams(location.search)
    let search = params.get('search');

    let {data : books , loading, error} = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`)

    {error && <p>Something went wrong...</p>}

  return (
    <div>
        {loading && <p>Loading...</p>}
        
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-3">
            
            {books && books.map((book)=>(
            
            <Link  key={book.id} to={`/book/${book.id}`}>
                
                <div className="p-3 border">
                
                <img src={BookCover} alt="" />
                
                <div className="text-center space-y-3 pt-3">
                
                    <h1 className="font-bold">{book.title}</h1>
                    
                    <p className='text-sm font-semibold'>{book.description.substring(0, 70)} ...</p> 
                    
                    <div className="flex flex-wrap gap-2">
                        {book.categories.map((c, index)=>(
                            <span key={index} className="bg-green-500 text-white font-bold text-sm px-2 py-1 rounded-xl w-fit">
                                {c}
                            </span>
                        ))}
                    </div>

                </div>
            
            </div>
            </Link>

            
            ))}
        
        </div>
    
    </div>
  )
}

export default BookList
