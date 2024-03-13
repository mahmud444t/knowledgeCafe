
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [time,setTime]=useState(0);

  const handleBookmark=(blog)=>{
      const newBookmarks=[...bookmarks,blog];
      setBookmarks(newBookmarks);
  }

  const handleRead=(reading_time,id)=>{

    setTime(reading_time+time);
    const remainingBookmarks= bookmarks.filter(bookmark=> bookmark.id!==id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-[1440px] mx-auto gap-6'>
        <Blogs handleRead={handleRead} handleBookmark={handleBookmark}></Blogs>
        <Bookmarks time={time} bookmarks={bookmarks}></Bookmarks>
      </div>  
    </>
  )
}

export default App
