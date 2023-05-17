import React from 'react'
import { allBlogs } from "../../config/blogs";
// import Category from '../Category/Category';
import BlogItem from './BlogItem/BlogItem';
import './Blogs.css';



const Blogs = ( {blogs} ) => {
  return (
    <div className='blogs-wrapper'>
        {blogs?.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default Blogs