import React from "react";
import { Headphones, ShieldCheck } from "lucide-react";
import { FEATURES, IMAGES } from "../mock";

const card = "card-c p-[30px] xl:p-[60px] flex flex-col justify-between gap-10 overflow-hidden reveal";

export default function Features() {
  const [f1, f2, f3] = FEATURES.cards;
  return (
    <section data-testid="features-section" className="section-pad">
      <div className="container-c">
        <div className="max-w-[1000px] mx-auto text-center reveal mb-10 lg:mb-20">
          <span className="eyebrow">{FEATURES.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {FEATURES.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          <div className={card} data-testid="feature-card-1">
            <div>
              <h3 className="text-xl font-medium text-c-primary">{f1.title}</h3>
              <p className="mt-[10px] m-0 text-c-text/80">{f1.desc}</p>
            </div>
            <div className="rounded-[20px] bg-c-accent/10 p-6 flex items-center gap-5">
              <span className="w-16 h-16 rounded-2xl bg-c-accent text-white flex items-center justify-center shrink-0">
                <Headphones size={30} />
              </span>
              <div>
                <div className="text-3xl font-medium text-c-primary leading-none">24/7</div>
                <div className="text-sm text-c-text/70 mt-1">Always-on helpdesk</div>
              </div>
            </div>
          </div>

          <div className={`${card} text-center`} style={{ transitionDelay: "0.15s" }} data-testid="feature-card-2">
            <div className="mx-auto w-[150px] h-[150px] rounded-full border border-c-divider flex items-center justify-center relative">
              <div className="absolute inset-3 rounded-full border border-c-accent/40 animate-[spin_12s_linear_infinite] border-dashed" aria-hidden="true" />
              <ShieldCheck size={58} className="text-c-accent" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-c-primary">{f2.title}</h3>
              <p className="mt-[10px] m-0 text-c-text/80">{f2.desc}</p>
            </div>
          </div>

          <div className={`${card} !pb-0 md:col-span-2 lg:col-span-1`} style={{ transitionDelay: "0.3s" }} data-testid="feature-card-3">
            <div>
              <h3 className="text-xl font-medium text-c-primary">{f3.title}</h3>
              <p className="mt-[10px] m-0 text-c-text/80">{f3.desc}</p>
            </div>
            <img src={IMAGES.features} alt="Cloud infrastructure dashboard" className="w-full h-[180px] object-cover rounded-t-[20px]" />
          </div>
        </div>

        <div className="max-w-[1050px] mx-auto mt-[30px] lg:mt-[60px] reveal">
          <ul className="flex flex-wrap justify-center gap-2.5 lg:gap-5 xl:gap-[30px]" data-testid="feature-list">
            {FEATURES.list.map((item) => (
              <li key={item} className="relative border border-c-divider rounded-full py-2 lg:py-2.5 pr-4 pl-8 lg:pl-9 text-sm lg:text-base text-c-text before:content-[''] before:absolute before:left-3 lg:before:left-4 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-c-accent">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
