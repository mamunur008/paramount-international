import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Globe } from "lucide-react";
import { WHY_CHOOSE, IMAGES } from "../mock";

const ArrowBtn = ({ className = "", size = 16 }) => (
  <Link to="/#contact" aria-label="Contact us" className={`rounded-full flex items-center justify-center transition-colors group/btn ${className}`}>
    <ArrowUpRight size={size} className="transition-transform duration-300 group-hover/btn:rotate-45" />
  </Link>
);

export default function WhyChoose() {
  const { cards, support } = WHY_CHOOSE;
  return (
    <section data-testid="why-choose-section" className="section-pad">
      <div className="container-c">
        <div className="max-w-[1000px] mx-auto text-center reveal mb-10 lg:mb-20">
          <span className="eyebrow">{WHY_CHOOSE.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {WHY_CHOOSE.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {/* Box 1 */}
          <div className="card-c p-5 lg:p-[30px] xl:p-10 flex flex-col justify-between reveal" data-testid="why-box-1">
            <div className="relative">
              <img src={IMAGES.whyChoose} alt="Our certified team" className="w-full aspect-[1/0.9] object-cover rounded-[20px] lg:rounded-[30px]" />
              <ArrowBtn className="absolute top-5 right-5 w-10 h-10 bg-c-bg text-c-primary hover:bg-c-accent hover:text-white" />
            </div>
            <div className="flex items-center mt-[30px]">
              <h2 className="w-[30%] text-[45px] xl:text-[60px] font-medium leading-none text-c-primary">{cards[0].value}</h2>
              <p className="w-[70%] pl-[10px] m-0 text-c-text/80">{cards[0].label}</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative rounded-[20px] lg:rounded-[30px] overflow-hidden p-5 lg:p-[30px] xl:p-10 flex flex-col justify-between min-h-[420px] reveal" style={{ transitionDelay: "0.15s" }} data-testid="why-box-2">
            <img src={IMAGES.whyChooseBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#090915]/75" />
            <div className="relative flex items-start justify-between">
              <div className="flex -space-x-3">
                {IMAGES.authors.map((a, i) => (
                  <img key={i} src={a} alt="" className="w-[60px] h-[60px] rounded-full border-2 border-[#090915] object-cover" />
                ))}
              </div>
              <ArrowBtn size={20} className="w-[60px] h-[60px] bg-c-accent text-white hover:bg-white hover:text-[#090915]" />
            </div>
            <div className="relative max-w-[270px] mt-[30px]">
              <span className="w-[60px] h-[60px] rounded-2xl bg-white/10 text-white flex items-center justify-center mb-[30px]">
                <Award size={28} />
              </span>
              <h2 className="text-[45px] xl:text-[60px] font-medium leading-none text-white">{cards[1].value}</h2>
              <p className="mt-[10px] m-0 text-white/80">{cards[1].label}</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col gap-5 lg:gap-10 reveal md:col-span-2 lg:col-span-1" style={{ transitionDelay: "0.3s" }} data-testid="why-box-3">
            <div className="card-c p-5 lg:p-[30px] xl:p-10 relative overflow-hidden flex-1">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-c-accent/15 blur-2xl" aria-hidden="true" />
              <span className="w-[60px] h-[60px] rounded-2xl bg-c-accent/10 text-c-accent flex items-center justify-center mb-10 xl:mb-[100px]">
                <Globe size={28} />
              </span>
              <h2 className="text-[45px] xl:text-[60px] font-medium leading-none text-c-primary">{cards[2].value}</h2>
              <p className="mt-[10px] m-0 text-c-text/80">{cards[2].label}</p>
            </div>
            <div className="rounded-[20px] lg:rounded-[30px] bg-c-accent text-white p-5 lg:p-[30px] xl:p-[50px] flex flex-wrap items-center gap-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden="true" />
              <div className="relative w-[calc(45%-10px)]">
                <h2 className="text-[45px] xl:text-[60px] font-medium leading-none text-white">{support.value}</h2>
                <h3 className="text-xl font-medium capitalize text-white mt-[10px]">{support.title}</h3>
              </div>
              <p className="relative w-[calc(55%-10px)] m-0 text-white/85">{support.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
