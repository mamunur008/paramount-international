import React from "react";
import { HOW_IT_WORKS, IMAGES } from "../mock";

export default function HowItWorks() {
  return (
    <section data-testid="how-it-works-section" className="dark-section section-pad">
      <div className="container-c">
        <div className="grid lg:grid-cols-2 gap-6 lg:items-end mb-10 lg:mb-20">
          <div className="reveal">
            <span className="eyebrow">{HOW_IT_WORKS.eyebrow}</span>
            <h2 className="title-h2 mt-[10px] text-white" data-cursor="-opaque">
              {HOW_IT_WORKS.title}
            </h2>
          </div>
          <div className="reveal flex items-center gap-4 lg:justify-end">
            <div className="flex -space-x-3">
              {IMAGES.authors.map((a, i) => (
                <img key={i} src={a} alt="" className="w-10 h-10 rounded-full border border-white/30 object-cover" />
              ))}
            </div>
            <p className="m-0 text-white/80 max-w-[240px] leading-[1.5]">{HOW_IT_WORKS.note}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px]">
          {HOW_IT_WORKS.steps.map((s, i) => (
            <div
              key={s.no}
              data-testid={`step-${s.no}`}
              className="fill-card rounded-[20px] lg:rounded-[30px] bg-white/10 backdrop-blur-xl p-[30px] xl:p-10 min-h-[300px] lg:min-h-[390px] flex flex-col justify-between reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white/60 mb-[30px] transition-colors">{s.no}</h3>
                <h3 className="text-xl font-medium text-white max-w-[200px]">{s.title}</h3>
              </div>
              <p className="relative z-10 m-0 mt-[30px] text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
