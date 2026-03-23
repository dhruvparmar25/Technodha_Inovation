"use client";
import Illustration from "@/assets/images/common/illustration.gif";
import NavBottom from "@/assets/images/common/nav-border.png";
import LinkBorder from "@/assets/images/common/link-border.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import gsap from "gsap";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let tl;

    if (menuOpen) {
      tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 🔥 STEP 1: Circle expand from RIGHT
      tl.fromTo(
        overlayRef.current,
        {
          scale: 0,
          x: 300, // 👉 more right se start
          y: -200, // 👉 top-right feel
          transformOrigin: "top right",
        },
        {
          scale: 26, // 👉 bigger for full cover
          x: 0,
          y: 0,
          duration: 2.2, // 👉 slower
        },
      )

        // 🔥 STEP 2: Content fade (soft entry)
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
          },
          "-=1.2",
        )

        // 🔥 STEP 3: Nav links stagger (cinematic)
        .fromTo(
          navRef.current.children,
          {
            y: 140,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.22, // 👉 slower stagger
            duration: 1.3,
          },
          "-=0.6",
        );
    }

    return () => {
      tl?.kill();
    };
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
        <div
          ref={overlayRef}
          className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary rounded-full"
        />

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col justify-between h-full bg-white"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl"
          >
            <HiX />
          </button>

          <nav
            ref={navRef}
            className="flex flex-col mt-19 lg:flex-row gap-6 items-center justify-center md:gap-10 lg:gap-12 xl:gap-16 h-fit"
          >
            {["HOME", "ABOUT", "SERVICES", "CONTACT", "CAREER"].map((item) => (
              <Link
                key={item}
                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="group flex flex-col items-center"
              >
                {/* TEXT */}
                <span
                  className="
        text-[26px] 
        sm:text-[32px] 
        md:text-[36px] 
        lg:text-[32px] 
        xl:text-[40px]
        font-bold text-text-primary
        transition
        group-hover:text-primary
      "
                >
                  {item}
                </span>

                {/* BORDER IMAGE */}
                <Image
                  src={LinkBorder}
                  alt="border"
          
                />
              </Link>
            ))}
          </nav>

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
            <div className="flex w-8 h-8 gap-3 text-[32px]">
              <a
                href="https://www.instagram.com/technodha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mingcute:instagram-fill" />
              </a>

              <a
                href="https://www.linkedin.com/company/technodha-innovations/posts/?feedView=a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </div>

            <div className="flex gap-4 md:gap-6 text-[13px]">
              <Link className=" hover:text-black" href="/about">
                ABOUT
              </Link>
              <Link className=" hover:text-black" href="/contact">
                CONTACT
              </Link>
              <Link className=" hover:text-black" href="/career">
                CAREER
              </Link>
            </div>

            <a
              href="mailto:support@techindr.com"
              className="text-sm flex justify-center items-center gap-2 hover:underline"
            >
              <Icon icon="ic:sharp-email" />
              support@techindr.com
            </a>
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

            <Link href="/contact">
              <div className="hidden md:flex flex-col items-start cursor-pointer">
                <h1 className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-text-primary">
                  GET YOUR CUSTOM QUOTE
                </h1>

                <Image
                  src={NavBottom}
                  alt="border"
                  className="mt-1 w-full max-w-[180px]"
                />
              </div>
            </Link>

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
