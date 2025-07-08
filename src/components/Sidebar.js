import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const Sidebar = ()=>{

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);


    //early return pattern
    if(!isMenuOpen){
        return null;
    }

    return (
        <div className="fixed top-18 left-0 h-[calc(100vh-6rem)] w-60 overflow-y-auto p-5 shadow-lg bg-gray-200 sidebar-scroll">
              <ul>
                <li> <Link to="/">Home</Link> </li>
                <li>Shorts</li>
                <li>Video</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5"> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}
export default Sidebar