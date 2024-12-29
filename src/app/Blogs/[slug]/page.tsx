import React from 'react';
import Image from "next/image";
import { data } from '@/app/data/blog';
import Comment from "@/app/component/Comment";

const dynamic = ({ params }: { params: { slug: string } }) => {
  // Find the blog by slug
  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    // Return a 404-like message if blog is not found
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-blue-950 py-3 px-3 font-bold underline mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-700">Sorry, the blog post you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
      {/* Blog Content Section */}
      <div className="flex flex-col sm:flex-row mb-8">
        <div className="flex-1 mb-4 sm:mb-0">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400} // You can adjust the height based on your needs
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 sm:pl-8 text-gray-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      </div>

      {/* Comment Section */}
      <Comment />

      {/* Author Section */}
      <h2 className="text-lg sm:text-xl md:text-2xl mb-[50px] mt-[40px]">
        Written by: <span className="text-blue-950 text-xl sm:text-2xl font-medium underline">{blog.Author}</span>
      </h2>
    </div>
  );
};

export default dynamic;
