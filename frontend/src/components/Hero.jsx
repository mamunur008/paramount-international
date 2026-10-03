import React from "react";
import { Link } from "react-router-dom";
import { Layers, ShieldCheck, Headphones } from "lucide-react";
import { HERO, IMAGES } from "../mock";

const icons = [Layers, ShieldCheck, Headphones];

const BenefitItem = ({ b, Icon }) => (
  <div className="flex gap-5 group">
    <div className="flex-1">
      <h3 className="text-xl font-medium text-white mb-3">{b.title}</h3>
      <p className="text-white/80 m-0">{b.desc}</p>
    </div>
    <span className="w-[60px] h-[60px] shrink-0 rounded-2xl bg-c-accent/20 text-c-accent flex items-center justify-center transition-all duration-500 group-hover:[transform:rotateY(180deg)] group-hover:bg-c-accent group-hover:text-white">
      <Icon size={28} />
    </span>
  </div>
);

const Bars = ({ heights }) => (
  <div className="flex items-end gap-1.5 h-[70px]" aria-hidden="true">
    {heights.map((h, i) => (
      <span key={i} className="w-2.5 rounded-t-md bg-c-accent" style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }} />
    ))}
  </div>
);

const Counter = ({ stat, heights, reverse }) => (
  <div className={`rounded-[20px] xl:rounded-[30px] bg-white/10 flex items-center justify-between gap-5 p-5 ${reverse ? "flex-row-reverse" : ""}`}>
    <div>
      <h3 className="text-[32px] font-medium text-white leading-none mb-2">{stat.value}</h3>
      <p className="text-white/80 m-0 text-sm">{stat.label}</p>
    </div>
    <Bars heights={heights} />
  </div>
);

const box = "rounded-[20px] lg:rounded-[30px] bg-white/10 backdrop-blur-xl p-5 lg:p-[30px] xl:p-10 flex flex-col justify-between gap-8 lg:gap-10 reveal";

export default function Hero() {
  const [b1, b2, b3] = HERO.benefits;
  return (
    <section id="home" data-testid="hero-section" className="dark-section mt-0 lg:mt-5 pt-[150px] lg:pt-[250px] pb-[50px] lg:pb-[90px] overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-c-accent/25 blur-[160px]" />
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
      </div>

      <div className="container-c relative z-10">
        <div className="max-w-[830px] mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-xl py-2 pr-4 pl-2 mb-5 reveal" data-testid="hero-welcome">
            <div className="flex -space-x-1.5">
              {IMAGES.authors.map((a, i) => (
                <img key={i} src={a} alt="" className="w-5 h-5 rounded-full border border-black/40 object-cover" />
              ))}
            </div>
            <p className="m-0 text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-white">{HERO.welcome}</p>
          </div>
          <h1 className="title-h1 text-white" data-cursor="-opaque" data-testid="hero-title">
            {HERO.title}
          </h1>
          <p className="mt-5 max-w-[690px] mx-auto text-white/80">{HERO.desc}</p>
          <div className="mt-8">
            <Link to="/#contact" className="btn-default" data-testid="hero-cta">
              {HERO.cta}
            </Link>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-[100px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          <div className={box} data-testid="hero-benefit-1">
            <BenefitItem b={b1} Icon={icons[0]} />
            <Counter stat={HERO.stats[0]} heights={[35, 55, 45, 70, 60, 90, 80]} />
          </div>
          <div className={box} style={{ transitionDelay: "0.15s" }} data-testid="hero-benefit-2">
            <Counter stat={HERO.stats[1]} heights={[40, 65, 50, 80, 70, 95, 85]} reverse />
            <BenefitItem b={b2} Icon={icons[1]} />
          </div>
          <div className={`${box} !pb-0 md:col-span-2 lg:col-span-1 overflow-hidden`} style={{ transitionDelay: "0.3s" }} data-testid="hero-benefit-3">
            <BenefitItem b={b3} Icon={icons[2]} />
            <img src={IMAGES.heroVisual} alt="Support team at work" className="w-full h-[180px] object-cover rounded-t-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
