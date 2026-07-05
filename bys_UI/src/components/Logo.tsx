import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="BookYourService home">
      <span
        className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold shadow-[var(--shadow-red)] transition-transform group-hover:scale-105"
        aria-hidden
      >
        BYS
      </span>
      {!compact && (
        <span className="text-[17px] font-semibold tracking-tight text-foreground">
          BookYourService
        </span>
      )}
    </Link>
  );
}
