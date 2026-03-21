"use client";

import { useState } from "react";
import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { post } from "@/lib/api";
import ContactUs from "@/assets/images/sections/home/contact/contact-gif.gif";

// ✅ Static data (safe outside component)
const contactInfo = [
  {
    icon: <FaRegMessage size={16} />,
    text: "support@technodha.com",
  },
  {
    icon: <IoCallOutline size={16} />,
    text: "+91 9297622622",
  },
  {
    icon: <CiLocationOn size={16} />,
    text: "Vapi, Gujarat",
  },
];

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: null, text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });
    try {
      await post("contact", {
        name: form.name,
        email: form.email,
        mobile: form.phone,
        message: form.message,
      });
      setStatus({
        type: "success",
        text: "Message sent! We'll get back to you soon.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        text: err.message || "Failed to send. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 page-wrapper">
        {/* Left glow */}
        <div className="left-circle top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Right glow */}
        <div className="left-circle top-1/2 right-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1230px] px-[15px] m-auto">
          <div className="flex flex-col xl:flex-row gap-18 items-center">
            {/* LEFT SIDE */}
            <div>
              <span className="bg-linear-to-r from-[#FB6557] to-[#FE9139] bg-clip-text text-transparent text-sm font-medium">
                BRIEF US IN 60 SECONDS
              </span>

              <h2 className="heading-primary mt-2">
                We’ll
                <span className="italic text-[#FB6557] mx-2">reply</span>
                with the next
                <span className="italic text-[#FE9139] mx-2"> step</span>
              </h2>

              <p className="text-support mt-3 max-w-2xl">
                No long forms, no confusion. Share what you need—we’ll come back
                with clarity, options, and timelines.
              </p>

              {/* FORM */}
              <form
                className="flex flex-col gap-4 mt-10"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-146.25 h-11 rounded-xl border border-(--light-color-border) bg-white text-black px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-146.25 h-11 rounded-xl border border-(--light-color-border) bg-white text-black px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full lg:w-146.25 h-11 rounded-xl border border-(--light-color-border) bg-white text-black px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full lg:w-146.25 h-38.5 rounded-xl border border-(--light-color-border) bg-white text-black px-5 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-300"
                />

                {status.text && (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.text}
                  </p>
                )}

                <GradientButton
                  type="submit"
                  text={loading ? "Sending…" : "Send Message"}
                  className="w-full lg:w-146.25 px-5 py-3"
                  disabled={loading}
                />
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col">
              <Image
                src={ContactUs}
                alt="Contact illustration"
                priority={false}
              />

              <div className="text-[13px] text-[#5F5F6B] mt-4">
                {contactInfo.map((item) => (
                  <div key={item.text} className="flex gap-2 mt-2">
                    <div className="w-6 h-6 flex justify-center text-(--light-color-secondary)">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
