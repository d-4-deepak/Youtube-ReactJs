import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router";
const Body = ()=>{
    return(
        <div className="flex ">
            <Sidebar/>
            {/* <MainContainer/>
            <watchpage/> outlet is used to make it dynamic based on the requirement */}
            <Outlet/>
        </div>
    )
}

export default Body