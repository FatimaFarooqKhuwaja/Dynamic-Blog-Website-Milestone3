import React from 'react'
import Hero from './component/Hero'
import About from "./About/page"
import Blog from "./Blog/page"
import FAQ from "./FAQ/page"
import CommentSection from './component/Comment'
import Contact from "./Contact/page" 

const home = () => {
  return (
  <>
<Hero />
<About/>
<Blog/>
<FAQ/>
<CommentSection />
<Contact />
  </>
  )
}

export default home
