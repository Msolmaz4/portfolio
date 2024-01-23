import { Bars3Icon } from "@heroicons/react/16/solid"
interface Props {
  openNav:()=>void;
}

const Navbar = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[150] top-0 h-[12vh] bg-[#141c27] shadow-md ">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">WEB <span className="text-white">SOL</span> </h1>

            <div className="nav_link">Services</div>
            <div className="nav_link">ABOUT</div>
            <div className="nav_link">PROJECT </div>
            <div className="nav_link">BLOG</div>
            <div className="nav_link">CONTACT</div>
            <div className="nav_link">Home</div>
            
             </div>
             <div onClick={openNav} > <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/></div>
             
      </div>
  )
}

export default Navbar