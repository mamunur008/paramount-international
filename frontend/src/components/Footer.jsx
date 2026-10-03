import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { FOOTER, BRAND } from "../mock";
import { Logo } from "./Header";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="dark-section mb-0 lg:mb-5 pt-[50px] lg:pt-[100px] overflow-hidden">
      <div className="container-c">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-10 lg:pb-[60px] mb-10 lg:mb-[60px]">
          <h2 className="title-h2 text-white max-w-[760px]" data-cursor="-opaque">
            {FOOTER.headline}
          </h2>
          <Link
            to="/#contact"
            aria-label="Contact us"
            data-testid="footer-cta"
            className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] shrink-0 rounded-full bg-c-accent text-white flex items-center justify-center hover:bg-white hover:text-[#090915] transition-colors group"
          >
            <ArrowUpRight size={34} className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-[50px]">
          <div>
            <Logo className="text-white mb-5" />
            <p className="text-white/80 max-w-[380px] m-0">{FOOTER.desc}</p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex items-center gap-3"><Phone size={16} className="text-c-accent shrink-0" /><a href={BRAND.phoneHref} className="hover:text-c-accent transition-colors">{BRAND.phone}</a></li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-c-accent shrink-0" /><a href={`mailto:${BRAND.email}`} className="hover:text-c-accent transition-colors">{BRAND.email}</a></li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-c-accent shrink-0 mt-1" /><span>{BRAND.address}</span></li>
            </ul>
            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="/" aria-label={label} onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center text-white hover:bg-c-accent transition-colors" data-testid={`social-${label.toLowerCase()}`}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xl font-medium text-white mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-white/80 hover:text-c-accent transition-colors leading-snug inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-[60px] border-t border-white/10 py-[30px] flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <p className="m-0">© 2026 {BRAND.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link to="/" className="hover:text-c-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-c-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
