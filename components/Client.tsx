import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface Props {
    name:string;
    role:string;
    image:string;
    decs:string;
}

const Client = ({name,role,image,decs}:Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
        <Image src={image} alt="user"  height={100} width={100} objectFit="contain" className="mx-auto mb-[2rem] rounded-full"/>
        <div className="flex items-center mx-auto">
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
        </div>
        <h1 className="'text-[25px] text-white mt-[1rem]">{name} </h1>
        <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">{role} </p>
        <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">{decs}</p>
    </div>
  )
}

export default Client