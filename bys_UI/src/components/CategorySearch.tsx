import { useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { useEnquiry } from "@/context/enquiry-context";

type SearchResult = {
  type: "category" | "subservice";
  categorySlug: string;
  categoryName: string;
  label: string;
  subtitle: string;
  score: number;
};

export function CategorySearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { open: openModal } = useEnquiry();

  const results = useMemo<SearchResult[]>(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];

    const items: SearchResult[] = [];

    for (const c of categories) {
      const nameMatch = c.name.toLowerCase().includes(query);
      const nameStarts = c.name.toLowerCase().startsWith(query);

      // Add category-level result if the category name matches
      if (nameMatch) {
        items.push({
          type: "category",
          categorySlug: c.slug,
          categoryName: c.name,
          label: c.name,
          subtitle: `${c.subservices.length} services`,
          score: nameStarts ? 0 : 1,
        });
      }

      // Add individual sub-service results
      for (const sub of c.subservices) {
        if (sub.toLowerCase().includes(query)) {
          items.push({
            type: "subservice",
            categorySlug: c.slug,
            categoryName: c.name,
            label: sub,
            subtitle: c.name,
            score: sub.toLowerCase().startsWith(query) ? 2 : 3,
          });
        }
      }

      // If only the description matches (not name or sub), add a category-level result
      if (!nameMatch && c.description.toLowerCase().includes(query)) {
        const hasSub = c.subservices.some((s) => s.toLowerCase().includes(query));
        if (!hasSub) {
          items.push({
            type: "category",
            categorySlug: c.slug,
            categoryName: c.name,
            label: c.name,
            subtitle: c.description,
            score: 4,
          });
        }
      }
    }

    return items.sort((a, b) => a.score - b.score).slice(0, 8);
  }, [q]);

  const go = (r: SearchResult) => {
    setOpen(false);
    setQ("");
    if (r.type === "subservice") {
      // Sub-service: open the enquiry modal with category + service pre-filled
      openModal(r.categoryName, r.label);
    } else {
      // Category: navigate to its page
      navigate({ to: "/services/$slug", params: { slug: r.categorySlug } });
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)] focus-within:border-primary focus-within:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary)_15%,transparent)] transition">
        <Search size={18} className="text-muted-foreground" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              inputRef.current?.blur();
              return;
            }
            if (!results.length) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => (i + 1) % results.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => (i - 1 + results.length) % results.length);
            } else if (e.key === "Enter") {
              e.preventDefault();
              go(results[active]);
            }
          }}
          placeholder="Search a service — try 'Electrician', 'AC', 'Beauty'"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          aria-label="Search service categories"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-autocomplete="list"
          aria-activedescendant={
            open && results.length > 0 ? `search-result-${active}` : undefined
          }
        />
        {q && (
          <button
            onClick={() => {
              setQ("");
              inputRef.current?.focus();
            }}
            className="rounded-full p-1 text-muted-foreground hover:bg-muted"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border bg-popover shadow-[var(--shadow-elevate)]"
          role="listbox"
        >
          <ul>
            {results.map((r, i) => (
              <li key={`${r.categorySlug}-${r.label}-${r.type}`}>
                <button
                  id={`search-result-${i}`}
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    go(r);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    i === active
                      ? "bg-muted text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {r.type === "category" ? (
                    <Search size={14} className="shrink-0 text-muted-foreground" />
                  ) : (
                    <ArrowRight size={14} className="shrink-0 text-muted-foreground" />
                  )}
                  <span className="font-medium">{r.label}</span>
                  <span className="ml-auto truncate text-xs text-muted-foreground">
                    {r.type === "subservice" ? `in ${r.subtitle}` : r.subtitle}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
