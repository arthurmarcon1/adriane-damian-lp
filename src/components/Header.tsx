import { useState, useEffect } from "react";

const links = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const LOGO = "/logo-ad.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-18 bg-bg-primary/95 border-b border-rule-line transition-all duration-300 ${scrolled ? "header-scrolled border-rule-line/60" : ""}`}
    >
      <div className="h-full px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Logo AD — Adriane Damian Pereira"
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          <span className="hidden md:flex items-center gap-3">
            <span className="block w-px h-5 bg-rule-line mx-2" />
            <span className="font-serif font-medium tracking-tight text-graphite-deep text-base">
              Adriane Damian Pereira
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-sans font-normal text-sm tracking-wide text-ink-primary hover:text-graphite-deep transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.25 p-2"
        >
          <span
            className={`block h-px w-6 bg-ink-primary transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink-primary transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink-primary transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="menu-slide md:hidden fixed inset-0 top-18 bg-bg-primary/98 backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center gap-10 h-full">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif font-normal text-3xl text-graphite-deep hover:text-gold-champagne transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
