"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
        const [scrolled, setScrolled] = useState(false);

            useEffect(() => {
                const onScroll = () => setScrolled(window.scrollY > 10);
                window.addEventListener("scroll", onScroll);
                return () => window.removeEventListener("scroll", onScroll);
            }, []);
    
  return <>
  <heade  data-theme="light"    className={`fixed top-0 w-full z-50 transition-all duration-300  ${scrolled ? "bg-text-primary" : "bg-transparent"
                }`}>

  </heade>
  </>;
};

export default Navbar;
