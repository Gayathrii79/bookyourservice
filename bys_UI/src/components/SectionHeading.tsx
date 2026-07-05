import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted-foreground md:text-[17px]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
