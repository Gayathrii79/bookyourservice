import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Search, MousePointerClick, MessageSquarePlus, PhoneCall,
  ShieldCheck, Clock, Network, HeartHandshake, BadgeCheck, Wallet,
  Sparkles,
} from "lucide-react";
import * as Icons from "lucide-react";
import { CategorySearch } from "@/components/CategorySearch";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";
import { useEnquiry } from "@/context/enquiry-context";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroIllustration from "@/assets/hero-illustration.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// (Hero uses a single premium illustration — no photo collage.)


// Curated popular sub-services (category slug + sub name).
const popularServices: { category: string; slug: string; sub: string; icon: keyof typeof Icons }[] = [
  { category: "AC & Appliances", slug: "ac-appliances", sub: "AC Service", icon: "AirVent" },
  { category: "Home Services", slug: "home-services", sub: "Home Deep Cleaning", icon: "Sparkles" },
  { category: "Electrical", slug: "electrical", sub: "Electrician Visit", icon: "Zap" },
  { category: "Plumbing", slug: "plumbing", sub: "Tap & Mixer Repair", icon: "Wrench" },
  { category: "Beauty & Wellness", slug: "beauty-wellness", sub: "Salon at Home", icon: "Scissors" },
  { category: "Automobile", slug: "automobile", sub: "Car Service", icon: "Car" },
  { category: "Health", slug: "health", sub: "Nursing at Home", icon: "HeartPulse" },
  { category: "Moving & Logistics", slug: "moving-logistics", sub: "Home Shifting", icon: "Truck" },
];

const faqs = [
  { q: "How does BookYourService work?", a: "Browse or search a service category, submit a short enquiry with your details, and our team calls you back to connect you with a vetted expert." },
  { q: "Is it free to submit an enquiry?", a: "Yes. Submitting an enquiry is completely free — you only pay the provider for the service delivered." },
  { q: "How fast will I hear back?", a: "Most enquiries receive a callback within a few hours during working hours. Urgent requests are prioritised." },
  { q: "Are your service providers verified?", a: "Every provider we recommend is personally vetted for quality, reliability, and fair pricing before being added to our network." },
  { q: "Which cities do you operate in?", a: "We're currently expanding across major cities in India. Submit an enquiry and we'll confirm availability in your area." },
  { q: "How do I contact you directly?", a: "Reach us anytime at bookyourservicebys@gmail.com or on Instagram @bookyourservice_bys." },
];

function HomePage() {
  const { open } = useEnquiry();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* white → light red gradient background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #fff6f6 55%, #ffe9e9 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container-x pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Trusted service discovery
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                Every Service You Need,{" "}
                <span className="text-primary">Just One Click</span> Away.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Discover trusted professionals across 30+ categories.
                Choose your service, submit an enquiry, and our team will
                connect you with the right expert.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => open()} className="btn-primary">
                  Request Service <ArrowRight size={16} />
                </button>
                <Link to="/services" className="btn-secondary">
                  Browse Services
                </Link>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { n: "30+", l: "Categories" },
                  { n: "24hr", l: "Response" },
                  { n: "100%", l: "Free enquiry" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-semibold text-foreground">{s.n}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-elevate)]">
                <img
                  src={heroIllustration}
                  alt="BookYourService professionals — electrician, plumber, cleaner and beautician ready to help at home"
                  width={1280}
                  height={1024}
                  className="block h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search categories */}
      <section className="container-x -mt-2 pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Find a service in seconds
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Search across all 30 categories — try “Ele”, “Plum” or “Beauty”.
          </p>
        </div>
        <div className="mt-6">
          <CategorySearch />
        </div>
      </section>

      {/* Popular services (sub-services) */}
      <section className="container-x py-14 md:py-16">
        <SectionHeading
          eyebrow="Popular"
          title="Most requested services"
          subtitle="A quick look at what customers ask us for every day."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularServices.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[s.icon] ?? Sparkles;
            return (
              <motion.button
                key={s.sub}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                onClick={() => open(`${s.category} — ${s.sub}`)}
                className="card-surface card-hover group flex items-center gap-3 p-4 text-left"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-foreground">{s.sub}</span>
                  <span className="block truncate text-xs text-muted-foreground">{s.category}</span>
                </span>
                <ArrowRight size={16} className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* All categories — compact grid */}
      <section className="container-x py-14 md:py-16">
        <SectionHeading
          eyebrow="Browse"
          title="Explore all categories"
          subtitle="From everyday help to premium concierge — pick a category to see every service inside."
        />
        <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="btn-secondary">View services page <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-14 md:py-20">
        <SectionHeading eyebrow="How it works" title="Simple, from start to finish" />
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {[
            { icon: Search, title: "Browse Services", text: "Explore categories that match what you need." },
            { icon: MousePointerClick, title: "Choose a Service", text: "Pick the exact service and tell us what's up." },
            { icon: MessageSquarePlus, title: "Submit Enquiry", text: "Share your name, phone and a short message." },
            { icon: PhoneCall, title: "We'll Contact You", text: "Our team calls back and arranges the right expert." },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface text-primary shadow-[var(--shadow-soft)]">
                <s.icon size={22} />
              </div>
              <div className="mt-5 text-center">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Step {i + 1}</div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-x py-14 md:py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built on trust, tuned for you"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BadgeCheck, title: "Trusted Professionals", text: "Every provider is personally vetted before we recommend." },
            { icon: Clock, title: "Fast Response", text: "Our team responds to enquiries typically within a few hours." },
            { icon: Network, title: "Wide Service Network", text: "30+ categories covering everything you need in daily life." },
            { icon: HeartHandshake, title: "Customer-Focused", text: "We listen carefully and stay with you through the process." },
            { icon: ShieldCheck, title: "Reliable Assistance", text: "Consistent quality, transparent communication, no surprises." },
            { icon: Wallet, title: "Affordable Solutions", text: "Honest pricing from providers we trust to be fair." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card-surface card-hover p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 md:py-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle="Everything you need to know before submitting an enquiry." />
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          </div>
          <h2 className="relative text-3xl font-semibold tracking-tight md:text-4xl">
            Need a Service Today?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 md:text-base">
            Tell us what you need. Our team will reach out and take care of the rest.
          </p>
          <button
            onClick={() => open()}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-medium text-primary shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
          >
            Request Service <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </>
  );
}
