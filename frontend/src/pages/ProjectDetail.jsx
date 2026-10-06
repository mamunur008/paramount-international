import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { ScreenshotGallery, ProjectCard } from "../components/SiteSections";
import { PROJECTS } from "../data/siteContent";
import NotFound from "./NotFound";
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS.find((p) => p.slug === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <PageHeader
        eyebrow={p.category}
        title={p.title}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Our work", to: "/projects" },
          { label: p.title },
        ]}
      />
      <section className="section-pad">
        <div className="container-c">
          <figure className={`project-detail-cover ${p.visual}`}>
            <img src={p.image} alt={p.imageAlt} />
            <figcaption>
              {p.imageCaption || (p.visual === "screenshot"
                ? "Application screenshot supplied for the portfolio."
                : "Illustrative image · not a screenshot of the application.")}
            </figcaption>
          </figure>
          {p.metrics && (
            <div className="case-results">
              <dl>
                {p.metrics.map((m) => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}
              </dl>
              <p>{p.metricsNote}</p>
            </div>
          )}
          <div className="detail-layout">
            <article className="prose-content">
              <span className="eyebrow">Project overview</span>
              <h2>{p.desc}</h2>
              {p.overview.map((t) => (
                <p key={t}>{t}</p>
              ))}
              {p.why && <><h2>Why it was created</h2><p>{p.why}</p></>}
              {p.timeline && (
                <section className="case-history" aria-label="Product history">
                  <h2>From the first idea to JustGo.</h2>
                  <ol>
                    {p.timeline.map((t) => <li key={t.year}><span>{t.year}</span><div><h3>{t.title}</h3><p>{t.desc}</p></div></li>)}
                  </ol>
                </section>
              )}
              <h2>What it supports</h2>
              <div className="capability-details">
                {p.capabilities.map((c, i) => (
                  <div key={c.title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h2>Engineering approach</h2>
              <p>{p.approach}</p>
              {p.technologies && <ul className="case-stack" aria-label="Technology experience">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>}
              {p.benefits && (
                <section className="case-benefits" aria-label="Business value">
                  <h2>Why it matters to the business.</h2>
                  {p.benefits.map((b) => <div key={b.title}><h3>{b.title}</h3><p>{b.desc}</p></div>)}
                </section>
              )}
              {p.customers && (
                <section className="case-customers" aria-label={p.customerTitle}>
                  <h2>{p.customerTitle}</h2>
                  {p.customerIntro && <p className="lead">{p.customerIntro}</p>}
                  <div>{p.customers.map((c) => <a key={c.name} href={c.href} target="_blank" rel="noreferrer"><span><strong>{c.name}</strong><span>{c.desc}</span></span><ArrowUpRight size={20} /></a>)}</div>
                  {p.customerNote && <p className="case-source">{p.customerNote}</p>}
                </section>
              )}
              {p.sourceNote && <p className="case-source">{p.sourceNote}</p>}
            </article>
            <aside className="detail-aside project-context">
              <span className="tiny-label">Project context</span>
              <h3>{p.kind}</h3>
              <p>{p.context}</p>
              <span className="tiny-label">Who it serves</span>
              <p>{p.audience}</p>
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                  <ArrowUpRight size={18} />
                </a>
              ))}
              <Link to="/contact" className="btn-default">
                Discuss a similar project
              </Link>
            </aside>
          </div>
          <ScreenshotGallery screenshots={p.screenshots} />
          <div className="more-projects">
            <div className="flex justify-between items-end gap-4 mb-8">
              <h2 className="title-h2">Explore more work.</h2>
              <Link to="/projects" className="text-link">
                All projects <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="project-grid">
              {PROJECTS.filter((x) => x.slug !== p.slug)
                .slice(0, 2)
                .map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
