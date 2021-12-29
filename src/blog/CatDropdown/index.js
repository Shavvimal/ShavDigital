import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { BlogNav, BlogCard } from "../";

const CatDropdown = ({ arrayOfChapter }) => {
  let { category } = useParams();

  const getChaptersInbetween = () => {
    let list = [];

    arrayOfChapter.slice(0, arrayOfChapter.length - 1).map((t) => {
      return list.push(
        <li className="">
          <Link
            className="bg-custom hover:bg-purple-700 py-2 px-4 block mx-auto whitespace-no-wrap text-center w-full md:w-1/6"
            to={`/blog/category/${category}/${t}`}
          >
            Chapter {t}
          </Link>
        </li>
      );
    });
    return list;
  };

  return (
    <>
      <div className="group z-50 text-base md:text-lg w-full inline-flex justify-center  w-5/6 md:w-2/12 pb-1 pt-2 mx-auto pr-2">
        <button className="bg-dotted text-gray-700 px-8 font-semibold rounded-2xl inline-flex items-center justify-center py-2 border-2">
          <span className="text-white">Sort by Chapter </span>
          <svg
            className="fill-white h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>

        <ul className="absolute hidden w-3/6 md:w-4/6 text-gray-700 pt-14 group-hover:block ">
          <li className="">
            <Link
              className="rounded-t-2xl bg-custom hover:bg-purple-700 mx-auto py-2 px-4 block whitespace-no-wrap text-center w-full md:w-1/6"
              to={`/blog/category/${category}`}
            >
              Clear Filter
            </Link>
          </li>

          {getChaptersInbetween()}

          <li className="">
            <Link
              className="rounded-b-2xl bg-custom hover:bg-purple-700 mx-auto py-2 px-4 block whitespace-no-wrap text-center w-full md:w-1/6"
              to={`/blog/category/${category}/${
                arrayOfChapter[arrayOfChapter.length - 1]
              }`}
            >
              Chapter {arrayOfChapter[arrayOfChapter.length - 1]}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CatDropdown;
