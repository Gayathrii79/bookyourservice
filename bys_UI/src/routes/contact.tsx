import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageSquarePlus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useEnquiry } from "@/context/enquiry-context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BookYourService" },
      { name: "description", content: "Get in touch with BookYourService. Email us or reach out on Instagram." },
      { property: "og:title", content: "Contact — BookYourService" },
      { property: "og:description", content: "Get in touch with BookYourService." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { open } = useEnquiry();
  return (
    <div className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Have a question or need a service? We're one message away."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
        <a
          href="mailto:bookyourservicebys@gmail.com"
          className="card-surface card-hover group p-7"
        >
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <Mail size={20} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">Email us</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            For enquiries, partnerships or feedback.
          </p>
          <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
            bookyourservicebys@gmail.com
          </p>
        </a>

        <a
          href="https://instagram.com/bookyourservice_bys"
          target="_blank"
          rel="noopener noreferrer"
          className="card-surface card-hover group p-7"
        >
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <Instagram size={20} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">Instagram</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Follow us for updates, tips and stories.
          </p>
          <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
            @bookyourservice_bys
          </p>
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        <div className="card-surface flex flex-col items-start justify-between gap-4 p-7 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Prefer to request a service directly?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Submit an enquiry and we'll get back to you shortly.</p>
          </div>
          <button onClick={() => open()} className="btn-primary shrink-0">
            <MessageSquarePlus size={16} /> Request Service
          </button>
        </div>
      </div>
    </div>
  );
}
