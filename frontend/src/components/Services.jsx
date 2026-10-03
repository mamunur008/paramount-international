import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { SERVICES } from "../mock";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="section-pad section-alt bg-c-alt">
      <div className="container-c">
        <div className="max-w-[1000px] mx-auto text-center reveal mb-10 lg:mb-20">
          <span className="eyebrow">{SERVICES.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {SERVICES.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px]">
          {SERVICES.items.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Box;
            return (
              <Link
                to={`/services/${s.slug}`}
                key={s.slug}
                data-testid={`service-card-${s.slug}`}
                className="fill-card card-c p-[30px] xl:p-[50px] min-h-[350px] lg:min-h-[435px] flex flex-col justify-between reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative z-10">
                  <span className="w-[60px] h-[60px] rounded-2xl bg-c-accent/10 text-c-accent flex items-center justify-center mb-[30px] transition-colors duration-300 group-hover:bg-white/15">
                    <Icon size={28} />
                  </span>
                  <h3 className="text-xl font-medium text-c-primary transition-colors duration-300">{s.title}</h3>
                </div>
                <div className="relative z-10 border-t border-c-divider mt-[30px] pt-[30px] group-hover:border-white/20 transition-colors duration-300">
                  <p className="m-0 mb-[30px] text-c-text/80 transition-colors duration-300">{s.desc}</p>
                  <span className="readmore-btn">read more</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
