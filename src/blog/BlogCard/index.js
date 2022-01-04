import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  category,
  title,
  month,
  day,
  excerpt,
  slug,
  thumbnail,
  chapter,
  sub_chapter,
  chapter_title,
}) => {
  return (
    <>
      <Link
        to={`/blog/${slug}`}
        className="flex flex-col lg:flex-row w-5/6 lg:w-1/2 mx-auto  shadow-lg rounded-xl lg:hover:scale-105 lg:duration-500  lg:transform lg:transition"
      >
        <div className="w-full  lg:w-6/12 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none overflow-hidden">
          <img
            className="object w-full h-full object-cover "
            src={
              thumbnail ||
              `https://source.unsplash.com/random/?${title
                .split(" ")
                .join(",")}`
            }
            alt=""
          />
        </div>
        <div className="w-full lg:w-6/12 mt-4 lg:mt-0 lg:ml-4 p-4">
          <div className="flex justify-between mb-8 lg:mb-0">
            <div className="text-4xl lg:text-base text-muted">
              {month} {day}
            </div>
            <h2 className="bg-gray-200 px-3 h-min my-auto rounded-full text-4xl lg:text-base text-gray-800 ">
              {category}
            </h2>
          </div>
          <div className="h-3/4 flex flex-col justify-center mt-4">
            <div className=" text-black text-5xl lg:text-2xl  font-bold pr-2 mb-4 lg:mb-0 ">
              {chapter}.{sub_chapter}: {title}
            </div>
            <h3 className="pb-1 lg:pb-2 text-4xl lg:text-base text-gray-500 ">
              Chapter {chapter}: {chapter_title}{" "}
            </h3>
            <p className="leading-normal text-3xl lg:text-lg pt-2 mb-4">
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
