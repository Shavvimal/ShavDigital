import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogCard2 = ({
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
        className="flex flex-col lg:flex-row w-5/6 lg:w-1/2 mx-auto bg-white text-black shadow-lg rounded-xl mb-6 lg:hover:scale-105 lg:duration-500  lg:transform lg:transition "
      >
        <div className="w-full  lg:w-6/12 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none overflow-hidden">
          <img
            className="object w-full h-full object-cover"
            src={
              `${thumbnail}` ||
              `https://source.unsplash.com/random/?${title
                .split(" ")
                .join(",")}`
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://source.unsplash.com/random/?${title
                .split(" ")
                .join(",")}`;
            }}
            alt=""
          />
        </div>

        <div className="w-full lg:w-6/12 mt-4 lg:mt-0 lg:ml-4 p-4 ">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium text-base hidden lg:block">
              {month} {day}
            </p>
            <div className="bg-gray-200 px-3 h-min my-auto rounded-full text-base text-gray-800 hidden lg:block">
              {" "}
              {category}{" "}
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-5/6 mx-auto">
            <div className=" text-black text-5xl lg:text-2xl font-bold pr-2  pb-4 lg:pb-0">
              {chapter}.{sub_chapter}: {title}
            </div>
            <h3 className="pb-1 lg:pb-2 text-4xl lg:text-base text-gray-500 ">
              Chapter {chapter}: {chapter_title}{" "}
            </h3>
            <p className="pb-8 lg:pb-1 lg:pb-2 mt-4 text-3xl lg:text-lg text-gray-500 ">
              {excerpt}
            </p>
          </div>
        </div>

        {/* <div className="w-full lg:w-6/12 mt-4 lg:mt-0 lg:ml-4 p-4">
                            <div className="flex justify-between ">
                                <div className=" text-muted">{month} {day}</div>
                                <h2 className="bg-gray-200 px-3 h-min my-auto rounded-full text-base text-gray-800 ">{category}</h2>
                            </div>
                            <div className="h-5/6 flex flex-col justify-center mt-6">
                                <h2 className="
                                 text-3xl lg:text-2xl font-bold pr-2 
                                leading-tight text-gray-800">{title}</h2>
                                <p className="leading-normal pt-2">{excerpt}</p>
                                <Link to={`/blog/${slug}`} className="leading-normal pt-2 hover:underline bodyheadercol ">Read more...</Link>
                            </div>
                        </div> */}
      </Link>
    </>
  );
};

export default BlogCard2;
