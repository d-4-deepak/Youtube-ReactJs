import React from "react";
import Button from "./Button";
import { _NEVER } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

const ButtonList = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    const itemList = [
      "Flex", "All", "Gaming", "Songs", "Live", "Soccer", "Songs", "Cricket",
      "Cooking", "News", "Flex", "All", "Gaming", "Songs", "Live", "Soccer", "Flex", "All", "Gaming", "Songs", "Live", "Soccer","Flex", "All", "Gaming", "Songs", "Live"
    ];
  
    return (
      <div className={`w-full  mt-18  ${isMenuOpen?`ml-60`:`ml-0`}`}>
      <div className="flex overflow-x-auto whitespace-nowrap space-x-3 px-4 py-2 scrollbar-hide no-scrollbar">
        {itemList.map((item, idx) => (
          <button
            key={idx}
            className="shrink-0 bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-lg text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  
    );
  };
  

export default ButtonList