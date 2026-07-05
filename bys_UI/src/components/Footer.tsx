import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every service you need, just one click away. Discover trusted
            professionals and let our team handle the rest.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:bookyourservicebys@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Mail size={16} /> bookyourservicebys@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bookyourservice_bys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Instagram size={16} /> @bookyourservice_bys
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BookYourService. All rights reserved.</p>
          <p>Made with care for people who value their time.</p>
        </div>
      </div>
    </footer>
  );
}
