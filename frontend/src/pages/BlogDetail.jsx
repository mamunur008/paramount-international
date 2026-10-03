import React from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, Tag, Quote, Facebook, Twitter, Linkedin, Link as LinkIcon, CircleCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { CtaBox } from "../components/Sidebar";
import NotFound from "./NotFound";
import { BLOG } from "../mock";
import { useToast } from "../hooks/use-toast";

const Block = ({ b }) => {
  if (b.type === "h2") return <h3 className="title-h3 mt-10 mb-4">{b.text}</h3>;
  if (b.type === "quote")
    return (
      <blockquote className="post-quote">
        <Quote size={40} fill="currentColor" />
        <p>{b.text}</p>
      </blockquote>
    );
  if (b.type === "ul")
    return (
      <ul className="check-list my-6">
        {b.items.map((it) => (
          <li key={it} className="text-lg font-medium">
            <CircleCheck size={20} />
            {it}
          </li>
        ))}
      </ul>
    );
  return <p>{b.text}</p>;
};

export default function BlogDetail() {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = BLOG.posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  const recent = BLOG.posts.filter((p) => p.slug !== slug);
  const cats = [...new Set(BLOG.posts.map((p) => p.cat))];

  const share = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(window.location.href);
    toast({ title: "Link copied", description: "Share this article with your team." });
  };

  return (
    <div data-testid="blog-detail-page">
      <PageHeader eyebrow={post.cat} title={post.title} crumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/#blog" }, { label: post.title }]} />

      <section className="section-pad">
        <div className="container-c grid lg:grid-cols-[2.1fr_1fr] gap-10 lg:gap-[60px]">
          <article>
            <img src={post.image} alt={post.title} className="w-full aspect-[1/0.7] lg:aspect-[1/0.55] object-cover rounded-[20px] lg:rounded-[30px] mb-8 reveal" />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-6 mb-8 border-b border-c-divider reveal" data-testid="post-meta">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-c-primary leading-tight">{post.author.name}</div>
                  <div className="text-sm text-c-text/70">{post.author.role}</div>
                </div>
              </div>
              <span className="flex items-center gap-2 text-c-text/80"><Calendar size={16} className="text-c-accent" />{post.date}</span>
              <span className="flex items-center gap-2 text-c-text/80"><Clock size={16} className="text-c-accent" />{post.readTime}</span>
              <span className="flex items-center gap-2 text-c-text/80"><Tag size={16} className="text-c-accent" />{post.cat}</span>
            </div>

            <div className="entry reveal" data-testid="post-content">
              <p className="text-lg lg:text-xl !text-c-primary font-medium">{post.excerpt}</p>
              {post.content.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-c-divider flex flex-wrap items-center justify-between gap-6 reveal">
              <div className="flex flex-wrap items-center gap-3" data-testid="post-tags">
                <span className="text-lg font-semibold text-c-primary">Tags:</span>
                {post.tags.map((t) => (
                  <span key={t} className="inline-block rounded-[10px] bg-c-accent text-white text-sm font-bold px-4 py-2.5 leading-none">{t}</span>
                ))}
              </div>
              <ul className="flex gap-2.5" data-testid="post-share">
                {[Facebook, Twitter, Linkedin, LinkIcon].map((Icon, i) => (
                  <li key={i}>
                    <a href="/" onClick={share} aria-label="Share" className="w-10 h-10 rounded-[10px] bg-c-accent text-white flex items-center justify-center hover:bg-c-primary hover:text-c-bg transition-colors">
                      <Icon size={17} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="space-y-[30px] lg:sticky lg:top-[100px] self-start">
            <div className="card-c overflow-hidden" data-testid="sidebar-categories">
              <h3 className="bg-c-accent text-white px-5 lg:px-[30px] py-4 lg:py-5 text-lg lg:text-xl font-medium">Categories</h3>
              <ul className="p-5 lg:p-[30px]">
                {cats.map((c) => (
                  <li key={c} className="flex items-center justify-between border-b border-c-divider py-[15px] first:pt-0 last:pb-0 last:border-0">
                    <span className={`font-medium ${c === post.cat ? "text-c-accent" : "text-c-primary"}`}>{c}</span>
                    <span className="text-sm text-c-text/70">{BLOG.posts.filter((p) => p.cat === c).length}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-c overflow-hidden" data-testid="sidebar-recent-posts">
              <h3 className="bg-c-accent text-white px-5 lg:px-[30px] py-4 lg:py-5 text-lg lg:text-xl font-medium">Recent posts</h3>
              <ul className="p-5 lg:p-[30px] space-y-5">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="flex gap-4 group" data-testid={`recent-post-${p.slug}`}>
                      <img src={p.image} alt="" className="w-20 h-20 rounded-[14px] object-cover shrink-0" />
                      <div>
                        <div className="text-xs text-c-text/70 mb-1">{p.date}</div>
                        <div className="font-medium text-c-primary leading-snug group-hover:text-c-accent transition-colors">{p.title}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <CtaBox />
          </aside>
        </div>
      </section>
    </div>
  );
}
