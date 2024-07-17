import HeroSection from "../components/HeroSection"
import BookCover from '../assets/Book_cover.jpg'

function Home() {
  return (
    <>
      <HeroSection/>
      {/* Books List */}
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-3">
        {[1,2,3,4,5].map((item, index)=>(
          <div key={index} className="p-3 border">
            <img src={BookCover} alt="" />
            <div className="text-center space-y-3 pt-3">
              <h1 className="font-bold">Book title</h1>
              <p>description</p>
              
              <div className="flex flex-wrap gap-2">
              {['travelling', 'music', 'education', 'political', 'Religion'].map((item, index)=>(
                  <span key={index} className="bg-green-500 text-white font-bold text-sm px-2 py-1 rounded-xl w-fit">
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>  
    </>
  )
}

export default Home
