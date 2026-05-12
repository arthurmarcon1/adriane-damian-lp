import { useState } from "react";

const links = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-bg-primary/95 border-b border-rule-line">
      <div className="h-full px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="font-serif font-medium tracking-tight text-graphite-deep text-lg md:text-xl">
          Adriane Damian Pereira
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans font-normal text-sm tracking-wide text-ink-primary hover:text-graphite-deep transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block h-px w-6 bg-ink-primary transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-ink-primary transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-bg-primary">
          <nav className="flex flex-col items-center justify-center gap-10 pt-24">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base tracking-wide text-ink-primary hover:text-graphite-deep"
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
