"use client";

import Image from "next/image";
import { Menu, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  "Home",
  "About Us",
  "Find Doctors",
  "Lab Tests",
  "Medical Finance",
  "Health Pocket",
  "Surgeries",
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <nav
          className="container-page flex h-[54px] items-center justify-between sm:h-[70px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/logos/astikan-logo.webp"
              alt="Astikan Healthcare"
              width={188}
              height={52}
              priority
              className="h-auto w-28 sm:w-36 md:w-40"
            />
          </a>

          {/* Desktop + Tablet Navigation */}
          <div className="hidden min-[768px]:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-primary
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              hidden
              min-[768px]:inline-flex
              items-center
              gap-2
              rounded-lg
              bg-gradient-to-r
              from-primary
              to-accent
              px-4
              py-1.5
              text-sm
              font-semibold
              text-white
              shadow-card
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Stethoscope className="h-4 w-4" />
            Login
          </a>

          {/* Mobile Menu Button */}
          <button
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              shadow-sm
              min-[768px]:hidden
            "
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            justify-end
            bg-black/50
            backdrop-blur-sm
            animate-fade-in
            min-[768px]:hidden
          "
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              h-full
              w-[85vw]
              max-w-sm
              bg-white
              border-l
              border-slate-100
              shadow-2xl
              p-5
              flex
              flex-col
              animate-slide-in
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="mb-8 flex items-center justify-between">
              <Image
                src="/logos/astikan-logo.webp"
                alt="Astikan Healthcare"
                width={160}
                height={45}
                className="h-auto w-32"
              />

              <button
                className="
                  inline-flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-slate-200
                "
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-base
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:bg-slate-50
                    hover:text-primary
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Drawer CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gradient-to-r
                from-primary
                to-accent
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-card
              "
            >
              <Stethoscope className="h-4 w-4" />
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}