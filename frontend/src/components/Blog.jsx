import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { BLOG } from "../mock";

export const PostCard = ({ p, delay = 0 }) => (
  <article className="card-c p-5 lg:p-[30px] group reveal" data-testid={`blog-card-${p.slug}`} style={{ transitionDelay: `${delay}s` }}>
    <Link to={`/blog/${p.slug}`} data-cursor-text="Read" className="block rounded-[20px] overflow-hidden mb-6 relative">
      <img src={p.image} alt={p.title} className="w-full aspect-[1/0.7] object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute top-4 left-4 rounded-full bg-c-accent text-white text-xs font-semibold px-3 py-1.5">{p.cat}</span>
    </Link>
    <div className="flex items-center gap-2 text-sm text-c-text/70 mb-3">
      <Calendar size={14} className="text-c-accent" /> {p.date} · {p.readTime}
    </div>
    <h2 className="text-lg lg:text-xl font-medium text-c-primary leading-[1.4]">
      <Link to={`/blog/${p.slug}`} className="hover:text-c-accent transition-colors">
        {p.title}
      </Link>
    </h2>
    <div className="mt-5">
      <Link to={`/blog/${p.slug}`} className="readmore-btn">
        read more
      </Link>
    </div>
  </article>
);

export default function Blog() {
  return (
    <section id="blog" data-testid="blog-section" className="section-pad pt-0 lg:pt-0">
      <div className="container-c">
        <div className="max-w-[1000px] mx-auto text-center reveal mb-10 lg:mb-20">
          <span className="eyebrow">{BLOG.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {BLOG.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {BLOG.posts.map((p, i) => (
            <PostCard key={p.slug} p={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
