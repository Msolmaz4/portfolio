import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
    nav:boolean;
    closeNav:()=>void
}



const MobileNav = ({nav,closeNav}:Props) => {

     const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 t right-0 bottom-0 z-[2000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav_link-mobile">HOME</div>
        <div className="nav_link-mobile">SERVICES</div>
        <div className="nav_link-mobile">ABOUT</div>
        <div className="nav_link-mobile">PROJECT</div>
        <div className="nav_link-mobile">BLOG</div>
        <div className="nav_link-mobile">CONTACT</div>
      </div>
      <div 
      onClick={closeNav}
      className="absolute cursor-pointer top-[5rem] right-[20rem] h-[10rem]  text-yellow-400">
       
        x
      </div>
    </div>
  );
};

export default MobileNav;
