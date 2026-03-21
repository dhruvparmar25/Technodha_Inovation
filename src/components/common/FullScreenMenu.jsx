"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FullScreenMenu() {
  const [open, setOpen] = useState(true); // default open for preview

  return (
    <>
      {/* Toggle Button (for testing) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 text-white bg-black px-4 py-2 rounded"
      >
        Open Menu
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[var(--color-bg)] text-[var(--color-text-primary)]">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white"
          >
            ✕
          </button>

          {/* TOP NAV LINKS */}
          <div className="flex justify-center items-center flex-1">
            <nav className="flex gap-12 text-xl font-semibold tracking-wide">
              {["HOME", "ABOUT", "SERVICES", "CONTACT", "CAREER"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative group"
                >
                  {item}

                  {/* underline effect */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[var(--color-text-primary)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* CENTER CIRCLE IMAGE */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-[var(--color-border)] flex items-center justify-center">
              <img
                src="/illustration.png" // replace with your asset
                alt="illustration"
                className="w-32"
              />
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="bg-[var(--color-primary)] text-white px-8 py-6 flex justify-between items-center">

            {/* LEFT SOCIAL */}
            <div className="flex gap-4 text-lg">
              <Icon icon="mdi:instagram" />
              <Icon icon="mdi:linkedin" />
            </div>

            {/* CENTER LINKS */}
            <div className="flex gap-6 text-sm tracking-wide">
              <a href="#">ABOUT</a>
              <a href="#">CONTACT</a>
              <a href="#">CAREER</a>
            </div>

            {/* RIGHT EMAIL */}
            <div className="text-sm flex items-center gap-2">
              <Icon icon="mdi:email-outline" />
              support@techindr.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}