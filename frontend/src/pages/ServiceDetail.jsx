import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { ContactCTA } from "../components/Footer";
import { SERVICES } from "../data/siteContent";
import NotFound from "./NotFound";
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return (
    <>
      <PageHeader
        eyebrow="Our expertise"
        title={service.title}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />
      <section className="section-pad">
        <div className="container-c detail-layout">
          <article className="prose-content">
            <span className="eyebrow">{service.short}</span>
            <h2>{service.title}</h2>
            <p className="lead">{service.intro}</p>
            <figure className="editorial-image">
              <img
                src={service.image}
                alt="Architectural forms illustrating a structured approach to software"
              />
              <figcaption>
                Illustrative image.
              </figcaption>
            </figure>
            <h2>What we can help with</h2>
            <ul className="service-checklist">
              {service.points.map((p) => (
                <li key={p}>
                  <Check size={19} />
                  {p}
                </li>
              ))}
            </ul>
            <h2>How we approach the work</h2>
            <p>{service.delivery}</p>
          </article>
          <aside className="detail-aside">
            <span className="tiny-label">Explore our services</span>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                className={s.slug === slug ? "active" : ""}
                to={`/services/${s.slug}`}
              >
                {s.title}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <div className="aside-callout">
              <h3>Start with the workflow.</h3>
              <p>
                Tell us what your team needs to do, and where the current
                process gets in the way.
              </p>
              <Link to="/contact" className="btn-default">
                Discuss your project
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
