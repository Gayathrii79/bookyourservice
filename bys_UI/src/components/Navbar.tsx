import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import * as Icons from "lucide-react";
import { Logo } from "./Logo";
import { useEnquiry } from "@/context/enquiry-context";
import { categories } from "@/data/categories";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { open } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
          >
            Home
          </Link>

          {/* Services mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              Services <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </Link>

            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(90vw,880px)] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-border bg-popover p-4 shadow-[var(--shadow-elevate)]">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 md:grid-cols-4">
                    {categories.map((c) => {
                      const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[c.icon] ?? Icons.Sparkles;
                      return (
                        <Link
                          key={c.slug}
                          to="/services/$slug"
                          params={{ slug: c.slug }}
                          onClick={() => setMegaOpen(false)}
                          className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                        >
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                            <Icon size={13} />
                          </span>
                          <span className="truncate">{c.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-3 border-t border-border pt-3 text-right">
                    <Link
                      to="/services"
                      onClick={() => setMegaOpen(false)}
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => open()} className="btn-primary">
            Request Service
          </button>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col gap-1 py-3">
            <Link to="/" activeOptions={{ exact: true }} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted data-[status=active]:text-primary">Home</Link>
            <Link to="/services" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted data-[status=active]:text-primary">Services</Link>
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
              className="btn-primary mt-2"
            >
              Request Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
