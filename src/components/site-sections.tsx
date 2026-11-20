import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Store, Search, Megaphone, Banknote, Users, TrendingUp, MapPin, HeartHandshake, CalendarDays, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/site-content";

const stepIcons = [Store, Search, Megaphone, Banknote];
export function Steps() {
  return <div className="step-grid">{steps.map((step, index) => {
    const Icon = stepIcons[index] ?? Store;
    return <article className="step-item" key={step.title}><span className="step-number">0{index + 1}</span><div className="step-icon"><Icon size={23} strokeWidth={1.6} /></div><h3>{step.title}</h3><p>{step.description}</p></article>;
  })}</div>;
}

export function JoinCta() {
  return <section className="cta-band"><div className="container-shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow mb-3">Be part of the beginning</p><h2 className="section-title">Let’s grow something together.</h2><p className="section-copy mt-4 max-w-xl">We’re building our founding network. Be among the independent businesses shaping what comes next.</p></div><Button asChild variant="ink" size="lg"><Link to="/contact">Join the Network <ArrowUpRight /></Link></Button></div></section>;
}

export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-heading bg-muted"><div className="container-shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="section-copy">{description}</p></div></section>;
}

const benefits = [
  { icon: TrendingUp, title: "A new way to earn", text: "Turn recommendations into additional revenue, with agreed referral fees for qualifying purchases." },
  { icon: Users, title: "More people through your door", text: "Reach new customers through the audiences and communities of other independent businesses." },
  { icon: HeartHandshake, title: "Independent, not alone", text: "Build genuine relationships with hospitality businesses that share your ambition." },
  { icon: Megaphone, title: "Make your audience go further", text: "Promote other members through your existing social channels and customer community." },
  { icon: MapPin, title: "Local roots. UK-wide reach.", text: "Connect with businesses in your neighbourhood, neighbouring towns and further afield." },
  { icon: CalendarDays, title: "Connections beyond the screen", text: "Take part in optional monthly networking meetups as the network develops." },
];
export function Benefits({ full = false }: { full?: boolean }) {
  return <div className="benefit-grid">{(full ? benefits : benefits.slice(0, 3)).map(({ icon: Icon, title, text }) => <article className="benefit-item" key={title}><Icon size={28} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

export function TechnologyNote() {
  return <div className="mt-12 flex items-start gap-4 border-l-2 border-primary bg-muted p-6"><Smartphone className="mt-1 shrink-0" size={21} /><div><h3 className="font-semibold">A simple idea. Technology in development.</h3><p className="section-copy mt-2 text-sm">We’re developing the technology to help businesses generate and track referrals. The referral system is not live yet. Our intention is a simple customer experience, without an app download or account.</p></div></div>;
}

export function TextLink({ children, to }: { children: React.ReactNode; to: "/how-it-works" | "/for-businesses" | "/contact" | "/faqs" }) {
  return <Button asChild variant="link" className="h-auto p-0 text-foreground"><Link to={to}>{children} <ArrowRight /></Link></Button>;
}