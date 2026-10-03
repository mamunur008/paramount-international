import React from "react";
import { ArrowUpRight, Layers, ShieldCheck, Headphones } from "lucide-react";
import { HERO, IMAGES } from "../mock";

const benefitIcons = [Layers, ShieldCheck, Headphones];

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 grid-dots opacity-60" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#c6f934]/10 blur-[120px]" />
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-[#c6f934]/5 blur-[120px]" />

      <div className="container-c relative z-10">
        <div className="max-w-4xl">
          <span className="eyebrow mb-6">{HERO.welcome}</span>
          <h1 className="section-title mt-5 !text-[clamp(2.4rem,6vw,4.6rem)] max-w-4xl">
            Empowering our Business with{" "}
            <span className="text-[#c6f934]">Smart IT Solutions</span>
          </h1>
          <p className="mt-7 text-lg text-gray-400 max-w-2xl leading-relaxed">
            {HERO.desc}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-lime px-8 py-4 flex items-center gap-2">
              {HERO.cta} <ArrowUpRight size={18} />
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {IMAGES.authors.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="client"
                    className="w-10 h-10 rounded-full border-2 border-[#0a0b0a] object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">500+ Clients</div>
                <div className="text-gray-500 text-xs">Trust our services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {HERO.benefits.map((b, i) => {
            const Icon = benefitIcons[i];
            const stat = HERO.stats[i];
            return (
              <div key={i} className="card-dark p-7 flex flex-col justify-between min-h-[200px]">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#c6f934]/10 text-[#c6f934]">
                    <Icon size={22} />
                  </span>
                  {stat && (
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-[#c6f934]">{stat.value}</div>
                      <div className="text-[11px] text-gray-500">{stat.label}</div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mt-6">{b.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
