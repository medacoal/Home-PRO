import React from 'react'
import Blogs from '../components/cards/Blogs'
import { Pagination } from '../components/Pagination'
import Footer from '../components/layout/Footer'
import Jumbotron from '../components/Jumbotrun'


const Blog = () => {
  return (
    <div>
    
    <div>
      <div className='md:pt-32 pt-10'>
      <Jumbotron title="Welcome to Our Blog" description="Stay informed with the latest trends, tips, and insights from the world of real estate."/>
      </div>
      <Blogs/>
      <Pagination/>
      <Footer/>
    </div>

    </div>
  )
}

export default Blog