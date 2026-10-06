import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Code2, Workflow, Layers3, CloudCog, ArrowRight } from "lucide-react";
import { BRAND, TEAM, SERVICES, PROJECTS, COMPANY_LINKS } from "../data/siteContent";
import { SectionIntro } from "./SiteSections";
const icons = { Code2, Workflow, Layers3, CloudCog };
export function CompanyNavigation() {
  return <nav className="company-subnav" aria-label="Company pages"><div className="container-c">{COMPANY_LINKS.map(l => <NavLink key={l.href} to={l.href}>{l.label}</NavLink>)}</div></nav>;
}
export function CompanyHero() {
  const featured = PROJECTS.find(p => p.slug === "enterprise-platform");
  return <section className="company-hero" data-testid="hero">
    <img className="company-hero-art" src="/assets/codeio/hero-bg-shape.png" alt="" aria-hidden="true" width="1880" height="1151" data-testid="purple-hero-art"/>
    <div className="container-c">
    <div className="company-hero-grid">
      <div className="company-hero-copy">
        <span className="company-kicker"><span/>PARAMOUNT INTERNATIONAL</span>
        <h1>Business software.<br/><em>Built around you.</em></h1>
        <p>We design, develop and support the systems your business runs on. A software team in Dhaka, bringing your people, processes and information together.</p>
        <div className="company-hero-actions"><Link to="/services" className="btn-default">Explore our services<ArrowUpRight size={18}/></Link><Link to="/about" className="text-link">Get to know Paramount<ArrowRight size={18}/></Link></div>
        <div className="hero-company-note"><span>Discover. Develop. Deliver.</span><span>Working with you from first conversation to ongoing support.</span></div>
      </div>
      <div className="company-hero-visual">
        <div className="hero-evidence"><div className="hero-evidence-top"><span className="status-dot"/><span>Business systems in practice</span><span>01 / Catena UK</span></div>
          <Link to="/projects/enterprise-platform" aria-label="Explore the Catena UK project" className="hero-evidence-image"><img src={featured.image} alt={featured.imageAlt} fetchPriority="high" width="1365" height="635"/></Link>
          <div className="hero-evidence-caption"><div><strong>Connect the whole operation.</strong><span>Catalogue, sales, subscriptions and accounts.</span></div><Link to="/projects/enterprise-platform" className="icon-button" aria-label="View Catena UK case study"><ArrowUpRight size={20}/></Link></div>
        </div>
        <Link className="hero-people-link" to="/leadership"><span className="hero-avatars">{TEAM.map(p => <img src={p.image} alt="" key={p.name}/>)}</span><span><strong>People you can work with.</strong><small>Meet our leadership team</small></span><ArrowUpRight size={20}/></Link>
      </div>
    </div>
    <div className="company-facts"><div><strong>2022</strong><span>Company established</span></div><div><strong>10</strong><span>Software developers</span></div><div><strong>2</strong><span>IT support specialists</span></div><div><strong>Dhaka</strong><span>Our base. Your delivery team.</span></div></div>
  </div></section>;
}
export function CompanyServices() {
  return <section className="section-pad company-services"><div className="container-c">
    <SectionIntro label="Our services" title={<>The expertise to move<br/>your business forward.</>} desc="A focused application, a connected enterprise platform or a product that needs its next release. We help you choose the right starting point." link={{label:"View all services",href:"/services"}}/>
    <div className="company-service-grid">{SERVICES.map((s,i) => {const Icon=icons[s.icon];return <Link to={`/services/${s.slug}`} key={s.slug} className="company-service-card reveal"><div className="company-service-top"><Icon size={28} strokeWidth={1.5}/><span>0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p><span className="text-link">Explore this service<ArrowUpRight size={18}/></span></Link>;})}</div>
  </div></section>;
}
export function CompanyIntroduction() {
  return <section className="company-introduction section-pad"><div className="container-c company-intro-grid">
    <div><span className="eyebrow">Who we are</span><h2 className="title-h2">A company built on<br/>technical experience<br/>and direct relationships.</h2><Link to="/about" className="text-link">More about Paramount<ArrowUpRight size={18}/></Link></div>
    <div><p className="intro-lead">Paramount International brings software engineering and business delivery into one team.</p><p>Established on {BRAND.established}, we work with organisations that need more from their software: clearer information, connected workflows and systems that can adapt as the business changes.</p><p>Our technical leadership brings experience in membership platforms, enterprise document processing and commercial systems through earlier work with Azolve and JustGo.</p><div className="company-promises"><span>Direct access to leadership</span><span>Agreed scope and visible progress</span><span>Development through to support</span></div></div>
  </div></section>;
}
export function SelectedCompanyProjects() {
  const projects=["enterprise-platform","gomembership","salestrace"].map(slug => PROJECTS.find(p => p.slug === slug));
  return <section className="section-pad"><div className="container-c">
    <SectionIntro label="Selected projects" title="Experience you can explore." desc="See the systems, understand the business problem and discover how the software was developed." link={{label:"View all four projects",href:"/projects"}}/>
    <div className="company-project-grid">{projects.map(p => <article key={p.slug} className="company-project-card reveal"><Link to={`/projects/${p.slug}`} className="company-project-image"><img src={p.image} alt={p.imageAlt} loading="lazy"/><span><ArrowUpRight size={20}/></span></Link><span className="tiny-label">{p.category}</span><h3><Link to={`/projects/${p.slug}`}>{p.title}</Link></h3><p>{p.desc}</p><Link className="text-link" to={`/projects/${p.slug}`}>Read the case study<ArrowUpRight size={16}/></Link></article>)}</div>
    <p className="portfolio-note">GoMembership / JustGo and IScanner feature the earlier professional experience of our technical leadership. Each case study explains the project and contribution.</p>
  </div></section>;
}
export function TeamPreview() {
  return <section className="section-pad company-team-preview"><div className="container-c">
    <SectionIntro label="Our leadership" title="Know the people behind your project." desc="Commercial direction, technical judgement and day-to-day delivery. Meet the people responsible for the work." link={{label:"Leadership & team",href:"/leadership"}}/>
    <div className="company-team-grid">{TEAM.map((p,i) => <Link to={`/leadership#person-${i}`} className="company-team-card reveal" key={p.name}><div className="company-team-photo"><img src={p.image} alt={p.name} loading="lazy"/></div><span>{p.role}</span><h3>{p.name}</h3><ArrowUpRight size={18}/></Link>)}</div>
  </div></section>;
}
export function StrengthPreview() {
  return <section className="section-pad company-strength-preview"><div className="container-c"><div><span className="eyebrow">Technology & strengths</span><h2 className="title-h2">Engineering depth,<br/>applied to real work.</h2><Link to="/engineering" className="text-link">Explore our strengths<ArrowUpRight size={18}/></Link></div><div><p>From configurable membership products to searchable document archives and connected commercial services, our experience helps us choose technology for the problem in front of us.</p><ul>{["C# / .NET","TypeScript","React / Next.js","Node.js","PostgreSQL / SQL Server","REST / gRPC","Keycloak / APISIX","Docker / Kubernetes"].map(t => <li key={t}>{t}</li>)}</ul></div></div></section>;
}
