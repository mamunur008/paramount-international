import React from "react";
import { HOW_IT_WORKS, IMAGES } from "../mock";

export default function HowItWorks() {
  return (
    <section className="section-pad relative bg-[#0c0e0c]">
      <div className="container-c">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div className="reveal">
            <span className="eyebrow mb-5">{HOW_IT_WORKS.eyebrow}</span>
            <h2 className="section-title mt-5">{HOW_IT_WORKS.title}</h2>
          </div>
          <div className="reveal flex items-center gap-4 lg:justify-end">
            <div className="flex -space-x-3">
              {IMAGES.authors.map((a, i) => (
                <img key={i} src={a} alt="" className="w-10 h-10 rounded-full border-2 border-[#0c0e0c] object-cover" />
              ))}
            </div>
            <p className="text-sm text-gray-400 max-w-[220px]">{HOW_IT_WORKS.note}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.steps.map((s, i) => (
            <div key={i} className="card-dark p-7 reveal relative overflow-hidden">
              <div className="text-6xl font-extrabold text-white/5 absolute top-3 right-4 select-none">{s.no}</div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#c6f934] text-[#c6f934] font-bold text-lg">
                {s.no}
              </div>
              <h3 className="text-lg font-semibold text-white mt-6">{s.title}</h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
