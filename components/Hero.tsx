import Image from "next/image";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[5vh]">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi ,I'M <span className="text-yellow-400">Muhammet</span>
            <TextEffect />
          </h1>
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
          I am a full-stack web developer with expertise in HTML, CSS, SASS, JavaScript, React, TypeScript, Node.js and MongoDB. I have projects on creating both front-end and back-end dynamic and responsive user interfaces, as well as databases using SQL and NoSQL. I am good at implementing intuitive user logic based on end-to-end solutions. I maintain a holistic approach to web development, staying up to date on emerging technologies and adapting to project requirements.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/data/Muhammet_Solmaz.pdf" download="MUhammet_SOLMAZCV.pdf">
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Dowland Cv </p>

                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>
            <button className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]">
              <PlayCircleIcon className="w-[4rem] h-[4rem]" />
              <p className="text-[20px] text-white">Watch The Video</p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-black relative lg:flex items-center rounded-full h-[590px] ">
          <Image
            src="/images/son1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
