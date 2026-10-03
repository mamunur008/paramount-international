import React from "react";
import { ArrowUpRight, Award, Users, Globe, Phone } from "lucide-react";
import { WHY_CHOOSE, IMAGES } from "../mock";

export default function WhyChoose() {
  const { cards, support } = WHY_CHOOSE;
  return (
    <section className="section-pad relative">
      <div className="container-c">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow mb-5 justify-center">{WHY_CHOOSE.eyebrow}</span>
          <h2 className="section-title mt-5">{WHY_CHOOSE.title}</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {/* Left image card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[360px] reveal group">
            <img src={IMAGES.whyChoose} alt="team" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a] via-[#0a0b0a]/40 to-transparent" />
            <a href="#contact" className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#c6f934] text-[#0a0b0a] flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight size={22} />
            </a>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex -space-x-3 mb-3">
                {IMAGES.authors.map((a, i) => (
                  <img key={i} src={a} alt="" className="w-9 h-9 rounded-full border-2 border-[#0a0b0a] object-cover" />
                ))}
              </div>
              <div className="text-3xl font-extrabold text-white">{cards[0].value}</div>
              <p className="text-sm text-gray-300 mt-1">{cards[0].label}</p>
            </div>
          </div>

          {/* Middle column */}
          <div className="grid grid-rows-2 gap-5">
            <div className="card-dark p-7 reveal">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#c6f934]/10 text-[#c6f934] mb-4">
                <Award size={22} />
              </span>
              <div className="text-3xl font-extrabold text-white">{cards[1].value}</div>
              <p className="text-sm text-gray-400 mt-2">{cards[1].label}</p>
            </div>
            <div className="card-dark p-7 reveal">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#c6f934]/10 text-[#c6f934] mb-4">
                <Globe size={22} />
              </span>
              <div className="text-3xl font-extrabold text-white">{cards[2].value}</div>
              <p className="text-sm text-gray-400 mt-2">{cards[2].label}</p>
            </div>
          </div>

          {/* Right support card */}
          <div className="rounded-3xl bg-[#c6f934] text-[#0a0b0a] p-8 flex flex-col justify-between reveal">
            <div>
              <div className="text-6xl font-extrabold">{support.value}</div>
              <h3 className="text-2xl font-bold mt-4">{support.title}</h3>
              <p className="mt-3 text-[#0a0b0a]/70 leading-relaxed">{support.desc}</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex -space-x-3">
                {IMAGES.authors.slice(0,4).map((a, i) => (
                  <img key={i} src={a} alt="" className="w-9 h-9 rounded-full border-2 border-[#c6f934] object-cover" />
                ))}
              </div>
              <span className="w-12 h-12 rounded-full bg-[#0a0b0a] text-[#c6f934] flex items-center justify-center">
                <Phone size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
