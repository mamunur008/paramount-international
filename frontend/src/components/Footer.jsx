import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { BRAND, SERVICES, COMPANY_LINKS } from "../data/siteContent";
import { Logo } from "./Header";
export function ContactCTA() {
  return <section className="company-cta"><div className="container-c">
    <div><span className="tiny-label">Start with a conversation</span><h2>What does your business need next?</h2><p>Tell us about your operation. We’ll help define the software and the next step.</p></div>
    <Link to="/contact" className="btn-default">Discuss your project <ArrowUpRight size={18}/></Link>
  </div></section>;
}
export default function Footer() {
  return <footer className="site-footer company-footer"><div className="container-c">
    <div className="company-footer-grid">
      <div className="footer-company"><Logo/><p>Software engineering, enterprise solutions and a team you can work with directly.</p><span className="footer-established">Established 2022 · Dhaka, Bangladesh</span></div>
      <div><span className="tiny-label">Company</span><nav aria-label="Footer company navigation">{COMPANY_LINKS.map(l => <Link to={l.href} key={l.href}>{l.label}</Link>)}<Link to="/projects">Our projects</Link><Link to="/products">Our products</Link></nav></div>
      <div><span className="tiny-label">Services</span><nav aria-label="Footer services navigation">{SERVICES.map(s => <Link to={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</nav></div>
      <div><span className="tiny-label">Contact</span><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a><a href={BRAND.phoneHref}>{BRAND.phone}</a><p>{BRAND.address}</p><Link to="/contact" className="text-link">Send an enquiry <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Paramount International</span><Link to="/privacy">Privacy</Link><button onClick={() => window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"})}>Back to top<ArrowUp size={15}/></button></div>
  </div></footer>;
}
