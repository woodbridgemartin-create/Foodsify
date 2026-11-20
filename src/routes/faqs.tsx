import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHeading, JoinCta } from "@/components/site-sections";
import { faqs, pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/faqs")({ head: () => pageHead("Frequently Asked Questions", "Answers about Foodsify’s founding hospitality network, referral plans, UK coverage, customer experience and membership pricing."), component: Faqs });

function Faqs() {
  return <><PageHeading eyebrow="A little clarity" title="Good questions. Straight answers." description="Everything you need to know about the Foodsify founding network and what we’re building next." /><section className="section-band"><div className="container-shell max-w-4xl">{faqs.map(faq => <details className="faq-row" key={faq.question}><summary>{faq.question}<Plus size={20} className="shrink-0 transition-transform" /></summary><p className="section-copy">{faq.answer}</p></details>)}</div></section><JoinCta /></>;
}