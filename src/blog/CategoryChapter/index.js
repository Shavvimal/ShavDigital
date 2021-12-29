import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Asset2 from "./assets/Asset2.svg";
import Asset3 from "./assets/asAsset 3.svg";
import { BlogNav, CatDropdown } from "../";
import { BlogCard2 as BlogCard } from "../";

const CategoryChapter = (props) => {
  const [blogs, setBlogs] = useState([]);
  let { category } = useParams();
  let { chapter } = useParams();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          `http://localhost:8000/api/blog/categorychapter`,
          { category, chapter },
          config
        );
        setBlogs(
          res.data.sort(function IHaveAName(a, b) {
            return b.sub_chapter < a.sub_chapter
              ? 1
              : b.sub_chapter > a.sub_chapter
              ? -1
              : 0;
          })
        );
      } catch (err) {}
    };

    fetchData();
  }, [chapter]);

  const shuffle = (arr) => {
    let c = arr.length,
      rand;
    while (0 !== c) {
      rand = Math.floor(Math.random() * c);
      c--;
      [arr[c], arr[rand]] = [arr[rand], arr[c]];
    }
    return arr;
  };

  const chapters = () => {
    var lookup = {};
    var items = blogs;
    var result = [];

    for (var item, i = 0; (item = items[i++]); ) {
      var chapter = item.chapter;

      if (!(chapter in lookup)) {
        lookup[chapter] = 1;
        result.push(chapter);
      }
    }
    return result.sort(function (a, b) {
      return a - b;
    });
  };

  const renderBlog = () =>
    shuffle(blogs).map((t) => (
      <BlogCard
        key={t.title}
        category={t.category}
        title={t.title}
        month={t.month}
        chapter={t.chapter}
        sub_chapter={t.sub_chapter}
        chapter_title={t.chapter_title}
        day={t.day}
        excerpt={t.excerpt}
        slug={t.slug}
        thumbnail={t.thumbnail}
      />
    ));

  return (
    <section id="homesect" className="slide1 text-white">
      <div className=" w-full h-full flex  flex-wrap pt-20   ">
        <BlogNav />
        <CatDropdown arrayOfChapter={chapters()} />
        <div className="  h-full w-full pt-4 pb-32 overflow-scroll ">
          {renderBlog()}
        </div>
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

export default CategoryChapter;
