import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { company } from "@/lib/site-content";

const navigation = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "For Businesses", to: "/for-businesses" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">Skip to content</a>
    <header className="site-header relative z-20 bg-background">
      <div className="container-shell flex h-full items-center justify-between gap-6">
        <Link to="/" onClick={() => setOpen(false)}><Brand /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact: true }}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="brand" className="hidden h-11 px-5 sm:inline-flex"><Link to="/contact">Join the Network <ArrowUpRight /></Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-navigation lg:hidden">
        {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Button asChild variant="brand" className="mt-4 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Join the Network <ArrowUpRight /></Link></Button>
      </nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-ink py-14 text-on-ink">
    <div className="container-shell">
      <div className="footer-grid">
        <div className="footer-about"><Link to="/"><Brand footer /></Link><p className="mt-5 max-w-sm text-sm leading-7 text-on-ink-muted">Independent businesses. Shared customers.<br />A stronger hospitality community.</p><p className="mt-5 flex items-center gap-2 text-xs text-on-ink-muted"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Building our founding network across the UK</p></div>
        <div><h2 className="eyebrow text-on-ink">Explore</h2>{navigation.slice(1).map(item => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div>
        <div><h2 className="eyebrow text-on-ink">The small print</h2><Link to="/terms" className="footer-link">Terms and Conditions</Link><Link to="/privacy" className="footer-link">Privacy Policy</Link><Link to="/cookies" className="footer-link">Cookie Policy</Link></div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-5 border-t border-on-ink/15 pt-6 text-xs leading-6 text-on-ink-muted sm:flex-row">
        <p>{company.tradingName} is a trading name of {company.legalName}.<br />Company number: {company.number} · Registered office: {company.registeredOffice}</p>
        <p className="shrink-0">© 2026 Foodsify. All rights reserved.</p>
      </div>
    </div>
  </footer>;
}