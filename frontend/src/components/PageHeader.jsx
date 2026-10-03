import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, crumbs = [], eyebrow }) {
  return (
    <section data-testid="page-header" className="dark-section mt-0 lg:mt-5 pt-[140px] lg:pt-[220px] pb-[50px] lg:pb-[90px] overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-c-accent/25 blur-[160px]" />
        <div className="hero-shape hero-shape-1 !top-[120px]" />
        <div className="hero-shape hero-shape-2" />
      </div>
      <div className="container-c relative z-10 text-center max-w-[1000px]">
        {eyebrow && <span className="eyebrow mb-[10px]">{eyebrow}</span>}
        <h1 className="title-h1 text-white" data-cursor="-opaque" data-testid="page-title">
          {title}
        </h1>
        <ol className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 text-white/80" data-testid="breadcrumbs">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={i} className="inline-flex items-center gap-1.5">
                {c.to && !last ? (
                  <Link to={c.to} className="hover:text-c-accent transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className={last ? "text-white" : ""}>{c.label}</span>
                )}
                {!last && <ChevronRight size={14} className="text-white/50" />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
