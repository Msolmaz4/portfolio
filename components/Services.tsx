import { CodeBracketSquareIcon, CommandLineIcon } from "@heroicons/react/16/solid"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"


const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">

<p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">

 My <span className="text-yellow-400">Services</span></p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] rounded-[25px] ">
        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-black "/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Fronted</h1>
        <p className="text-[15px] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aspernatur mollitia explicabo, debitis dolorem neque eius placeat non assumenda minima magnam, quod voluptatem?
        </p>
    </div>
    <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] rounded-[25px]">
        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-black "/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> BACKEND</h1>
        <p className="text-[15px] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aspernatur mollitia explicabo, debitis dolorem neque eius placeat non assumenda minima magnam, quod voluptatem?
        </p>
    </div>
    <div className="bg-[#3f50d5] hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase text-center p-[2rem] rounded-[25px]">
        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-black "/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Fullstack</h1>
        <p className="text-[15px] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aspernatur mollitia explicabo, debitis dolorem neque eius placeat non assumenda minima magnam, quod voluptatem?
        </p>
    </div>
    


 </div>
    </div>
  )
}

export default Services