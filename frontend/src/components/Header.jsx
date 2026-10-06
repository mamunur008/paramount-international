import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Menu, X, ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { NAV_LINKS, COMPANY_LINKS, BRAND } from "../data/siteContent";
import AppearanceToolbar from "./AppearanceToolbar";
export const Logo = ({ className = "" }) => (
  <Link to="/" className={`company-logo ${className}`} aria-label="Paramount International home">
    <img src="/assets/brand/paramount-mark.png" width="46" height="46" alt="" />
    <span className="brand-lockup"><span>Paramount<span className="brand-period">.</span></span><small>INTERNATIONAL</small></span>
  </Link>
);
export default function Header() {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); setCompanyOpen(false); }, [pathname]);
  const companyActive = COMPANY_LINKS.some(l => pathname === l.href);
  return <header className="site-header company-header" data-testid="site-header">
    <div className="header-utility"><div className="container-c">
      <span>Software engineering & business solutions <i /> Dhaka, Bangladesh</span>
      <a href={`mailto:${BRAND.email}`}><Mail size={12} />{BRAND.email}</a>
      <a href={BRAND.phoneHref}>{BRAND.phone}</a>
    </div></div>
    <div className="container-c header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">
        {NAV_LINKS.map(l => l.href === "/about" ?
          <div className="company-nav-group" key={l.href}>
            <NavLink to={l.href} className={companyActive ? "active" : ""}>Company</NavLink>
            <Dropdown.Root open={companyOpen} onOpenChange={setCompanyOpen} modal={false}>
              <Dropdown.Trigger className="company-menu-trigger" aria-label="Open company menu"><ChevronDown size={14} /></Dropdown.Trigger>
              <Dropdown.Portal><Dropdown.Content className="company-dropdown" align="start" sideOffset={25} collisionPadding={20}>
                {COMPANY_LINKS.map(c => <Dropdown.Item asChild key={c.href}><Link to={c.href}><span><strong>{c.label}</strong><small>{c.desc}</small></span><ArrowUpRight size={17}/></Link></Dropdown.Item>)}
              </Dropdown.Content></Dropdown.Portal>
            </Dropdown.Root>
          </div> : <NavLink key={l.href} to={l.href} end={l.href === "/"}>{l.label}</NavLink>
        )}
      </nav>
      <div className="header-actions">
        <NavLink to="/contact" className="header-contact">Contact us <ArrowUpRight size={16}/></NavLink>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="icon-button mobile-toggle" aria-label="Open navigation" data-testid="mobile-menu-toggle"><Menu size={23}/></Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="modal-overlay mobile-overlay" />
            <Dialog.Content className="mobile-menu company-mobile-menu">
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>
              <Dialog.Description className="sr-only">Explore Paramount International.</Dialog.Description>
              <div className="flex justify-between items-center"><Logo/><Dialog.Close className="icon-button" aria-label="Close navigation"><X/></Dialog.Close></div>
              <nav aria-label="Mobile navigation">
                {NAV_LINKS.map(l => <React.Fragment key={l.href}>
                  <NavLink to={l.href} end={l.href === "/"} onClick={() => setOpen(false)}>{l.label}<ArrowUpRight size={18}/></NavLink>
                  {l.href === "/about" && <div className="mobile-company-links">{COMPANY_LINKS.slice(1).map(c => <NavLink to={c.href} key={c.href} onClick={() => setOpen(false)}>{c.label}</NavLink>)}</div>}
                </React.Fragment>)}
                <NavLink to="/contact" onClick={() => setOpen(false)}>Contact us<ArrowUpRight size={18}/></NavLink>
              </nav>
              <a className="mobile-email" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
    <AppearanceToolbar />
  </header>;
}
