"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  // ✅ Navbar scroll hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <>
      {/* 🔥 FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col justify-between bg-white transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl"
        >
          <HiX />
        </button>

        {/* NAV LINKS */}
        <div className="flex flex-1 items-center justify-center px-4">
          <nav className="flex flex-col md:flex-row gap-6 md:gap-16 items-center">
  {["HOME", "ABOUT", "SERVICES", "CONTACT", "CAREER"].map((item) => (
    <Link
      key={item}
      href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
      onClick={() => setMenuOpen(false)}
      className="
        text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px]
        font-bold text-text-primary hover:text-primary
      "
    >
      {item}
    </Link>
  ))}
</nav>
        </div>

        {/* CENTER IMAGE */}
       <div className="hidden md:flex justify-center">
  <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full bg-border flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Image src="/illustration.png" alt="center" width={120} height={120} />
  </div>
</div>

        {/* BOTTOM BAR */}
    <div className="bg-primary text-white px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
  <div className="flex gap-4 text-lg">
    <span>IG</span>
    <span>IN</span>
  </div>

  <div className="flex gap-4 md:gap-6 text-sm">
    <Link href="/about">ABOUT</Link>
    <Link href="/contact">CONTACT</Link>
    <Link href="/career">CAREER</Link>
  </div>

  <div className="text-sm">support@techindr.com</div>
</div>
      </div>

      {/* 🔝 HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          showNavbar && !menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
<div className="py-4 md:py-5 flex items-center justify-between px-4 md:px-6">          {/* LOGO */}
          <Link href="/">
           <Image
  src="/nav-logo.png"
  alt="Company Logo"
  width={180}
  height={30}
  className="md:w-[230px]"
/>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* TEXT (hide on mobile) */}
           <h1 className="hidden md:block text-sm md:text-base font-medium text-text-primary">
  GET YOUR CUSTOM QUOTE
</h1>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl md:text-2xl bg-primary w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-full flex items-center justify-center"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
