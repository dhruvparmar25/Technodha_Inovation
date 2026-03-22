"use client";
import Illustration from "@/assets/images/common/illustration.gif";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

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
        data-theme="light"
        className={`fixed inset-0 z-999 flex flex-col justify-between bg-white transition-all duration-500 ${
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
        <div className="flex flex-1 mt-19  justify-center px-4">
          <nav className="flex flex-col lg:flex-row  gap-6 md:gap-10 lg:gap-12 xl:gap-16">
            {["HOME", "ABOUT", "SERVICES", "CONTACT", "CAREER"].map((item) => (
              <Link
                key={item}
                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="
        text-[26px] 
        sm:text-[32px] 
        md:text-[36px] 
        lg:text-[32px] 
        xl:text-[40px]
        font-bold text-text-primary
        hover:bg-gradient-primary
        transition
        text-center
        whitespace-nowrap
        "
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* CENTER IMAGE */}
        <div className="hidden lg:flex justify-center pointer-events-none px-4 md:px-8 ">
          <div
            className="
    w-35 h-35 
    md:w-50 md:h-50 
    lg:w-60 lg:h-60
    rounded-full bg-border 
    flex items-center justify-center 
    absolute top-[60%] left-1/2 
    -translate-x-[70%] -translate-y-1/2
    
  "
          >
            <Image
              src={Illustration}
              alt="center"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
          bg-primary 
          min-h-45 md:min-h-55 lg:h-65
          text-white 
          px-4 md:px-6
          py-4 md:py-[66px]
          flex flex-col md:flex-row 
          items-center md:items-end justify-between 
          gap-4 
          text-center md:text-left
        "
        >
          <div className="flex w-8 h-8 gap-2 text-[32px]">
            <Icon icon="mingcute:instagram-fill" />
            <Icon icon="mdi:linkedin" />
          </div>

          <div className="flex gap-4 md:gap-6 text-[13px]">
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/career">CAREER</Link>
          </div>

          <div className="text-sm flex justify-center items-center gap-2">
            {" "}
            <Icon icon="ic:sharp-email" />
            support@techindr.com
          </div>
        </div>
      </div>

      {/* 🔝 HEADER */}
      <header
        data-theme="light"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          showNavbar && !menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="py-3 md:py-4 lg:py-5 flex items-center justify-between px-4 md:px-6 lg:px-10">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/nav-logo.png"
              alt="Company Logo"
              width={180}
              height={30}
              className="w-35 md:w-45 lg:w-55"
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
            {/* TEXT */}
            <h1 className="hidden md:block text-[12px] md:text-[14px] lg:text-[16px] font-medium text-text-primary">
              GET YOUR CUSTOM QUOTE
            </h1>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
              text-white 
              text-lg md:text-xl lg:text-2xl 
              bg-primary 
              w-9 h-9 
              md:w-10.5 md:h-10.5 
              lg:w-12 lg:h-12 
              rounded-full flex items-center justify-center
            "
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
