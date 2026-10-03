import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, IMAGES } from "../mock";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative bg-[#0c0e0c]">
      <div className="container-c">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow mb-5 justify-center">{PROJECTS.eyebrow}</span>
          <h2 className="section-title mt-5">{PROJECTS.title}</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PROJECTS.items.map((p, i) => (
            <div key={i} className="group reveal">
              <div className="relative rounded-3xl overflow-hidden h-[320px]">
                <img src={IMAGES.projects[i]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a] via-[#0a0b0a]/20 to-transparent" />
                <a href="#contact" className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#c6f934] text-[#0a0b0a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </a>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#c6f934]/15 text-[#c6f934] border border-[#c6f934]/30 mb-3">
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-snug group-hover:text-[#c6f934] transition-colors">
                    {p.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
