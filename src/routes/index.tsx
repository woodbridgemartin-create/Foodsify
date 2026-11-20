import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Utensils, Coffee, Beer, Croissant, CakeSlice, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Steps, Benefits, JoinCta, TextLink } from "@/components/site-sections";
import { pageHead } from "@/lib/site-content";
import heroPhoto from "@/assets/restaurant-hero.webp";
import communityPhoto from "@/assets/cafe-community.webp";

export const Route = createFileRoute("/")({
  head: () => pageHead("Independent hospitality. Helping each other grow.", "Foodsify is building a UK-wide network where independent hospitality businesses promote one another, share customers and earn referral income."),
  component: Index,
});

function Index() {
  const businessTypes = [{ icon: Utensils, label: "Restaurants" }, { icon: Coffee, label: "Cafés" }, { icon: Beer, label: "Pubs" }, { icon: ShoppingBag, label: "Takeaways" }, { icon: Croissant, label: "Bakeries" }, { icon: CakeSlice, label: "Dessert shops" }];
  return <>
    <section className="hero">
      <img className="hero-photo" src={heroPhoto} alt="A welcoming independent neighbourhood restaurant with timber tables, plants and an open kitchen" width="1672" height="940" fetchPriority="high" />
      <div className="container-shell hero-content">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-on-ink/30 px-3.5 py-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /><p className="eyebrow text-on-ink">The Foodsify founding network</p></div>
        <h1>Independent hospitality<br className="hidden sm:block" /> businesses.<br /> <span className="text-primary">Helping each other grow.</span></h1>
        <p className="hero-description">Foodsify is building a UK-wide network where independent hospitality businesses promote one another, share customers and earn referral income.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4"><Button asChild variant="brand" size="lg"><Link to="/contact">Join the Network <ArrowUpRight /></Link></Button><Button asChild variant="heroLink" size="lg" className="px-2"><Link to="/how-it-works">See how it works <ArrowRight /></Link></Button></div>
        <p className="hero-note"><MapPin size={14} /> Local connections. UK-wide possibilities.</p>
      </div>
    </section>
    <div className="business-strip"><div className="container-shell"><div className="business-types">{businessTypes.map(({icon: Icon, label}) => <span key={label}><Icon size={17} strokeWidth={1.5} />{label}</span>)}</div></div></div>
    <section className="section-band"><div className="container-shell intro-grid"><div><p className="eyebrow mb-4">Good business starts with a recommendation</p><h2 className="section-title">Your next customer could<br className="hidden sm:block" /> come from next door.<br /><span className="text-muted-foreground">Or the next town over.</span></h2></div><div><p className="section-copy">Independent hospitality has always been about people. Foodsify puts that connection to work—bringing businesses together to recommend one another and grow together.</p><p className="section-copy mt-4">When a recommendation leads to a qualifying purchase at another member business, the referring business earns an agreed fee. More than a directory. Not a delivery service. A network built on mutual support.</p><div className="mt-5"><TextLink to="/how-it-works">A simple idea with shared potential</TextLink></div></div></div></section>
    <section className="section-band bg-muted"><div className="container-shell"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow mb-4">How it works</p><h2 className="section-title">Four steps. A stronger network.</h2></div><TextLink to="/how-it-works">Explore how it works</TextLink></div><Steps /><p className="mt-9 text-xs leading-6 text-muted-foreground">We’re building our founding network and developing our referral technology. Referral tracking and payments are not live yet.</p></div></section>
    <section className="section-band"><div className="container-shell"><p className="eyebrow mb-4">Built for independents</p><h2 className="section-title mb-12">Stronger together. Better for business.</h2><Benefits /><div className="mt-9"><TextLink to="/for-businesses">Discover the benefits for your business</TextLink></div></div></section>
    <section className="section-band border-t border-border"><div className="container-shell grid items-center gap-12 md:grid-cols-2"><img src={communityPhoto} alt="Independent hospitality owners sharing a conversation at a neighbourhood café" loading="lazy" width="1448" height="1086" className="aspect-[4/3] w-full rounded-md object-cover" /><div><p className="eyebrow mb-4">Rooted locally. Connected nationally.</p><h2 className="section-title">From your high street<br />to the whole of the UK.</h2><p className="section-copy mt-6">A café in Manchester. A bakery in Bristol. A neighbourhood pub in Edinburgh. Our ambition is to connect independent hospitality businesses wherever they call home.</p><p className="section-copy mt-4">We’re creating a founding network where local relationships can open up opportunities further afield. Real businesses, supporting real businesses.</p><div className="mt-7"><TextLink to="/for-businesses">Find your place in the network</TextLink></div></div></div></section>
    <JoinCta />
  </>;
}
