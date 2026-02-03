import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ imageUrl, title, description, date, author, _id }) => {
  return (
    <div className="rounded-2xl shadow-md">
      <Link href={`/blogs/${_id}`}>
        <Image
          src={imageUrl}
          alt="blog image"
          width={400}
          height={200}
          className="w-full h-60 object-cover rounded-t-2xl"
        />
      </Link>

      <div className="h-40 bg-amber-100 rounded-b-2xl space-y-2 px-4 dark:bg-gray-700">
        <Link href={`/blogs/${_id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm dark:text-gray-200">
          {description}
        </p>
        <div className="flex justify-between mt-4 text-lg font-medium text-gray-500 dark:text-gray-300">
          <h4>{date}</h4>
          <h4>- {author}</h4>
        </div>
        <div className="flex justify-end text-primary font-medium dark:text-gray-200">
          <Link href={`/blogs/${_id}`} className="hover:underline">
            Read More <span className="text-3xl">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
