import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BookYourService" },
      {
        name: "description",
        content:
          "BookYourService (BYS) is your trusted platform for discovering reliable services. Learn about our mission and how we work.",
      },
      { property: "og:title", content: "About — BookYourService" },
      {
        property: "og:description",
        content:
          "Learn about BookYourService and how we connect customers with trusted professionals.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const faqs = [
  {
    q: "What is BookYourService?",
    a: "BookYourService (BYS) is a service discovery and enquiry platform. You browse categories, submit an enquiry, and our team personally connects you with the right professional.",
  },
  {
    q: "How do I submit an enquiry?",
    a: "Click 'Request Service' anywhere on the site, share your name, phone number and a short message. That's it — we'll take it from there.",
  },
  {
    q: "Do I need an account?",
    a: "No. There are no accounts, logins or apps to install. Just submit an enquiry and we call you back.",
  },
  {
    q: "How quickly will someone contact me?",
    a: "Our team responds typically within a few hours during business hours, and always within 24 hours.",
  },
  {
    q: "Is submitting an enquiry free?",
    a: "Yes. Submitting an enquiry is completely free. You only pay the service provider directly for the work you agree to.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="About us"
          title="About BookYourService"
          subtitle="Your trusted platform for discovering reliable services across many categories."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground md:text-[17px]">
          <p>
            BookYourService is your trusted platform for discovering reliable services across
            multiple categories. From home maintenance to business solutions, we make finding the
            right professional simple and hassle-free.
          </p>
          <p>
            Instead of searching across multiple platforms, customers can easily submit a service
            enquiry, and our team personally connects them with the right service provider.
          </p>
          <p>
            Our mission is to save your time while delivering trusted, reliable, and convenient
            service experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Trust", text: "Every provider is personally vetted." },
            {
              icon: HeartHandshake,
              title: "Service",
              text: "We stay with you through the process.",
            },
            { icon: Sparkles, title: "Simplicity", text: "One enquiry — we handle the rest." },
          ].map((v) => (
            <div key={v.title} className="card-surface p-6 text-center">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <v.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-foreground">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-muted-foreground">
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
