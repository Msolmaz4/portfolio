import Link from "next/link"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Scrol = () => {
  return (
    <div className="scroll">
        <div className="mt-5">
        <a href="https://github.com/Msolmaz4" target="_blank" rel="noopener noreferrer"> <IoLogoGithub size={36} />   </a>
       
        </div><div className="mt-5">

        <a href="https://www.linkedin.com/in/muhammetsolmaz/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={36} />   </a>
        </div>
     
    </div>
  )
}

export default Scrol