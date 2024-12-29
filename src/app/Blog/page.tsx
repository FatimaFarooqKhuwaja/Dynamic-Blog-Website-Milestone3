import React from 'react';
import Image from "next/image"
import Link from "next/link";
import {data} from '@/app/data/blog'

const Blogspage = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-[60px] mb-[60px] m-[20px]">
        {data.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
            {/* Updated Header Div with lighter blue color */}
<div>
             <Image
             src={blog.image}
             alt={blog.title}
             width={500}
             height={400}
             className="w-full"
             />
            </div>
            {/* Content Section */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700">{blog.smallText}</p>
              <div className="text-right">
                <Link href={`/Blogs/${blog.slug}`}>
                  <p className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogspage;