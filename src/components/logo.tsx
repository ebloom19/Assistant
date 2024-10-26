"use client";

import LogoIcon from "@/assets/acedit-logo.svg";

export default function Logo() {
  return (
    <a
      href="https://www.acedit.ai"
      className="hover:opacity-70 transition-all duration-250 my-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoIcon width="86" />
    </a>
  );
}
