import React from "react";
import { useDispatch } from "react-redux";
 import { toggleMenu } from "../utils/appSlice";

// import { toggleMenu } from "../utils/appSlice";


// import { useDispatch } from "react-redux";

const Head = () => {

const dispatch = useDispatch();
const toggleMenuHandler = ()=>{
  dispatch(toggleMenu())
}
  return (
    <div className="fixed h-16  w-full grid grid-flow-col p-3 pb-2 mb-4 shadow bg-white ">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mr-2 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />

        <a href="/">
          <img
            className="h-8"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2E5Huc3ioxoXvRVn1phb8yWyk9jOjOWI8Q&s"
          />
        </a>
      </div>
      <div className="col-span-10 ml-60">
        <input
          className="border border-gray-400 w-3/5 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 px-6 rounded-r-full bg-gray-100">
          <i className="fa-solid fa-magnifying-glass text-[1.2rem]"></i>
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
