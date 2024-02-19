import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[4rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[20rem] items-center ">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
            I am a full-stack web developer with a comprehensive skill set covering both front-end and back-end technologies. I am proficient in HTML, CSS,SASS, JavaScript,React,TS - Node.js and MongoDB to create dynamic and responsive user interfaces Database management experience using SQL and NoSQL databases with server-side languages such as I am committed to providing end-to-end solutions, whether it is designing intuitive user experiences or implementing powerful server-side logic. I take a holistic approach to web development with a keen interest in staying up-to-date on emerging technologies. "I like to work for the requirements.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Dowland Cv </p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative ">
          <Image
            src="/images/about.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain "
          />
          {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[2rem] "></div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
