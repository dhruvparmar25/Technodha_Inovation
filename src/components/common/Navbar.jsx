"use client";
import Illustration from "@/assets/images/common/illustration.gif";
import NavBottom from "@/assets/images/common/nav-border.png";
import LinkBorder from "@/assets/images/common/link-border.png";
import DarkLogo from "@/assets/images/common/nav-logo-dark.png";
import LightLogo from "@/assets/images/common/nav-logo-light.png";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // 🔥 MENU ANIMATION
  useEffect(() => {
    let tl;

    if (menuOpen) {
      tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        overlayRef.current,
        {
          scale: 0,
          x: 300,
          y: -200,
          transformOrigin: "top right",
        },
        {
          scale: 26,
          x: 0,
          y: 0,
          duration: 2,
        }
      )
        .fromTo(
          contentRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=1.2"
        )
        .fromTo(
          navRef.current.children,
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
          },
          "-=0.6"
        );
    }

    return () => tl?.kill();
  }, [menuOpen]);

  // 🔥 BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);


useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("[data-theme]");

    let currentTheme = "light";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // 👇 trigger ONLY when section top reaches navbar
      if (rect.top <= 80 && rect.bottom > 80) {
        currentTheme = section.getAttribute("data-theme");
      }
    });

    setTheme(currentTheme || "light");
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
 
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

        <div
          ref={contentRef}
          className="relative z-10 flex flex-col justify-between h-full bg-white"
        >
          {/* CLOSE */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <HiX />
          </button>

          {/* NAV */}
          <nav
            ref={navRef}
            className="flex flex-col mt-20 lg:flex-row gap-6 items-center justify-center"
          >
            {["HOME", "ABOUT", "SERVICES", "CONTACT", "CAREER"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col items-center"
                >
                  <span className="text-3xl font-bold text-text-primary group-hover:text-primary transition">
                    {item}
                  </span>

                  <Image src={LinkBorder} alt="border" />
                </Link>
              )
            )}
          </nav>

          {/* BOTTOM */}
          <div className="bg-primary text-white px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-3 text-2xl">
              <Icon icon="mingcute:instagram-fill" />
              <Icon icon="mdi:linkedin" />
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/about">ABOUT</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/career">CAREER</Link>
            </div>

            <div className="text-sm flex items-center gap-2">
              <Icon icon="ic:sharp-email" />
              support@techindr.com
            </div>
          </div>
        </div>
      </div>

      {/* 🔝 HEADER */}
      <header
        data-theme={theme}
        className={`
          fixed top-0 w-full z-50
          transition-all duration-500 ease-in-out

        
        `}
      >
        <div className="py-4 flex items-center justify-between px-6 lg:px-10">
          {/* LOGO */}
          <Link href="/">
            <Image
  src={theme === "light" ? DarkLogo : LightLogo}
              alt="logo"
              width={180}
              height={30}
              className="transition-all duration-500"
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <Link href="/contact">
              <div className="hidden md:flex flex-col">
                <h1 className="text-sm font-medium text-text-primary transition">
                  GET YOUR CUSTOM QUOTE
                </h1>
                <Image src={NavBottom} alt="border" />
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-primary w-10 h-10 rounded-full flex items-center justify-center"
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