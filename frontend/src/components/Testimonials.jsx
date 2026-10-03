import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, IMAGES } from "../mock";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = TESTIMONIALS.items;
  const go = (dir) => setActive((p) => (p + dir + items.length) % items.length);

  return (
    <section className="section-pad relative bg-[#0c0e0c]">
      <div className="container-c">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="eyebrow mb-5">{TESTIMONIALS.eyebrow}</span>
            <h2 className="section-title mt-5">{TESTIMONIALS.title}</h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {IMAGES.authors.map((a, i) => (
                  <img key={i} src={a} alt="" className="w-11 h-11 rounded-full border-2 border-[#0c0e0c] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#c6f934]">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={15} fill="#c6f934" stroke="#c6f934" />))}
                </div>
                <p className="text-sm text-gray-400 mt-1">{TESTIMONIALS.satisfaction}</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="card-dark p-9 relative">
              <Quote size={48} className="text-[#c6f934] mb-5" fill="#c6f934" />
              <p className="text-lg text-gray-200 leading-relaxed">{TESTIMONIALS.quote}</p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={IMAGES.authors[active]} alt="" className="w-14 h-14 rounded-full object-cover border-2 border-[#c6f934]" />
                  <div>
                    <div className="font-bold text-white">{items[active].name}</div>
                    <div className="text-sm text-[#c6f934]">{items[active].role}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => go(-1)} className="w-11 h-11 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-[#c6f934] hover:text-[#0a0b0a] hover:border-[#c6f934] transition-all">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={() => go(1)} className="w-11 h-11 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-[#c6f934] hover:text-[#0a0b0a] hover:border-[#c6f934] transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
