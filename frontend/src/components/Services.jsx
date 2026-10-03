import React from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../mock";

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c6f934]/5 blur-[150px] pointer-events-none" />
      <div className="container-c relative z-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow mb-5 justify-center">{SERVICES.eyebrow}</span>
          <h2 className="section-title mt-5">{SERVICES.title}</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.items.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Box;
            return (
              <div key={i} className="card-dark p-7 group reveal flex flex-col">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c6f934]/10 text-[#c6f934] group-hover:bg-[#c6f934] group-hover:text-[#0a0b0a] transition-colors duration-300">
                  <Icon size={26} />
                </span>
                <h3 className="text-xl font-semibold text-white mt-6">{s.title}</h3>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-1">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c6f934] hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
