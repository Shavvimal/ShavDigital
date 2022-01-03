import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  let { slug } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://shavbackend.herokuapp.com/api/blog/${slug}`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const createBlog = () => {
    return { __html: blog.content };
  };

  return (
    <section id="homesect" className="slide1 text-white">
      <div className=" w-full h-full flex  flex-wrap pt-20   ">
        <div className=" h-full w-full pt-4 pb-8 overflow-scroll ">
          <div className=" w-1/2 mx-auto">
            <div className="relative pt-[45%]  rounded-2xl">
              <img
                className="w-4/6 mx-auto h-full rounded-2xl absolute inset-0 object-cover"
                src={`${blog.thumbnail}`}
                onError={(e) => {
                  e.target.src = `https://source.unsplash.com/random/?${blog.title
                    .split(" ")
                    .join(",")}`;
                }}
                alt={`${blog.title} Blog Image`}
              />
            </div>
          </div>

          <article className=" -mt-16 max-w-prose bg-white px-20 rounded-2xl text-black mx-auto py-8 ">
            <div className="h-16"> </div>
            <h2 className="mt-2 text-sm text-gray-500 text-center">
              Published in {blog.category}, {blog.month} {blog.day}
            </h2>
            <h1 className="text-3xl font-bold text-center ">
              {blog.chapter}.{blog.sub_chapter}: {blog.title}
            </h1>
            <h2 className=" text-sm mt-1 text-gray-500 text-center">
              Chapter {blog.chapter}: {blog.chapter_title}
            </h2>

            <p
              className="mt-6 text-lg"
              dangerouslySetInnerHTML={createBlog()}
            />
            <br></br>
            <p className="lead mb-5 flex items-center justify-between">
              <Link
                to={`/blog/category/${blog.category}`}
                className="text-lg flex items-center "
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  className="mr-2"
                >
                  <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                </svg>
                Back to All {blog.category}
              </Link>

              <Link
                to={`/blog/category/${blog.category}/${blog.chapter}`}
                className="text-lg flex items-center "
              >
                View Chapter {blog.chapter}
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  className="ml-2"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </Link>
            </p>
          </article>

          <div className="mt-20 text-white w-auto border-t-2  mx-20 flex flex-row justify-between px-6 lg:px-16 pt-6 text-lg lg:text-sm">
            <p className="mt-3"> © 2022 Shav Vimalendiran </p>
            <svg
              className="w-12 h-12"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <path d="M19.56,11.85l4.24-1.39c-.21-.55-3.28.32-3.81.47a62.26,62.26,0,0,0-7.09,2.59c-1.09.54-2.18,1-3.25,1.63-.41-.42-1.56-.92-1.39-1.82.37-1.9,7.2-6.16,9.83-6.11h0c-.22,1.11-2.25,3-3.33,4l.08.12c1.05.2,4-2.41,4.21-3.16a3.62,3.62,0,0,0-.56-2.66c1.23-.83,3.16-3,1.21-4.5A2.89,2.89,0,0,0,18.29.39C19.49,1,20.23,1.93,19.77,3,19,4.62,16.26,4.69,14.28,5.26A17.89,17.89,0,0,0,7.76,8.71c-.89.73-2.4,2.33-1.71,4,.59,1.43,2.41,2.46,2.67,2.9-1.94.74-7.93,4.31-8.46,6A1.91,1.91,0,0,0,1,23.22c1,.82,3.4,0,4.44-.29,3.06-1,9.05-3.62,4.68-7.2h0C12.87,14.05,16.26,13,19.56,11.85ZM1.26,21.3a35.61,35.61,0,0,1,5.12-3.61l2.38-1.37C8.76,18,2.74,21,1.26,21.3Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
