import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
 import { toggleMenu } from "../utils/appSlice";
import { _NEVER } from "@reduxjs/toolkit/query";

// import { toggleMenu } from "../utils/appSlice";


// import { useDispatch } from "react-redux";

const Head = () => {

  const [searchQuery,setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions,setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    /**
     * Make an API call after every key press
     * but if the difference between 2 api call is less than 200 millisec
     * decline the API call
     */
    const timer = setTimeout(()=>{
      getSearchSuggestion();
    },200)

    return ()=>{
      clearTimeout(timer);
    }

    
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    
    try {
      const data = await fetch("http://localhost:3001/suggest?q="+ searchQuery);
      const json = await data.json();
      setSuggestions(json);
      console.log("Suggestions:", json);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
    console.log(searchQuery);

  };

  /**
   * HOW IT IS WORKING
   * 1.If I press i
   * 2. It will render the component
   * 3. It will call use Effect
   * 4. and Start a timer=> make api call after 200ms
   * 
   * 5. Suppose if i write ip
   * 6. It will destroy the component useeffect return method
   * 7.It will re render the component
   */
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
        <div className="relative">
        <input
          className="border border-gray-400 w-3/5 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 px-6 rounded-r-full bg-gray-100">
          <i className="fa-solid fa-magnifying-glass text-[1.2rem]"></i>
        </button>
        </div>

          {searchQuery && showSuggestions && <div className="fixed bg-white px-8 py-2 w-[36rem] border border-gray-100 rounded-lg shadow-lg z-50">
            <ul>
              {suggestions.map((s)=><li key={s} className="py-3 border-b  border-b-gray-200 hover:bg-gray-100 "><i className="fa-solid fa-magnifying-glass "></i>
                <span className="px-4 font-bold">{s}</span></li>)}

            </ul>
          </div>}

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
