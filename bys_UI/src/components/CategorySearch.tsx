import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { categories } from "@/data/categories";

export function CategorySearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const scored = categories
      .map((c) => {
        const nameMatch = c.name.toLowerCase().includes(query);
        const subMatch = c.subservices.find((s) => s.toLowerCase().includes(query));
        const descMatch = c.description.toLowerCase().includes(query);
        if (!nameMatch && !subMatch && !descMatch) return null;
        const score = c.name.toLowerCase().startsWith(query) ? 0 : nameMatch ? 1 : subMatch ? 2 : 3;
        return { c, score, matchedSub: !nameMatch && subMatch ? subMatch : null };
      })
      .filter(Boolean) as { c: typeof categories[number]; score: number; matchedSub: string | null }[];
    return scored.sort((a, b) => a.score - b.score).slice(0, 6);
  }, [q]);

  const go = (slug: string) => {
    setOpen(false);
    setQ("");
    navigate({ to: "/services/$slug", params: { slug } });
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)] focus-within:border-primary focus-within:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary)_15%,transparent)] transition">
        <Search size={18} className="text-muted-foreground" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => {
            if (!results.length) return;
            if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => (i + 1) % results.length); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => (i - 1 + results.length) % results.length); }
            else if (e.key === "Enter") { e.preventDefault(); go(results[active].c.slug); }
          }}
          placeholder="Search a service category — try 'Ele'"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          aria-label="Search service categories"
        />
        {q && (
          <button
            onClick={() => { setQ(""); inputRef.current?.focus(); }}
            className="rounded-full p-1 text-muted-foreground hover:bg-muted"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border bg-popover shadow-[var(--shadow-elevate)]">
          <ul>
            {results.map((r, i) => (
              <li key={r.c.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: r.c.slug }}
                  onMouseDown={(e) => { e.preventDefault(); go(r.c.slug); }}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    i === active ? "bg-muted text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Search size={14} className="text-muted-foreground" />
                  <span className="font-medium">{r.c.name}</span>
                  <span className="ml-auto truncate text-xs text-muted-foreground">
                    {r.matchedSub ? `in ${r.c.name} • ${r.matchedSub}` : r.c.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
