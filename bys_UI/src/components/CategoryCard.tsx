import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { Category } from "@/data/categories";

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const Icon =
    (
      Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>
    )[category.icon] ?? Icons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
    >
      <Link
        to="/services/$slug"
        params={{ slug: category.slug }}
        className="card-surface card-hover group flex items-center gap-4 p-3.5 sm:p-4"
      >
        {/* Small image */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted sm:h-[72px] sm:w-[72px]">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute -bottom-1.5 -right-1.5 grid h-7 w-7 place-items-center rounded-full bg-surface text-primary shadow-[var(--shadow-soft)] ring-1 ring-border">
            <Icon size={13} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-semibold text-foreground">{category.name}</h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {category.subservices.slice(0, 3).join(" • ")}
            {category.subservices.length > 3 ? ` +${category.subservices.length - 3} more` : ""}
          </p>
        </div>

        <ArrowRight
          size={16}
          className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </Link>
    </motion.div>
  );
}
