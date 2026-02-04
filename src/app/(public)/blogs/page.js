import { getBlogs } from "@/api/blogs";
import BlogCard from "@/components/BlogCard";
import React from "react";

const blogsPage = async () => {
  const blogs = await getBlogs();
  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-center text-4xl font-medium dark:text-white">Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            imageUrl={blog.thumbnailImgUrl}
            description={blog.shortDescription}
            _id={blog._id}
            date={new Date(blog.createdAt).toLocaleDateString()}
            author={blog.user.name}
          />
        ))}
      </div>
    </section>
  );
};

export default blogsPage;
