import React from 'react';
import { useParams } from 'react-router-dom';
import { blogCardDb } from '../db';

const BlogDetail = () => { 
  const { id } = useParams();
  const blogPost = blogCardDb[id];

  if (!blogPost) {
    return <p>Blog card not found.</p>;
  }

  return (
    <div className="md:mt-36 mt-14 lg:w-[1000px] mx-auto bg-gray-100 rounded-lg shadow-md p-4 flex flex-col md:flex-row">
      {/* Image section */}
      <img src={blogPost.image} alt="Blog Post" className="w-full md:w-1/2 rounded-lg mb-4 md:mr-10" />
      
      {/* Text section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
        <div className="flex items-center mb-4">
          <img src={blogPost.icon} alt="Icon" className="h-8 mr-2" />
          <span className="font-semibold">{blogPost.date}</span>
        </div>
        <p className="text-xl font-bold mb-4">{blogPost.heading}</p>
        <p className="text-lg mb-4">{blogPost.description}</p>
        {/* Additional blog post details */}
      </div>
    </div>
  );
};

export default BlogDetail;