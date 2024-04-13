import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        
        Pro<span className="text-yellow-400">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
        <a href="https://lengts.onrender.com/" target="_blank" rel="noopener noreferrer">
        
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/ejsso12.gif"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div></a>
        </div>
        <div>
        <a href="https://blog-app-wine-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/blogApi.gif"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div></a>
        </div>
        <div>
        <a href="https://renderfront.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/dashbo.gif"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div></a>
        </div>
        <div>
        <a href="https://master--velvety-hotteok-b5138c.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/Todo.gif"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div></a>
        </div>
        <div>
        <a href="https://fire-base-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/p5.jpg"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div></a>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/p1.jpg"
              alt="user"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
