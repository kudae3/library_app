import { Link, useLocation } from 'react-router-dom'
import BookCover from '../assets/Book_cover.jpg'
import useFetch from '../hooks/useFetch'
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
function BookList() {

    let {isDark} = useContext(ThemeContext)

    let location = useLocation()
    let params = new URLSearchParams(location.search)
    let search = params.get('search');

    let {data : books , loading, error} = useFetch(`http://localhost:3000/books${ search ? `?q=${search}` : ``}`)

    {error && <p>Something went wrong...</p>}

  return (
    <div>
        {loading && <p>Loading...</p>}
        
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-3">
            
            {books && books.map((book)=>(
            
            <Link  key={book.id} to={`/book/${book.id}`}>
                
                <div className={`p-3 border ${isDark ? 'border-0' : ''}`}>
                
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

        {books && !books.length && <p className='text-center text-slate-500 font-2xl min-h-screen'>No book found!</p>}
    
    </div>
  )
}

export default BookList
