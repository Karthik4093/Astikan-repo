"use client";

import Image from "next/image";
import { Menu, Stethoscope, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About Us", "Find Doctors", "Lab Tests", "Medical Finance", "Health Pocket", "Surgeries"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center">
          <Image src="/logos/astikan-logo.svg" alt="Astikan Healthcare" width={188} height={52} priority />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-semibold text-slate-700 transition hover:text-primary">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white lg:inline-flex">
          <Stethoscope className="h-4 w-4" /> Dr Astikan
        </a>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-50 bg-ink/35 lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex h-full w-80 max-w-[88vw] flex-col bg-white p-5 shadow-soft">
            <div className="mb-8 flex items-center justify-between">
              <Image src="/logos/astikan-logo.svg" alt="Astikan Healthcare" width={156} height={44} />
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
              <Stethoscope className="h-4 w-4" /> Dr Astikan
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
