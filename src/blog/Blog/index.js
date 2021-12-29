import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import Asset2 from "./assets/Asset2.svg";
import Asset3 from "./assets/asAsset 3.svg";
import { initAnim } from "./assets/animate.js";
import { BlogNav, BlogCard } from "../";

const Blog = () => {
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/blog");
        setFeaturedBlog(res.data[Math.floor(Math.random() * res.data.length)]);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  return (
    <section className="slide1 text-white pt-20">
      <BlogNav />
      <div className=" w-full h-full flex flex-col flex-wrap flex justify-center items-center pb-32 ">
        <p className="mb-4 text-3xl  w-5/6 md:w-4/6 lg:w-1/2 text-center md:text-2xl">
          {" "}
          Welcome to my Blog! Here's a shuffled post to dive straight in:{" "}
        </p>

        <div className="relative flex flex-col  md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-3  border border-white bg-white h-min hover:scale-105 duration-500  transform transition w-5/6 md:w-4/6 lg:w-1/2  pb-2 bg-white">
          <div className="relative  my-auto">
            <img
              src={
                featuredBlog.thumbnail ||
                `https://source.unsplash.com/random/?${featuredBlog.category}`
              }
              className="mx-auto rounded-xl maxhalf "
              alt=""
            />
          </div>

          <div className="px-2 py-1 space-y-2 p-3 flex flex-col ">
            <div className="flex justify-between item-center">
              <p className="text-gray-500 font-medium text-base hidden md:block">
                {featuredBlog.month} {featuredBlog.day}
              </p>
              <div className="bg-gray-200 px-3 h-min my-auto rounded-full text-base text-gray-800 hidden md:block">
                {" "}
                {featuredBlog.category}{" "}
              </div>
            </div>
            <div className="h-full flex flex-col justify-center w-5/6 mx-auto">
              <div className=" text-black text-3xl md:text-2xl font-bold pr-2  ">
                {featuredBlog.title}
              </div>
              <p className="pb-1 md:pb-2 mt-4 text-lg md:text-lg text-gray-500 ">
                {featuredBlog.excerpt}
              </p>
            </div>
            <Link
              to={`/blog/${featuredBlog.slug}`}
              className=" inset-x-0 bottom-0 flex justify-center  bg-custom hover:bg-white border-2 border-white text-xl md:text-base  hover:border-2 hover:border-purple-700 rounded-full w-full max-w-md mx-auto md:w-full p-1 text-gray-100 hover:text-purple-700"
            >
              Read more
            </Link>
          </div>
        </div>
        {/* <div className=" mx-auto flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 h-min ">
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                Join us Now
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your credentials to get access account
                </div>
                    <div className="col-md-6 px-0 text-black">
                            <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                            <p className="lead my-3">{featuredBlog.excerpt}</p>
                            <p className="lead mb-0">
                                <Link to={`/blog/${featuredBlog.slug}`} className=" font-weight-bold">
                                    Continue reading...
                                </Link>
                            </p>
            </div>
            </div> */}
      </div>

      <img
        className="squiggle1 lg:object-cover"
        src={Asset2}
        alt="squiggle line1"
      ></img>
      <img
        className="squiggle2 lg:object-cover"
        src={Asset2}
        alt="squiggle line2"
      ></img>
      <img
        className="dots object-fit lg:transform rotate-90"
        src={Asset3}
        alt="dots"
      ></img>
    </section>
  );
};

export default Blog;
