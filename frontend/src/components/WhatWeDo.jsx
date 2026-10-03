import React, { useState } from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { WHAT_WE_DO, IMAGES } from "../mock";

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const imgs = [IMAGES.whatWeHighlight, IMAGES.whatWe, IMAGES.about];
  return (
    <section className="section-pad relative">
      <div className="container-c">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="eyebrow mb-5">{WHAT_WE_DO.eyebrow}</span>
            <h2 className="section-title mt-5">{WHAT_WE_DO.title}</h2>
            <p className="mt-6 text-gray-400 leading-relaxed">{WHAT_WE_DO.desc}</p>
            <a href="#contact" className="btn-lime px-7 py-3.5 mt-8 inline-flex items-center gap-2">
              {WHAT_WE_DO.cta} <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden h-[260px] mb-5">
              <img src={imgs[active]} alt="what we do" className="w-full h-full object-cover transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a]/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm text-gray-200">{WHAT_WE_DO.caption}</p>
            </div>
            <div className="space-y-3">
              {WHAT_WE_DO.tabs.map((t, i) => {
                const Icon = Icons[t.icon] || Icons.Box;
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#c6f934] border-[#c6f934] text-[#0a0b0a]"
                        : "bg-[#101210] border-white/8 text-white hover:border-[#c6f934]/40"
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${isActive ? "bg-[#0a0b0a] text-[#c6f934]" : "bg-[#c6f934]/10 text-[#c6f934]"}`}>
                      <Icon size={20} />
                    </span>
                    <span className="font-semibold">{t.title}</span>
                    <ArrowUpRight size={18} className="ml-auto" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
