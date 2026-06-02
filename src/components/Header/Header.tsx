"use client";

import Image from "next/image";
import { Menu, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["Home", "About Us", "Find Doctors", "Lab Tests", "Medical Finance", "Health Pocket", "Surgeries"];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Main navigation">
        <a href="#home" className="flex items-center">
          <Image src="/logos/astikan-logo.webp" alt="Astikan Healthcare" width={188} height={52} priority className="h-auto w-32 sm:w-40 md:w-44" />
        </a>
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-semibold text-slate-700 transition hover:text-primary">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white md:inline-flex">
          <Stethoscope className="h-4 w-4" /> Dr Astikan
        </a>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/35 md:hidden" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="flex h-full w-[min(88vw,22rem)] flex-col overflow-y-auto border-l border-slate-100 bg-white p-5 shadow-soft sm:w-[min(80vw,24rem)] sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between gap-4">
              <Image src="/logos/astikan-logo.webp" alt="Astikan Healthcare" width={156} height={44} className="h-auto w-28 sm:w-32" />
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50">
                  {item}
                </a>
              ))}
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="gradient-button mt-8">
              <Stethoscope className="h-4 w-4" /> Login
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
