import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BRAND } from "../mock";
import ThemeToggle from "./ThemeToggle";

export const Logo = ({ className = "" }) => (
  <Link
    to="/"
    data-testid="site-logo"
    aria-label="Paramount International home"
    className={`inline-flex items-baseline gap-1.5 leading-none select-none whitespace-nowrap ${className}`}
  >
    <span className="text-[20px] sm:text-[22px] font-bold tracking-tight">Paramount</span>
    <span className="text-[20px] sm:text-[22px] font-light tracking-tight">International</span>
  </Link>
);

const navId = (label) => `nav-${label.toLowerCase().replace(/\s+/g, "-")}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  const current = `${pathname}${hash}`;
  const isActive = (href) => (href === "/" ? current === "/" : current === href);

  return (
    <header
      data-testid="site-header"
      className={`fixed left-0 right-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled ? "py-3 bg-[var(--c-header)] backdrop-blur-xl border-b border-white/10 lg:rounded-b-[20px]" : "py-5 lg:py-[30px] lg:mt-5"
      }`}
    >
      <div className="container-c flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center" data-testid="desktop-nav">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              data-testid={navId(l.label)}
              className={`px-[15px] py-2 text-[16px] font-medium capitalize transition-colors duration-300 hover:text-c-accent ${
                isActive(l.href) ? "text-c-accent" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle />
          <a href={BRAND.phoneHref} className="flex items-center gap-3 text-sm group" data-testid="header-phone">
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-c-accent transition-colors">
              <Phone size={16} />
            </span>
            <span>
              <span className="block text-[11px] text-white/60 uppercase tracking-wider">Call us now</span>
              <span className="font-semibold">{BRAND.phone}</span>
            </span>
          </a>
          <Link to="/#contact" className="btn-default" data-testid="header-cta">
            Get a Free Quote
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="w-[38px] h-[38px] rounded-lg bg-c-accent text-white flex items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden mt-4 mx-4 rounded-[20px] bg-c-accent p-3 shadow-2xl animate-fadein">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                data-testid={`mobile-${navId(l.label)}`}
                className="px-5 py-3 text-white font-medium capitalize rounded-xl hover:bg-white/10 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/#contact" className="mt-2 mx-2 mb-1 text-center rounded-xl bg-white text-[#090915] py-3 font-semibold" data-testid="mobile-cta">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
