import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Workflow,
  Layers3,
  CloudCog,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  LoaderCircle,
} from "lucide-react";
import {
  BRAND,
  SERVICES,
  PROJECTS,
  PRODUCTS,
  TEAM,
  FAQ,
} from "../data/siteContent";
import Accordion from "./Accordion";

const icons = { Code2, Workflow, Layers3, CloudCog };

export function SectionIntro({ label, title, desc, link, dark = false }) {
  return (
    <div className={`section-intro reveal ${dark ? "text-white" : ""}`}>
      <div>
        <span className="eyebrow">{label}</span>
        <h2 className="title-h2 mt-5">{title}</h2>
      </div>
      {(desc || link) && (
        <div className="section-intro-aside">
          {desc && <p>{desc}</p>}
          {link && (
            <Link className="text-link" to={link.href}>
              {link.label}
              <ArrowUpRight size={19} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-section" data-testid="hero">
      <img
        className="hero-art"
        src="/assets/codeio/hero-bg-shape.png"
        alt=""
        aria-hidden="true"
      />
      <div className="container-c relative">
        <div className="hero-copy">
          <span className="eyebrow animate-fadein">
            Software engineering · Dhaka, Bangladesh
          </span>
          <h1 className="hero-heading animate-fadein" data-cursor="-opaque">
            Software built for
            <br />
            the way you <span>work.</span>
          </h1>
          <p className="hero-description animate-fadein">
            We turn complex business workflows into clear, connected software.
            Enterprise platforms, custom applications and a team that stays with
            the product.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadein">
            <Link to="/projects" className="btn-default">
              Explore our work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Tell us what you’re building <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" /> Based in Bangladesh. Built for
            connected businesses.
          </div>
        </div>
        <div className="hero-work reveal">
          <div className="hero-work-copy">
            <span className="tiny-label">Inside the work / 01</span>
            <h2>
              Clarity in
              <br />
              every number.
            </h2>
            <p>
              Meet SalesTrace. A practical workspace for tracing sales,
              reviewing exceptions and understanding performance.
            </p>
            <Link to="/projects/salestrace" className="text-link">
              Explore SalesTrace <ArrowUpRight size={18} />
            </Link>
            <div className="hero-work-tags">
              <span>Analytics</span>
              <span>Reporting</span>
              <span>Data workflows</span>
            </div>
          </div>
          <Link
            to="/projects/salestrace"
            className="hero-screen"
            data-cursor-text="Explore"
            aria-label="Explore the SalesTrace project"
          >
            <div className="screen-toolbar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>SalesTrace · Product showcase</span>
              <ArrowUpRight size={14} />
            </div>
            <img
              src={PROJECTS[0].image}
              alt={PROJECTS[0].imageAlt}
              fetchPriority="high"
              width="1919"
              height="946"
            />
          </Link>
        </div>
        <div className="capability-strip">
          <div>
            <strong>10</strong>
            <span>Software developers</span>
          </div>
          <div>
            <strong>2022</strong>
            <span>Company established</span>
          </div>
          <div>
            <strong>End to end</strong>
            <span>Design, build & support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ full = false }) {
  return (
    <section className="section-pad" id="services">
      <div className="container-c">
        <SectionIntro
          label="What we do"
          title={
            <>
              The right software.
              <br />A clear way forward.
            </>
          }
          desc="From a specific workflow to an integrated business platform, we bring product thinking and hands-on engineering to the same table."
        />
        <div className="service-list">
          {SERVICES.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Link
                to={`/services/${s.slug}`}
                className="service-row group reveal"
                key={s.slug}
              >
                <span className="service-number">0{i + 1}</span>
                <Icon size={30} strokeWidth={1.35} className="service-icon" />
                <div>
                  <h3>{s.title}</h3>
                  {full && <span className="service-short">{s.short}</span>}
                </div>
                <p>{s.desc}</p>
                <span className="round-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project: p, featured = false }) {
  return (
    <article
      className={`project-card reveal ${featured ? "project-featured" : ""}`}
    >
      <Link
        to={`/projects/${p.slug}`}
        className={`project-cover ${p.visual}`}
        data-cursor-text="View"
        aria-label={`View ${p.title}`}
      >
        <img src={p.image} alt={p.imageAlt} loading="lazy" />
        <span className="project-image-label">
          {p.imageLabel || (p.visual === "screenshot"
            ? "Application screenshot"
            : "Illustrative cover")}
        </span>
        <span className="project-open">
          <ArrowUpRight />
        </span>
      </Link>
      <div className="project-body">
        <div className="project-category">
          <span>{p.category}</span>
          <span>{p.kind}</span>
        </div>
        <h3>
          <Link to={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        <p>{p.desc}</p>
      </div>
    </article>
  );
}

export function ProjectsSection({ full = false }) {
  const [filter, setFilter] = useState("all");
  const items = PROJECTS.filter(
    (p) =>
      filter === "all" ||
      (filter === "products"
        ? !p.kind.startsWith("Leadership")
        : p.kind.startsWith("Leadership")),
  );
  return (
    <section className="section-pad projects-section" id="projects">
      <div className="container-c">
        <SectionIntro
          label="Selected work"
          title={
            <>
              Behind every screen,
              <br />a business moving forward.
            </>
          }
          desc="Explore our software portfolio and the enterprise experience of the people building it."
          link={!full ? { label: "All projects", href: "/projects" } : null}
        />
        {full && (
          <div
            className="filter-list"
            role="group"
            aria-label="Filter projects"
          >
            {[
              ["all", "All work"],
              ["products", "Product portfolio"],
              ["experience", "Leadership experience"],
            ].map(([id, title]) => (
              <button
                key={id}
                type="button"
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {title}
              </button>
            ))}
          </div>
        )}
        <div className="project-grid" key={filter}>
          {items.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <p className="portfolio-note">
          JustGo (formerly GoMembership) and IScanner represent our technical
          leadership’s earlier professional experience. Product screenshots are
          identified separately from illustrative images.
        </p>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section className="dark-section product-section section-pad" id="products">
      <div className="container-c">
        <SectionIntro
          dark
          label="Our products"
          title={
            <>
              Less switching.
              <br />
              More working together.
            </>
          }
          desc="Connect the essential parts of your operation with software built around a shared workflow."
        />
        <Tabs.Root defaultValue="enterprise" className="product-tabs">
          <Tabs.List
            className="product-tabs-list"
            aria-label="Explore our products"
          >
            {PRODUCTS.map((p) => (
              <Tabs.Trigger key={p.id} value={p.id}>
                {p.title}
                <ArrowUpRight size={18} />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {PRODUCTS.map((p) => (
            <Tabs.Content
              key={p.id}
              value={p.id}
              className="product-tab-content"
            >
              <div className="product-summary">
                <span className="tiny-label">Paramount product portfolio</span>
                <h3>{p.subtitle}</h3>
                <p>{p.desc}</p>
                <Link to="/contact" className="btn-default">
                  Request a walkthrough
                </Link>
                <img
                  src={`/assets/codeio/${p.id === "enterprise" ? "feature-image-2.png" : "feature-image-3.png"}`}
                  alt=""
                  loading="lazy"
                  className="product-art"
                />
              </div>
              <div className="product-modules">
                {p.modules.map(([title, desc], i) => (
                  <div key={title}>
                    <span>0{i + 1}</span>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-pad" id="about">
      <div className="container-c about-layout">
        <div className="about-image reveal">
          <img
            src="/assets/codeio/why-choose-image-1.jpg"
            alt="An architectural stairway illustrating a considered path forward"
            loading="lazy"
          />
          <div className="about-image-note">
            <span>PARAMOUNT INTERNATIONAL</span>
            <strong>
              Global vision.
              <br />
              Practical delivery.
            </strong>
          </div>
        </div>
        <div className="about-copy reveal">
          <span className="eyebrow">A team you can talk to</span>
          <h2 className="title-h2">
            Engineering depth.
            <br />A personal commitment.
          </h2>
          <p>
            Paramount International is a Bangladesh-based software company,
            established on {BRAND.established}. We bring technical leadership, product
            development and day-to-day delivery into one team.
          </p>
          <p>
            Our experience spans membership technology, enterprise document
            workflows, sales analytics and connected business platforms. We use
            that experience to understand your operation and build software your
            people can work with.
          </p>
          <div className="team-composition">
            <div>
              <strong>10</strong>
              <span>Developers</span>
            </div>
            <div>
              <strong>2</strong>
              <span>IT support</span>
            </div>
            <div>
              <strong>1</strong>
              <span>UI/UX engineer</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Accounts & admin</span>
            </div>
          </div>
          <Link to="/about#leadership" className="text-link">
            Meet the leadership <ArrowUpRight size={19} />
          </Link>
          <Link to="/engineering" className="text-link ml-6">
            Our engineering strengths <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    [
      "Understand",
      "Map the users, the workflow and the problem worth solving.",
    ],
    [
      "Design",
      "Agree the scope, shape the experience and define a first release.",
    ],
    [
      "Build",
      "Develop in reviewable increments and test the working software.",
    ],
    [
      "Keep improving",
      "Deploy, support and refine the product using real feedback.",
    ],
  ];
  return (
    <section className="process-section section-pad">
      <div className="container-c">
        <SectionIntro
          label="How we work"
          title="A clear path from idea to everyday use."
          desc="Close collaboration, visible progress and decisions grounded in the needs of your business."
        />
        <div className="process-grid">
          {steps.map(([title, desc], i) => (
            <div className="reveal" key={title}>
              <span className="process-no">
                0{i + 1}
                <ArrowRight size={18} />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadershipSection() {
  return (
    <section className="section-pad" id="leadership">
      <div className="container-c">
        <SectionIntro
          label="Our leadership"
          title="The people behind the work."
          desc="Business direction, technical judgement and day-to-day delivery, connected by one team."
        />
        <div className="leadership-grid">
          {TEAM.map((p) => (
            <article key={p.name} className="person-card reveal">
              <div className="person-photo">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <span className="person-role">{p.role}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section-pad" id="faq">
      <div className="container-c faq-layout">
        <div className="reveal">
          <span className="eyebrow">A few useful answers</span>
          <h2 className="title-h2 mt-5">
            Before we
            <br />
            get started.
          </h2>
          <p className="mt-5 mb-6">
            Have something more specific in mind?
            <br />
            We’d like to hear about it.
          </p>
          <Link to="/contact" className="text-link">
            Ask our team <ArrowUpRight size={18} />
          </Link>
        </div>
        <Accordion items={FAQ} testId="home-faq" />
      </div>
    </section>
  );
}

export function ScreenshotGallery({ screenshots }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  if (!screenshots?.length) return null;
  const current = screenshots[selected];
  const move = (delta) =>
    setSelected((i) => (i + delta + screenshots.length) % screenshots.length);
  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <span className="eyebrow">Inside the application</span>
      <h2 className="title-h2 mt-5 mb-8" id="gallery-heading">
        See the workflow.
      </h2>
      <div className="gallery-grid">
        {screenshots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className="gallery-item"
            onClick={() => {
              setSelected(i);
              setOpen(true);
            }}
            data-cursor-text="Enlarge"
            aria-label={`Enlarge ${s.title}`}
          >
            <div>
              <img src={s.src} alt={s.title} loading="lazy" />
              <span>
                <Maximize2 size={18} />
              </span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </button>
        ))}
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="modal-overlay" />
          <Dialog.Content
            className="gallery-modal"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") move(1);
              if (e.key === "ArrowLeft") move(-1);
            }}
          >
            <div className="gallery-modal-bar">
              <div>
                <Dialog.Title>{current.title}</Dialog.Title>
                <Dialog.Description>{current.desc}</Dialog.Description>
              </div>
              <Dialog.Close
                className="icon-button"
                aria-label="Close screenshot"
              >
                <X size={22} />
              </Dialog.Close>
            </div>
            <div className="gallery-modal-image">
              <img src={current.src} alt={current.title} />
            </div>
            <div className="gallery-controls">
              <button
                onClick={() => move(-1)}
                className="icon-button"
                aria-label="Previous screenshot"
              >
                <ChevronLeft />
              </button>
              <span>
                {selected + 1} / {screenshots.length}
              </span>
              <a
                href={current.src}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open full size <ArrowUpRight size={16} />
              </a>
              <button
                onClick={() => move(1)}
                className="icon-button"
                aria-label="Next screenshot"
              >
                <ChevronRight />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="contact-section dark-section section-pad" id="contact">
      <div className="container-c contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Start a conversation</span>
          <h2 className="title-h2">
            What would make
            <br />
            your business
            <br />
            <em>work better?</em>
          </h2>
          <p>
            Tell us about the workflow, the challenge or the product you have in
            mind. We’ll help you work out the next step.
          </p>
          <div className="contact-methods">
            <a href={`mailto:${BRAND.email}`}>
              <Mail size={18} />
              <span>{BRAND.email}</span>
            </a>
            <a href={BRAND.phoneHref}>
              <Phone size={18} />
              <span>{BRAND.phone}</span>
            </a>
            <div>
              <MapPin size={18} />
              <span>{BRAND.address}</span>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={submit}
          className="contact-form"
          data-testid="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>
              Leave this empty
              <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </p>
          <div className="form-grid">
            <label>
              Your name <span>*</span>
              <input
                name="name"
                autoComplete="name"
                required
                maxLength="120"
                placeholder="How should we address you?"
              />
            </label>
            <label>
              Organisation
              <input
                name="organization"
                autoComplete="organization"
                maxLength="160"
                placeholder="Company or team"
              />
            </label>
            <label>
              Email address <span>*</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength="200"
                placeholder="you@company.com"
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength="40"
                placeholder="Include your country code"
              />
            </label>
          </div>
          <label>
            What can we help with?
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Custom software development</option>
              <option>Enterprise platform / ERP</option>
              <option>Employee management</option>
              <option>Product engineering</option>
              <option>Cloud delivery & support</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Tell us about your project <span>*</span>
            <textarea
              name="message"
              rows="4"
              required
              minLength="10"
              maxLength="5000"
              placeholder="What are you trying to achieve?"
            />
          </label>
          <p className="form-privacy">
            We use these details to respond to your enquiry.{" "}
            <Link to="/privacy">Privacy information</Link>
          </p>
          <button
            type="submit"
            className="btn-default form-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <LoaderCircle size={18} className="animate-spin mr-2" />
                Sending…
              </>
            ) : (
              "Send your enquiry"
            )}
          </button>
          <div aria-live="polite" role="status">
            {status === "sent" && (
              <p className="form-message success">
                <Check size={18} />
                Thank you. Your enquiry has been sent. Our team will be in
                touch.
              </p>
            )}
            {status === "error" && (
              <p className="form-message error">
                We couldn’t send your enquiry. Please try again or email{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
