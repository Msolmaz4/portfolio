import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skils from "@/components/Skils";
import { useState } from "react";



export default function Home() {
const [nav,setNav] =useState(false)
const openNav =()=>setNav(true)
const closeNav = ()=>setNav(false)


  return (
    <div className="overflow-x-hidden">
    {/* overflow-x-hidden sınıfı, bir elementin yatay (x ekseni) yönde taşan içeriğini gizler. Bu sınıf, genellikle yatay taşma durumlarını önlemek ve sayfa düzenini düzgün tutmak için kullanılır. */}
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero/>
        <div className="relative z-[125555555555555555555555]">
       <About/>
       <Services/>
       <Skils/>
       <Project/>
        </div>
      </div>

    </div>
  );
}
