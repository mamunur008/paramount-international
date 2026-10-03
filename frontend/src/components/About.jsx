import React from "react";
import { Star, Award, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { ABOUT, IMAGES } from "../mock";

const counterIcons = [Award, TrendingUp, Clock, ShieldCheck];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-c">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="eyebrow mb-5">{ABOUT.eyebrow}</span>
            <h2 className="section-title mt-5 !text-[clamp(1.5rem,2.6vw,2.2rem)] !font-semibold !leading-snug">
              {ABOUT.title}
            </h2>
            <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-[#101210] border border-white/8">
              <div className="flex items-center gap-1 text-[#c6f934]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c6f934" stroke="#c6f934" />
                ))}
              </div>
              <div>
                <div className="font-bold text-white">{ABOUT.rating}</div>
                <div className="text-xs text-gray-500">{ABOUT.reviews}</div>
              </div>
            </div>
            <p className="mt-6 text-gray-400 leading-relaxed">{ABOUT.note}</p>
          </div>

          <div className="reveal grid grid-cols-2 gap-5">
            {ABOUT.counters.map((c, i) => {
              const Icon = counterIcons[i];
              return (
                <div key={i} className="card-dark p-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#c6f934]/10 text-[#c6f934] mb-5">
                    <Icon size={22} />
                  </span>
                  <div className="text-4xl font-extrabold text-white">{c.value}</div>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{c.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
