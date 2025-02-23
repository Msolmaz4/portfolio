import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Messa from "@/components/Messa";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skils from "@/components/Skils";
import Testi from "@/components/Testi";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import Scrol from "@/components/Scrol";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      {/* overflow-x-hidden sınıfı, bir elementin yatay (x ekseni) yönde taşan içeriğini gizler. Bu sınıf, genellikle yatay taşma durumlarını önlemek ve sayfa düzenini düzgün tutmak için kullanılır. */}
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <div id="home">
          <Navbar openNav={openNav} />

          <Hero />
          <Scrol />
        </div>

        <div className="relative z-[125]">
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="skills">
            <Skils />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="testimonials">
            <Testi />
          </div>
          <div id="footer">
            <Footer />
          </div>
          <div id="message">
            <Messa />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
