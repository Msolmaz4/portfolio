import { Bars3Icon } from "@heroicons/react/16/solid";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[150] top-0 h-[12vh] bg-[#141c27] shadow-md ">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB <span className="text-yellow-400">SOL</span>{" "}
        </h1>

        <div className="nav_link">
          {" "}
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </ScrollLink>
        </div>
        <div className="nav_link">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </ScrollLink>
        </div>
        <div className="nav_link">
          {" "}
          <ScrollLink
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SERVICES
          </ScrollLink>
        </div>
        <div className="nav_link">
          <ScrollLink
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PROJECT
          </ScrollLink>
        </div>
        <div className="nav_link">
          <ScrollLink
            activeClass="active"
            to="message"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT
          </ScrollLink>
        </div>
      </div>
      <div onClick={openNav}>
        <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
      </div>
    </div>
  );
};

export default Navbar;
