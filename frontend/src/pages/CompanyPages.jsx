import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { CompanyNavigation, TeamPreview } from "../components/CompanySections";
import { ContactCTA } from "../components/Footer";
import { ProcessSection } from "../components/SiteSections";
import { BRAND, TEAM } from "../data/siteContent";

export function CompanyPage() {
  return <>
    <PageHeader eyebrow="Our company" title="Software expertise. Personal commitment." crumbs={[{label:"Home",to:"/"},{label:"Company"}]}/>
    <CompanyNavigation/>
    <section className="section-pad"><div className="container-c company-about-grid">
      <article className="prose-content"><span className="eyebrow">About Paramount International</span><h2>Close to the business.<br/>Accountable for the work.</h2><p className="lead">Paramount International is a Bangladesh-based software company, established on {BRAND.established}. We develop business applications, connect enterprise systems and support software through its working life.</p><p>We start by understanding how your team operates: the information it needs, the decisions it makes and the steps that slow it down. That understanding shapes the interface, the business rules and the delivery plan.</p><p>Our leadership combines commercial direction, software architecture, operational coordination and business development. Our technical experience spans membership technology, document intelligence, sales analytics and configurable enterprise platforms.</p><Link to="/projects" className="text-link">Explore the work behind our experience<ArrowUpRight size={18}/></Link></article>
      <aside className="company-fact-panel"><span className="tiny-label">Company at a glance</span><dl><div><dt>Established</dt><dd>{BRAND.established}</dd></div><div><dt>Based in</dt><dd>Banani, Dhaka, Bangladesh</dd></div><div><dt>Focus</dt><dd>Business software & enterprise solutions</dd></div><div><dt>Leadership</dt><dd>Founder & CEO, CTO, COO and BDM</dd></div><div><dt>Trade licence</dt><dd>{BRAND.licence}</dd></div></dl><Link to="/contact" className="btn-secondary">Speak to our team<ArrowUpRight size={16}/></Link></aside>
    </div></section>
    <section className="company-purpose section-pad"><div className="container-c"><div><span className="tiny-label">Our purpose</span><h2>Make business systems<br/>work better for people.</h2></div><div><article><h3>Our mission</h3><p>Build useful, maintainable software around real business workflows, with a clear scope and a dependable route from development to everyday use.</p></article><article><h3>Our vision</h3><p>Become a trusted technology partner for organisations that want connected operations, accessible information and software they can continue to improve.</p></article></div></div></section>
    <TeamPreview/><ProcessSection/><ContactCTA/>
  </>;
}

const biographies = [
  { paragraphs:["Md. Anamul Haque Sarker leads Paramount International's direction, commercial relationships and long-term development. As founder and proprietor, he provides the ownership oversight behind the company's commitments.","His role connects business priorities with delivery: understanding the engagement, supporting relationships and keeping the company focused on practical value for clients."],focus:["Company direction","Business relationships","Executive oversight"] },
  { paragraphs:["Md. Mamunur Rashid leads software architecture, product engineering and technical delivery. His software career began in 2001 and includes engineering and product leadership experience through Azolve and JustGo.","His earlier work spans the Phoenix configurable platform, GoMembership / JustGo, Wood's document-processing solution and sales-reporting systems. He brings that experience to business-rule design, APIs, data architecture and the development of maintainable products."],focus:["Software architecture","Product engineering","Technical delivery"] },
  { paragraphs:["Mohammad Amiruzzaman coordinates Paramount's operations and delivery activities, connecting the practical needs of clients with the work of the team.","His responsibilities include planning, communication, internal coordination and follow-through. He helps keep responsibilities clear as an engagement moves from an agreed scope to implementation and support."],focus:["Operational planning","Delivery coordination","Client communication"] },
  { paragraphs:["Shovon supports business development and customer relationships at Paramount International. He helps prospective clients explain their requirements and turn an initial conversation into a useful engagement brief.","His work connects enquiry handling, proposal coordination and client follow-up with the technical and operational teams."],focus:["Business development","Proposal coordination","Client relationships"] }
];
export function LeadershipPage() {
  return <>
    <PageHeader eyebrow="Leadership & team" title="Meet the people behind Paramount." crumbs={[{label:"Home",to:"/"},{label:"Company",to:"/about"},{label:"Leadership & Team"}]}/>
    <CompanyNavigation/>
    <section className="section-pad"><div className="container-c">
      <div className="leadership-page-intro"><h2>Direct relationships.<br/>Clear responsibilities.</h2><p>Our leaders connect business direction, engineering and day-to-day delivery. You know who is responsible for the conversation and for the work that follows.</p></div>
      <div className="leader-profiles">{TEAM.map((p,i) => <article className="leader-profile reveal" key={p.name} id={`person-${i}`}><div className="leader-profile-photo"><img src={p.image} alt={p.name} loading="lazy"/></div><div><span className="person-role">{p.role}</span><h2>{p.name}</h2>{biographies[i].paragraphs.map(t => <p key={t}>{t}</p>)}<ul>{biographies[i].focus.map(f => <li key={f}>{f}</li>)}</ul>{i===1 && <Link to="/engineering" className="text-link">Technical strengths & project experience<ArrowUpRight size={17}/></Link>}</div></article>)}</div>
      <section className="delivery-team"><span className="eyebrow">The wider team</span><h2 className="title-h2">The people who design, build and support.</h2><div>{[["10","Software developers","Application, API and business-domain engineering."],["2","IT support specialists","Application support and technical troubleshooting."],["1","UI/UX engineer","Interface design and clear user journeys."],["1","Accounts & administration","Finance, records and operational administration."]].map(([n,title,desc]) => <article key={title}><strong>{n}</strong><h3>{title}</h3><p>{desc}</p></article>)}</div><p>Technical delivery is led by the CTO, with operational coordination through the COO and commercial direction from the Founder & CEO.</p></section>
    </div></section><ContactCTA/>
  </>;
}
