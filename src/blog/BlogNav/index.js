import React from "react";
import { NavLink } from "react-router-dom";

const BlogNav = () => (
  <div className=" w-full h-min flex justify-around text-lg py-2 glow">
    <NavLink
      activeClassName="border-b-2 accentorange "
      className="inline-flex items-center "
      to="/blog/category/Business"
    >
      Business
    </NavLink>
    <NavLink
      activeClassName="border-b-2 accentorange "
      className="inline-flex items-center "
      to="/blog/category/Stocks"
    >
      Stocks
    </NavLink>
    <NavLink
      activeClassName="border-b-2 accentorange "
      className="inline-flex items-center "
      to="/blog/category/Real Estate"
    >
      Real Estate
    </NavLink>
    <NavLink
      activeClassName="border-b-2 accentorange "
      className="inline-flex items-center "
      to="/blog/category/AI"
    >
      Artificial Intelligence
    </NavLink>
  </div>
);

export default BlogNav;
