import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { WHAT_WE_DO, IMAGES } from "../mock";

export default function WhatWeDo() {
  const [t1, t2, t3] = WHAT_WE_DO.tabs;
  const I1 = Icons[t1.icon] || Icons.Box;
  const I2 = Icons[t2.icon] || Icons.Box;
  const I3 = Icons[t3.icon] || Icons.Box;
  return (
    <section data-testid="what-we-do-section" className="section-pad">
      <div className="container-c">
        <div className="relative z-10 text-center max-w-[830px] mx-auto reveal">
          <span className="eyebrow">{WHAT_WE_DO.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {WHAT_WE_DO.title}
          </h2>
          <p className="mt-5 max-w-[600px] mx-auto m-0 text-c-text/80">{WHAT_WE_DO.desc}</p>
          <div className="mt-8 lg:mt-10">
            <Link to="/#contact" className="btn-default" data-testid="what-we-do-cta">
              {WHAT_WE_DO.cta}
            </Link>
          </div>
        </div>

        <div className="mt-[30px] lg:-mt-[70px] grid lg:grid-cols-[38fr_24fr_38fr] gap-5 lg:gap-[30px] items-end">
          <div className="grid grid-cols-[60fr_40fr] gap-5 lg:gap-[30px] items-end reveal">
            <div className="rounded-[20px] lg:rounded-[30px] bg-c-accent min-h-[250px] lg:min-h-[447px] p-5 xl:p-[50px] flex items-end relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />
              <p className="relative m-0 text-white text-base lg:text-xl xl:text-2xl leading-[1.5]">{WHAT_WE_DO.caption}</p>
            </div>
            <div className="card-c p-5 xl:p-[30px]">
              <span className="w-10 h-10 rounded-xl bg-c-accent/10 text-c-accent flex items-center justify-center mb-[50px] xl:mb-[120px]">
                <I1 size={20} />
              </span>
              <h3 className="text-base lg:text-lg xl:text-xl font-medium leading-[1.4] text-c-primary">{t1.title}</h3>
            </div>
          </div>

          <div className="relative rounded-[20px] lg:rounded-[30px] overflow-hidden min-h-[260px] lg:min-h-[377px] reveal" style={{ transitionDelay: "0.15s" }}>
            <img src={IMAGES.whatWeHighlight} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#090915]/45" />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div>
                <I2 size={36} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-medium text-white max-w-[160px] mx-auto">{t2.title}</h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] lg:rounded-[30px] overflow-hidden min-h-[260px] lg:min-h-[447px] reveal" style={{ transitionDelay: "0.3s" }}>
            <img src={IMAGES.whatWe} alt="Cloud integration services" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 rounded-full bg-c-bg/85 backdrop-blur px-4 py-2 text-sm font-medium text-c-primary flex items-center gap-2">
              <I3 size={16} className="text-c-accent" />
              {t3.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
