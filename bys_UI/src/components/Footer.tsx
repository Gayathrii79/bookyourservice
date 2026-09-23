import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";

function WhatsAppIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every service you need, just one click away. Discover trusted professionals and let our
            team handle the rest.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:bookyourservicebys@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary min-w-0"
              >
                <Mail size={16} className="shrink-0" />
                <span className="break-all">bookyourservicebys@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/918310421121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <WhatsAppIcon size={16} className="shrink-0" />
                <span>+91 83104 21121</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bookyourservice_bys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Instagram size={16} className="shrink-0" /> @bookyourservice_bys
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
