import React from "react";
import { Link } from "react-router-dom";
import { Star, Award, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { ABOUT } from "../mock";

const icons = [Award, TrendingUp, Clock, ShieldCheck];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section-pad">
      <div className="container-c">
        <div className="max-w-[1230px] mx-auto text-center reveal">
          <span className="eyebrow">{ABOUT.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {ABOUT.title}
          </h2>
        </div>

        <div className="mt-10 lg:mt-20 card-c p-6 sm:p-[30px] xl:p-[50px] grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 reveal" data-testid="about-counters">
          {ABOUT.counters.map((c, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className={`lg:px-[40px] xl:px-[50px] lg:first:pl-0 lg:last:pr-0 ${i < 3 ? "lg:border-r lg:border-c-divider" : ""}`}>
                <span className="w-[60px] h-[60px] rounded-2xl bg-c-accent/10 text-c-accent flex items-center justify-center mb-8 lg:mb-[60px]">
                  <Icon size={28} />
                </span>
                <h2 className="text-[45px] xl:text-[60px] font-medium leading-none text-c-primary">{c.value}</h2>
                <p className="mt-[10px] m-0 text-c-text/80">{c.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-[30px] lg:mt-[60px] text-center reveal">
          <p className="m-0 text-c-text/80">
            {ABOUT.note}{" "}
            <Link to="/#contact" className="font-bold text-c-accent hover:text-c-primary transition-colors" data-testid="about-quote-link">
              Get a free quote
            </Link>
          </p>
          <ul className="mt-[10px] inline-flex flex-wrap items-center justify-center gap-2 font-semibold text-c-primary">
            <li>{ABOUT.rating}</li>
            <li className="flex text-c-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
              ))}
            </li>
            <li>{ABOUT.reviews}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
