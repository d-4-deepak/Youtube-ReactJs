import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-18 left-0 h-[calc(100vh-6rem)] w-60 overflow-y-scroll overflow-x-hidden p-5 shadow-lg bg-gray-200 sidebar-scroll">
      <ul>
        <li className="flex m-3 text-center ">
          <Link to="/"  className={`flex items-center rounded-lg w-full ${
      location.pathname === "/" ? "bg-gray-300 font-semibold p-2" : ""
    }`}>
            <i className="fa-solid fa-house pr-3 mt-1"></i>
            <span className="font-medium">Home</span>
          </Link>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-film pr-3 mt-1"></i>
          <span className="font-medium">Shorts</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-video pr-3 mt-1"></i>
          <span className="font-medium">Subscriptions</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-user pr-3 mt-1"></i>
          <span className="font-medium">You</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-clock-rotate-left pr-3 mt-1"></i>
          <span className="font-medium">History</span>
        </li>
      </ul>

      <hr className="w-96 my-3" />

      <div className="m-3">
        <p className="text-sm">
          Sign in to like videos, comment, and subscribe
        </p>
        <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded font-bold">
          <i className="fa-solid fa-right-to-bracket mr-2"></i>Sign in
        </button>
      </div>

      <hr className="w-96 my-3" />

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-fire pr-3 mt-1"></i>
          <span className="font-medium">Trending</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-bag-shopping pr-3 mt-1"></i>
          <span className="font-medium">Shopping</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-music pr-3 mt-1"></i>
          <span className="font-medium">Music</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-clapperboard pr-3 mt-1"></i>
          <span className="font-medium">Movies</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-tower-broadcast pr-3 mt-1"></i>
          <span className="font-medium">Live</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-gamepad pr-3 mt-1"></i>
          <span className="font-medium">Gaming</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-newspaper pr-3 mt-1"></i>
          <span className="font-medium">News</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-trophy pr-3 mt-1"></i>
          <span className="font-medium">Sports</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-book-open pr-3 mt-1"></i>
          <span className="font-medium">Courses</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-shirt pr-3 mt-1"></i>
          <span className="font-medium">Fashion & Beauty</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-podcast pr-3 mt-1"></i>
          <span className="font-medium">Podcasts</span>
        </li>
      </ul>

      <hr className="w-96 my-3" />

      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
        <li className="flex m-3 text-center">
          <i className="fa-brands fa-youtube pr-3 mt-1"></i>
          <span className="font-medium">YouTube Premium</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-music pr-3 mt-1"></i>
          <span className="font-medium">YouTube Music</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-children pr-3 mt-1"></i>
          <span className="font-medium">YouTube Kids</span>
        </li>
      </ul>

      <hr className="w-96 my-3" />

      <ul>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-gear pr-3 mt-1"></i>
          <span className="font-medium">Settings</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-flag pr-3 mt-1"></i>
          <span className="font-medium">Report history</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-circle-question pr-3 mt-1"></i>
          <span className="font-medium">Help</span>
        </li>
        <li className="flex m-3 text-center">
          <i className="fa-solid fa-comment-dots pr-3 mt-1"></i>
          <span className="font-medium">Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
