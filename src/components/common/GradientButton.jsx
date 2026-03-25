"use client";
import { Icon } from "@iconify/react";

export default function GradientButton({
  text,
  onClick,
  className = "",
  children,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group flex items-center gap-2 py-2 
      text-4 font-medium text-text-primary
      transition-all duration-300 hover:text-primary
      disabled:opacity-60 disabled:cursor-not-allowed
      ${className}`}
    >
      {text}

      {/* Icon same as your GET IN TOUCH button */}
      <Icon
        icon="fa6-solid:circle-right"
        color="#fe9139"
        className="w-9 h-9 bg-white rounded-full -rotate-45 
        transition-transform duration-300 ease-in-out 
        group-hover:rotate-0 "
      />

      {children}
    </button>
  );
}