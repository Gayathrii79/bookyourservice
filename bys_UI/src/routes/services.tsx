import { createFileRoute, Outlet, useMatch } from "@tanstack/react-router";
import { CategoryCard } from "@/components/CategoryCard";
import { CategorySearch } from "@/components/CategorySearch";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "All Services — BookYourService" },
      {
        name: "description",
        content:
          "Browse every service category BookYourService offers — from home care to premium concierge.",
      },
      { property: "og:title", content: "All Services — BookYourService" },
      {
        property: "og:description",
        content: "Browse every service category BookYourService offers.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  // Check if a child route (e.g. /services/$slug) is active
  const childMatch = useMatch({ from: "/services/$slug", shouldThrow: false });

  // If a child route is matched, render only the child (Outlet) — not the grid
  if (childMatch) {
    return <Outlet />;
  }

  // Otherwise, render the services index page
  return (
    <div className="container-x py-16 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="All service categories"
        subtitle="Search or browse — pick a category to see the full list of services and request one."
      />
      <div className="mt-8">
        <CategorySearch />
      </div>
      <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c, i) => (
          <CategoryCard key={c.slug} category={c} index={i} />
        ))}
      </div>
    </div>
  );
}
