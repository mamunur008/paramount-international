import React from "react";
import { Link, useParams } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Accordion from "../components/Accordion";
import { CategoryList, CtaBox } from "../components/Sidebar";
import NotFound from "./NotFound";
import { SERVICES } from "../mock";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.items.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  const d = service.detail;

  return (
    <div data-testid="service-detail-page">
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/#services" }, { label: service.title }]}
      />

      <section className="section-pad">
        <div className="container-c grid lg:grid-cols-[1fr_2.1fr] gap-10 lg:gap-[60px]">
          <aside className="order-2 lg:order-1 space-y-[30px] lg:sticky lg:top-[100px] self-start">
            <CategoryList title="Our Services" items={SERVICES.items.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))} activeTo={`/services/${slug}`} />
            <CtaBox />
          </aside>

          <div className="order-1 lg:order-2">
            <img src={d.image} alt={service.title} className="w-full aspect-[1/0.65] lg:aspect-[1/0.55] object-cover rounded-[20px] lg:rounded-[30px] mb-8 lg:mb-10 reveal" />

            <div className="entry reveal">
              <h2 className="title-h2 mb-5" data-testid="service-headline">
                {d.headline}
              </h2>
              {d.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="check-list grid sm:grid-cols-2 gap-x-8 mt-8 mb-0" data-testid="service-features">
                {d.features.map((f) => (
                  <li key={f}>
                    <CircleCheck size={18} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 lg:mt-[60px] reveal">
              <h3 className="title-h3 mb-6">{d.benefitsTitle}</h3>
              <div className="grid sm:grid-cols-3 gap-5" data-testid="service-benefits">
                {d.benefits.map((b, i) => (
                  <div key={b.title} className="card-c p-6 relative overflow-hidden group">
                    <span className="text-sm font-semibold text-c-accent">0{i + 1}</span>
                    <h4 className="text-lg font-medium text-c-primary mt-3">{b.title}</h4>
                    <p className="mt-2 m-0 text-c-text/80 text-sm leading-[1.7]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-[60px] grid md:grid-cols-2 gap-6 lg:gap-[30px] items-center reveal">
              <img src={d.image2} alt="" className="w-full aspect-square object-cover rounded-[20px] lg:rounded-[30px]" />
              <div className="entry">
                <h3 className="title-h3 mb-4">{d.whyTitle}</h3>
                <p>{d.why}</p>
                <div className="mt-6">
                  <Link to="/#contact" className="btn-default" data-testid="service-detail-cta">
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-[60px] reveal">
              <h3 className="title-h3 mb-6">Frequently asked questions</h3>
              <Accordion items={d.faqs} testId="service-faq" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
