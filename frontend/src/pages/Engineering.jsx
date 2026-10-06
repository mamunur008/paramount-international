import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { TECHNOLOGY } from "../data/siteContent";
import { ContactCTA } from "../components/Footer";
import { CompanyNavigation } from "../components/CompanySections";

export default function Engineering() {
  return <>
    <PageHeader eyebrow="Technology & strengths" title="Technology with a job to do." crumbs={[{label:"Home",to:"/"},{label:"Company",to:"/about"},{label:"Technology & Strengths"}]} />
    <CompanyNavigation />
    <section className="section-pad engineering-page">
      <div className="container-c">
        <div className="engineering-intro">
          <h2 className="title-h2">Modern tools.<br />Practical decisions.</h2>
          <div><p>Our strength is connecting business rules, software architecture and the people who use the system. We work across .NET and TypeScript platforms, with hands-on experience in membership systems, document processing, commercial operations and reporting.</p><p>A technology belongs in the solution when it helps deliver the required workflow, reliability or maintainability. We explain those choices and make them visible in the implementation.</p></div>
        </div>
        <div className="engineering-rows">{TECHNOLOGY.map((t,i)=><article key={t.title}><span>0{i+1}</span><div><h2>{t.title}</h2><p className="engineering-tools">{t.tools}</p></div><div><p>{t.desc}</p><Link to={t.href}>{t.evidence}<ArrowUpRight size={17}/></Link></div></article>)}</div>
        <div className="engineering-strengths"><span className="eyebrow">Our strengths</span><h2 className="title-h2">The experience is in the details.</h2><div><article><h3>Configurable products</h3><p>Phoenix and GoMembership experience informs how we separate reusable platform behaviour from customer-specific rules.</p></article><article><h3>Information at scale</h3><p>The Wood document project brings experience in OCR, metadata extraction, indexing and enterprise retrieval.</p></article><article><h3>Connected business domains</h3><p>Catena UK demonstrates catalogue, rates, sales, subscriptions and accounting within a shared administration environment.</p></article></div></div>
      </div>
    </section>
    <ContactCTA />
  </>;
}
