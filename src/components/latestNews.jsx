import React from 'react'
import ComponentWrapper from "../components/resusables/ComponentWrapper";
import BlogCard from "../components/cards/BlogCard";
import { LatestNewsDb } from './db';

const LatestNews = () => {
  return (
        <ComponentWrapper className="my-64">
          <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-8">
            Latest News and Resources
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
            {LatestNewsDb &&
              LatestNewsDb.length > 0 &&
              LatestNewsDb.map((blog) => {
                return (
                  <div key={blog._id}>
                    <BlogCard {...blog} key={blog._id} />
                  </div>
                );
              })}
          </div>
        </ComponentWrapper>
      );
    };
    
export default LatestNews