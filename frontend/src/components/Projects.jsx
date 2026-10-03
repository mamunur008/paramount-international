import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../mock";

export const ProjectCard = ({ p, delay = 0 }) => (
  <div className="group reveal" data-testid={`project-card-${p.slug}`} style={{ transitionDelay: `${delay}s` }}>
    <Link to={`/projects/${p.slug}`} data-cursor-text="View" className="relative block rounded-[20px] lg:rounded-[30px] overflow-hidden mb-5 lg:mb-[25px]">
      <img src={p.image} alt={p.title} className="w-full aspect-[1/0.84] object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
      <span className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] lg:w-20 lg:h-20 rounded-full bg-c-accent text-white flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-1/2 transition-all duration-300">
        <ArrowUpRight size={24} />
      </span>
    </Link>
    <div className="px-1 lg:px-5">
      <ul className="flex flex-wrap gap-x-5 gap-y-2.5 mb-4 lg:mb-5">
        {p.tags.map((t) => (
          <li key={t} className="relative pl-[15px] text-c-text/80 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-c-accent">
            {t}
          </li>
        ))}
      </ul>
      <h3 className="text-lg lg:text-xl font-medium text-c-primary">
        <Link to={`/projects/${p.slug}`} className="hover:text-c-accent transition-colors">
          {p.title}
        </Link>
      </h3>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="section-pad section-alt bg-c-alt">
      <div className="container-c">
        <div className="max-w-[1000px] mx-auto text-center reveal mb-10 lg:mb-20">
          <span className="eyebrow">{PROJECTS.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {PROJECTS.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {PROJECTS.items.map((p, i) => (
            <ProjectCard key={p.slug} p={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
