import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS, IMAGES } from "../mock";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = TESTIMONIALS.items;

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [items.length]);

  const t = items[active];
  return (
    <section data-testid="testimonials-section" className="dark-section section-pad">
      <div className="container-c grid lg:grid-cols-2 gap-10 lg:gap-[60px]">
        <div className="flex flex-col justify-between gap-10 reveal">
          <div>
            <span className="eyebrow">{TESTIMONIALS.eyebrow}</span>
            <h2 className="title-h2 mt-[10px] text-white" data-cursor="-opaque">
              {TESTIMONIALS.title}
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex -space-x-3">
              {IMAGES.authors.map((a, i) => (
                <img key={i} src={a} alt="" className="w-10 h-10 rounded-full border border-white/30 object-cover" />
              ))}
            </div>
            <p className="m-0 max-w-[135px] text-white/80 leading-[1.4]">{TESTIMONIALS.satisfaction}</p>
          </div>
        </div>

        <div className="reveal">
          <div key={active} className="rounded-[20px] lg:rounded-[30px] bg-white/10 backdrop-blur-xl p-5 lg:p-10 animate-fadein" data-testid="testimonial-card">
            <Quote size={50} className="text-c-accent mb-[30px] lg:mb-10" fill="currentColor" />
            <p className="m-0 text-base lg:text-lg text-white" data-testid="testimonial-quote">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 mt-[30px] lg:mt-10 pt-[30px] lg:pt-10">
              <img src={t.avatar} alt={t.name} className="w-[50px] h-[50px] rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-medium text-white mb-1" data-testid="testimonial-name">
                  {t.name}
                </h3>
                <p className="m-0 text-white/80">{t.role}</p>
              </div>
            </div>
          </div>
          <div className="mt-[30px] lg:mt-[50px] flex items-center justify-center gap-5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                data-testid={`testimonial-dot-${i}`}
                aria-label={`Show testimonial ${i + 1}`}
                className={`relative w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/25 hover:bg-white/50"}`}
              >
                {i === active && <span className="absolute -inset-[7px] rounded-full border border-white" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
