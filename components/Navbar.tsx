
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-transparent bg-white">

      <nav className="container-custom flex h-[76px] items-center justify-between">

        {/* LOGO */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-gray-950"
        >
          Tonmoy<span className="text-green">.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-green"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA - HIDDEN ON MOBILE */}
        <Link
          href="#contact"
          className="!hidden !rounded-lg !px-5 !py-3 text-sm md:!inline-flex btn-primary"
        >
          Let's Talk ↗
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-900 transition hover:border-green hover:text-green md:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="font-medium text-gray-700 transition hover:text-green"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              Let's Talk ↗
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
