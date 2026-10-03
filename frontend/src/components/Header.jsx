import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "../mock";

const Logo = () => (
  <a href="#home" className="flex items-center gap-2 select-none">
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#c6f934] text-[#0a0b0a] font-extrabold text-lg">
      {"</>"}
    </span>
    <span className="text-2xl font-extrabold tracking-tight text-white">
      codeio
    </span>
  </a>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0b0a]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-c flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-[#c6f934] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:123456789" className="flex items-center gap-2 text-sm text-gray-300">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15">
              <Phone size={15} className="text-[#c6f934]" />
            </span>
            <span>
              <span className="block text-[11px] text-gray-500">Call us now</span>
              <span className="font-semibold text-white">(123) 456 789</span>
            </span>
          </a>
          <a href="#contact" className="btn-lime px-6 py-3 text-sm">
            Get a Free Quote
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-2xl bg-[#101210] border border-white/10 p-5">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-gray-200 hover:text-[#c6f934] border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-lime px-6 py-3 text-sm mt-4 text-center">
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
