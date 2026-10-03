import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { BRAND } from "../mock";

export const CategoryList = ({ title, items, activeTo }) => (
  <div className="card-c overflow-hidden" data-testid="sidebar-category-list">
    <h3 className="bg-c-accent text-white px-5 lg:px-[30px] py-4 lg:py-5 text-lg lg:text-xl font-medium">{title}</h3>
    <ul className="p-5 lg:p-[30px]">
      {items.map((it) => {
        const active = it.to === activeTo;
        return (
          <li key={it.to} className="border-b border-c-divider py-[15px] first:pt-0 last:pb-0 last:border-0">
            <Link
              to={it.to}
              data-testid={`sidebar-link-${it.to.split("/").pop()}`}
              className={`flex items-center justify-between gap-3 font-medium transition-colors group ${active ? "text-c-accent" : "text-c-primary hover:text-c-accent"}`}
            >
              <span className="leading-snug">{it.label}</span>
              <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:rotate-45" />
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export const MetaList = ({ title, meta }) => (
  <div className="card-c overflow-hidden" data-testid="sidebar-meta-list">
    <h3 className="bg-c-accent text-white px-5 lg:px-[30px] py-4 lg:py-5 text-lg lg:text-xl font-medium">{title}</h3>
    <ul className="p-5 lg:p-[30px]">
      {Object.entries(meta).map(([k, v]) => (
        <li key={k} className="flex items-center justify-between gap-3 border-b border-c-divider py-[15px] first:pt-0 last:pb-0 last:border-0">
          <span className="capitalize text-c-text/75">{k}</span>
          <span className="font-medium text-c-primary text-right">{v}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const CtaBox = () => (
  <div className="dark-section !mx-0 p-6 lg:p-[30px] xl:p-10 relative overflow-hidden" data-testid="sidebar-cta-box">
    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-c-accent/30 blur-[80px]" aria-hidden="true" />
    <div className="relative">
      <span className="inline-flex items-baseline gap-1 text-white mb-8 lg:mb-10">
        <span className="font-bold">Paramount</span>{" "}
        <span className="font-light">International</span>
      </span>
      <div className="border-b border-white/10 pb-5 mb-5">
        <h3 className="text-[26px] lg:text-[32px] font-medium leading-tight text-white">Need help with your IT?</h3>
        <p className="mt-[10px] m-0 text-white/80">Talk to a certified engineer today and get a free assessment.</p>
      </div>
      <ul className="space-y-[15px] text-white text-lg">
        <li className="flex items-center gap-3"><Phone size={18} className="text-c-accent" /><a href={BRAND.phoneHref} className="hover:text-c-accent transition-colors">{BRAND.phone}</a></li>
        <li className="flex items-center gap-3"><Mail size={18} className="text-c-accent" /><a href={`mailto:${BRAND.email}`} className="hover:text-c-accent transition-colors break-all">{BRAND.email}</a></li>
      </ul>
      <div className="mt-8">
        <Link to="/#contact" className="btn-default w-full" data-testid="sidebar-cta-button">
          Get a Free Quote
        </Link>
      </div>
    </div>
  </div>
);
