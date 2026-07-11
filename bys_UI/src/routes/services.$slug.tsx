import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { getCategory } from "@/data/categories";
import { useEnquiry } from "@/context/enquiry-context";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.name} — BookYourService` : "Service — BookYourService";
    const desc = c?.description ?? "Explore services from BookYourService.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: c ? `/services/${c.slug}` : "/services" },
        ...(c ? [{ property: "og:image", content: c.image }] : []),
      ],
      links: c ? [{ rel: "canonical", href: `/services/${c.slug}` }] : [],
    };
  },
  component: CategoryDetail,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-semibold text-foreground">Category not found</h1>
      <p className="mt-2 text-muted-foreground">The category you're looking for doesn't exist.</p>
      <Link to="/services" className="btn-primary mt-6 inline-flex">
        Browse all services
      </Link>
    </div>
  ),
});

function CategoryDetail() {
  const { category } = Route.useLoaderData();
  const { open } = useEnquiry();
  const Icon =
    (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[category.icon] ??
    Icons.Sparkles;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, #ffffff 0%, #fff6f6 100%)" }}
        />
        <div className="container-x pt-8 pb-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
          >
            <ChevronLeft size={16} /> Back to services
          </Link>
        </div>
        <div className="container-x grid gap-10 pb-12 pt-4 md:grid-cols-[1.1fr_0.9fr] md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
              <Icon size={14} /> {category.name}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {category.description} Choose a service below or submit a general enquiry — our team
              connects you with the right expert.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => open(category.name)} className="btn-primary">
                Request {category.name} <ArrowRight size={16} />
              </button>
              <Link to="/services" className="btn-secondary">
                Other categories
              </Link>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {["Vetted professionals", "Fast response", "Free enquiry", "Transparent pricing"].map(
                (t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-primary" /> {t}
                  </li>
                ),
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevate)]"
          >
            <img
              src={category.image}
              alt={category.name}
              loading="eager"
              className="h-full max-h-[380px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Subservices */}
      <section className="container-x pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Services under {category.name}
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {category.subservices.length} services available — tap Request to send an enquiry.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.subservices.map((s: string, i: number) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              className="card-surface card-hover flex flex-col p-5"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-foreground">{s}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Book a trusted {category.name.toLowerCase()} expert for {s.toLowerCase()}.
                  </p>
                </div>
              </div>
              <button
                onClick={() => open(category.name, s)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Request Service <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
