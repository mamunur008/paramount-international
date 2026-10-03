import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOG, IMAGES } from "../mock";

export default function Blog() {
  return (
    <section id="blog" className="section-pad relative bg-[#0c0e0c]">
      <div className="container-c">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow mb-5 justify-center">{BLOG.eyebrow}</span>
          <h2 className="section-title mt-5">{BLOG.title}</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {BLOG.posts.map((p, i) => (
            <article key={i} className="card-dark overflow-hidden group reveal">
              <div className="relative h-56 overflow-hidden">
                <img src={IMAGES.blog[i]} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-[#c6f934] text-[#0a0b0a]">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar size={14} /> {p.date}
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-[#c6f934] transition-colors">
                  {p.title}
                </h3>
                <a href="#blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c6f934] hover:gap-2.5 transition-all">
                  Read more <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
