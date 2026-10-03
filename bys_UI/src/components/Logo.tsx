import { Link } from "@tanstack/react-router";

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
      aria-label="BookYourService home"
    >
      <img
        src="/favicon.png"
        alt="BookYourService"
        className="h-10 w-auto sm:h-11 md:h-12 object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}

