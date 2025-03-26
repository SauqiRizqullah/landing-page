"use client";

import { useState } from "react"
import Image from "next/image"
import Sidebar from "./Sidebar";

export default function Navbar(){

    // state ke sideBar
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    }
    return (
        <navbar>
            <div className="flex lg:justify-around justify-between bg-blue-custom pt-2 pb-1 ">
                <div className="roboto text-slate-50 ml-4 lg:pl-0 md:pl-28 pl-20 lg:text-md md:text-md text-sm">
                    <span>TeraFlow</span>
                </div>
                <div className="roboto lg:flex hidden justify-around gap-7 text-xs">
                    <button className="cursor-pointer text-slate-50 transition duration-150 hover:scale-105">HOME</button>
                    <button className="cursor-pointer text-slate-50 transition duration-150 hover:scale-105">PRODUCTS</button>
                    <button className="cursor-pointer text-slate-50 transition duration-150 hover:scale-105">CONTACT</button>
                    <div className="bg-pink-lg py-1 px-2 rounded-full self-center transition duration-150 hover:scale-105 hover:bg-slate-50 hover:text-pink-800 text-slate-50">
                        <button className="cursor-pointer ">ORDER NOW</button>
                    </div>
                </div>
                <div className="lg:hidden pr-24 cursor-pointer">
                    <Image src="/img/menu-hamburger.png" alt="MENU" height={25} width={25} onClick={toggleSidebar}/>
                </div>
            </div>
            <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>
        </navbar>
    )
}