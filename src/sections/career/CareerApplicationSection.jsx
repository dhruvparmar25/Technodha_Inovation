"use client";

import { useState } from "react";
import GradientButton from "@/components/common/GradientButton";
import { postForm } from "@/lib/api";
import { FaRegMessage } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Image from "next/image";
import Careerlogo from "@/assets/images/sections/career/career-logo.png";

const CAREER_CONTACT = [
  { icon: <FaRegMessage size={16} />, text: "support@technodha.com" },
  { icon: <IoCallOutline size={16} />, text: "+91 9297626262" },
];

const inputClass =
  "w-full h-11 rounded-xl border border-(--light-color-border) bg-white text-black px-5 py-3 outline-none focus:ring-2 focus:ring-orange-300";

export default function CareerApplicationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    portfolio_link: "",
    linkedin_profile: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: null, text: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setCvFile(file || null);
    setStatus({ type: null, text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) {
      setStatus({ type: "error", text: "Please upload your CV." });
      return;
    }
    setLoading(true);
    setStatus({ type: null, text: "" });
    try {
      const fd = new FormData();
      fd.append("name", form.name.trim());
      fd.append("email", form.email.trim());
      fd.append("mobile", form.mobile.trim());
      fd.append("position", form.position.trim());
      if (form.portfolio_link?.trim()) fd.append("portfolio_link", form.portfolio_link.trim());
      if (form.linkedin_profile?.trim()) fd.append("linkedin_profile", form.linkedin_profile.trim());
      fd.append("cv", cvFile);

      await postForm("career", fd);
      setStatus({ type: "success", text: "Application submitted! We'll get back to you soon." });
      setForm({
        name: "",
        email: "",
        mobile: "",
        position: "",
        portfolio_link: "",
        linkedin_profile: "",
      });
      setCvFile(null);
      const input = document.querySelector('input[name="cv"]');
      if (input) input.value = "";
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Failed to submit. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-16 flex flex-col lg:flex-row">
      {/* Left – red-orange branding */}
<div
  className="w-full lg:w-[485px] flex flex-col justify-center px-6 xl:px-16 py-16 lg:py-24 bg-gradient-to-br from-[#FB6557] to-[#FE9139]"
>

<Image
  src={Careerlogo}
  alt="TECHNODHA"
  className="w-40 object-contain"
/>
        <h1 className="text-white font-poppi font-semibold text-3xl sm:text-4xl lg:text-[32px]  mt-3.5 italic">
          Let&apos;s Connect — Careers & Support
        </h1>
        <p className="text-white/95 text-[13px] mt-2 max-w-md">
          Questions, collaboration, or job inquiries—we&apos;re here
        </p>
        <div className="mt-6 space-y-2">
          {CAREER_CONTACT.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white">
              <span className="flex items-center justify-center w-5.5 h-5.5 ">
                {item.icon}
              </span>
              <span className="text-[13px] ">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right – form */}
      <div className="w-full lg:w-[716px] bg-white flex flex-col justify-center px-2 xl:px-6 xl:p-[54px] ">
   <div className="heading-primary text-[24px]!" >
         Just   
          <span className="italic text-(--light-color-primary)  mx-2">email</span>.
           your CV—we’d 
          <span className="italic text-(--light-color-secondary) mx-2">
            love
          </span>
          to hear from you
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="grid  -cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Please enter your full name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Please enter a valid email address"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Phone number is required"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Enter the position you're applying for"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
              Portfolio Link (Optional)
            </label>
            <input
              type="url"
              name="portfolio_link"
              value={form.portfolio_link}
              onChange={handleChange}
              placeholder="Please enter a link"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
              LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              name="linkedin_profile"
              value={form.linkedin_profile}
              onChange={handleChange}
              placeholder="Please enter a link"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1a1a1f] mb-1.5">
              Upload CV <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3 flex-wrap">
              <label className="cursor-pointer">
                <span
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #FB6557 0%, #FE9139 100%)",
                  }}
                >
                  Choose File
                </span>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required={!cvFile}
                  className="hidden"
                />
              </label>
              <span className="text-[#5f5f6b] text-sm">
                {cvFile ? cvFile.name : "No file chosen"}
              </span>
            </div>
          </div>

          {status.text && (
            <p
              className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
            >
              {status.text}
            </p>
          )}

          <GradientButton
            type="submit"
            text={loading ? "Submitting…" : "Submit Application"}
            className="w-full sm:w-auto px-8 py-3"
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
}
