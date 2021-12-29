import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { BlogCard } from "../";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/blog/featured");
        setFeaturedBlog(res.data[0]);
      } catch (err) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/blog");
        setBlogs(res.data);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

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

  const renderBlog = () =>
    shuffle(blogs).map((t) => (
      <BlogCard
        key={t.title}
        category={t.category}
        title={t.title}
        month={t.month}
        day={t.day}
        excerpt={t.excerpt}
        slug={t.slug}
        thumbnail={t.thumbnail}
        chapter={t.chapter}
        sub_chapter={t.sub_chapter}
        chapter_title={t.chapter_title}
      />
    ));

  return (
    <section className="grid grid-cols-1 gap-8 mt-6 text-black mb-10 ">
      {renderBlog()}
    </section>
  );
};

export default BlogList;
