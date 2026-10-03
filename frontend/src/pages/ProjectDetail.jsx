import React from "react";
import { Link, useParams } from "react-router-dom";
import { CircleCheck, Quote } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { MetaList, CategoryList, CtaBox } from "../components/Sidebar";
import NotFound from "./NotFound";
import { PROJECTS } from "../mock";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.items.find((p) => p.slug === slug);
  if (!project) return <NotFound />;
  const others = PROJECTS.items.filter((p) => p.slug !== slug);

  return (
    <div data-testid="project-detail-page">
      <PageHeader
        eyebrow={project.tags[0]}
        title={project.title}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/#projects" }, { label: project.title }]}
      />

      <section className="section-pad">
        <div className="container-c">
          <img src={project.image} alt={project.title} className="w-full aspect-[1/0.6] lg:aspect-[2.4/1] object-cover rounded-[20px] lg:rounded-[30px] mb-10 lg:mb-[60px] reveal" />

          <div className="grid lg:grid-cols-[2.1fr_1fr] gap-10 lg:gap-[60px]">
            <div>
              <div className="entry reveal" data-testid="project-overview">
                <h2 className="title-h2 mb-5">Project overview</h2>
                {project.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10 lg:mt-[60px] reveal" data-testid="project-problems">
                <h3 className="title-h3">The challenge</h3>
                <div className="mt-6 lg:mt-10">
                  {project.problems.map((pr, i) => (
                    <div key={pr.title} className="flex flex-wrap justify-between gap-4 lg:gap-x-[60px] border-b border-c-divider last:border-0 pb-[30px] mb-[30px] last:pb-0 last:mb-0">
                      <h4 className="text-lg lg:text-xl font-medium text-c-primary flex gap-3 min-w-[40%]">
                        <span className="text-c-accent">0{i + 1}</span>
                        {pr.title}
                      </h4>
                      <p className="m-0 text-c-text/80 lg:max-w-[55%]">{pr.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 lg:mt-[60px] reveal" data-testid="project-solution">
                <h3 className="title-h3">Our solution</h3>
                <div className="mt-6 lg:mt-10 grid md:grid-cols-[37fr_63fr] gap-6 lg:gap-[30px]">
                  <img src={project.image2} alt="" className="w-full h-full aspect-[1/0.56] md:aspect-[1/1.32] object-cover rounded-[20px] lg:rounded-[30px]" />
                  <div className="entry">
                    <p>{project.solution.intro}</p>
                    <div className="rounded-[10px] bg-c-accent text-white p-6 lg:p-10 my-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.25),transparent_50%)]" aria-hidden="true" />
                      <Quote size={36} className="mb-5 relative" fill="currentColor" />
                      <p className="relative !text-white text-lg leading-[1.6]">{project.solution.quote}</p>
                      <p className="relative !text-white/80 text-sm mt-4 !mb-0">— {project.solution.quoteBy}</p>
                    </div>
                    <ul className="check-list grid sm:grid-cols-2 gap-x-4">
                      {project.solution.list.map((l) => (
                        <li key={l}>
                          <CircleCheck size={18} />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-[60px] reveal" data-testid="project-results">
                <h3 className="title-h3">The results</h3>
                <div className="mt-6 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
                  {project.results.map((r) => (
                    <div key={r.no} className="group pr-5 lg:pr-[30px]">
                      <div className="relative border-b border-c-divider pb-5 lg:pb-[30px] mb-5 lg:mb-10">
                        <h3 className="text-xl font-medium text-c-accent group-hover:text-c-primary transition-colors">{r.no}</h3>
                        <span className="absolute -bottom-[5px] left-0 w-[10px] h-[10px] rounded-full border-2 border-c-accent bg-c-bg group-hover:bg-c-accent transition-colors" />
                      </div>
                      <h4 className="text-lg font-medium text-c-primary">{r.title}</h4>
                      <p className="mt-2 m-0 text-sm text-c-text/80 leading-[1.7]">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-[30px] lg:sticky lg:top-[100px] self-start">
              <MetaList title="Project details" meta={project.meta} />
              <CategoryList title="More projects" items={others.map((p) => ({ label: p.title, to: `/projects/${p.slug}` }))} />
              <CtaBox />
            </aside>
          </div>

          <div className="mt-10 lg:mt-[60px] flex justify-center reveal">
            <Link to="/#projects" className="btn-default" data-testid="back-to-projects">
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
