"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import NavElements from "./NavElements";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);

  return (
    <div>
      <motion.div
        className="fixed left-0 top-0 right-0 h-1 bg-amber-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <MobileNav />
      <div
        className={`z-40 absolute hidden lg:flex items-center justify-center left-0 top-0 right-0  ${isScrolled ? "hidden" : "bg-violet"} text-white h-24`}
      >
        <NavElements />
      </div>
      <div
        className={`z-40 hidden lg:flex fixed  items-center justify-center left-0 top-0 right-0 duration-500  ${
          isScrolled ? "bg-violet translate-y-0" : "bg-sky-950 opacity-0 -translate-y-full"
        } text-white h-24`}
      >
        <NavElements />
      </div>
    </div>
  );
};

export default Navbar;
