import React, { useEffect, useRef } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { finalAnim } from "./assets/animate.js";
import "./style.css";
import logo from "./assets/favicon.png";

const Aside = () => {
  let animHeader = useRef(null);

  useEffect(() => {
    finalAnim(animHeader);
  }, []);

  let toloc = (id) => {
    window.location.hash = id;
  };

  return (
    <nav
      className="animHeader"
      ref={(el) => (animHeader = el)}
      id="navtrans"
      className=" lg:flex items-center justify-between w-12 bg-white h-64 my-auto rounded-r-3xl p-1 bg-white shadow-md border md:visible hidden py-10"
    >
      <div className="flex items-center  justify-center flex-col">
        <img
          className=" w-5 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-white focus:ring-indigo-400 focus:ring-offset-white focus:ring-offset-2"
          src={logo}
          alt="Shav-logo"
        />
      </div>

      <div className="flex items-center justify-center mt-2 flex-col">
        <NavLink exact smooth to={"/#"} activeClassName="current">
          <button className="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-1 focus:ring-blue-400 focus:ring-offset-white focus:ring-offset-2"></button>{" "}
        </NavLink>
      </div>

      <div className="flex items-center justify-center mt-2 flex-col">
        <NavLink href="#" activeClassName="current" smooth to={"/#AboutSect"}>
          <button className="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-2 focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"></button>{" "}
        </NavLink>
      </div>

      <div className="flex items-center justify-center mt-2 flex-col">
        <NavLink activeClassName="current" smooth to={"/#Techsect"}>
          <button className="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-3 focus:ring-purple-600 focus:ring-offset-white focus:ring-offset-2"></button>{" "}
        </NavLink>
      </div>

      <div className="flex items-center justify-center mt-2 flex-col">
        {" "}
        <NavLink activeClassName="current" smooth to={"/#portfoliosect"}>
          <button className="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-4 focus:ring-pink-400 focus:ring-offset-white focus:ring-offset-2"></button>{" "}
        </NavLink>
      </div>

      <div className="flex items-center justify-center mt-2 flex-col">
        {" "}
        <NavLink activeClassName="current" smooth to={"/#contactsect"}>
          <button className="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-indigo-400 hover:text-white  focus:outline-none focus:ring bg-5 focus:ring-yellow-400 focus:ring-offset-white focus:ring-offset-2"></button>{" "}
        </NavLink>
      </div>
    </nav>
  );
};

export default Aside;
