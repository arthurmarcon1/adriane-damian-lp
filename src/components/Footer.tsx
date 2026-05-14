const navLinks = [
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const LOGO = "/logo-ad.png";

export function Footer() {
  return (
    <footer className="bg-graphite-darker py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-12 gap-12 pb-12 mb-12 border-b border-bg-secondary/20">
          <div className="md:col-span-5">
            <img
              src={LOGO}
              alt="Logo AD — Adriane Damian Pereira"
              className="h-16 w-auto object-contain opacity-90 mb-4"
            />
            <p className="font-serif font-medium text-2xl text-bg-primary mb-3">
              Adriane Damian Pereira
            </p>
            <p className="font-sans italic font-light text-sm text-bg-secondary/70 mb-6">
              Sociedade Individual de Advocacia
            </p>
            <p className="font-sans font-light text-sm text-bg-secondary/60 leading-relaxed max-w-sm">
              Advocacia consultiva e contenciosa em Direito Civil, Criminal e Empresarial.
              Atuação em todo o Rio Grande do Sul.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans font-normal text-sm text-bg-primary hover:text-gold-champagne transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-5">
              Contato
            </p>
            <ul className="space-y-3 font-sans font-light text-sm text-bg-primary">
              <li>(55) 99613-6663</li>
              <li>Rua Benjamin Constant, 175, Lateral</li>
              <li>Centro · Santiago/RS</li>
              <li>OAB/RS 39.833</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-light text-xs text-bg-secondary/50">
            © 2026 Adriane Damian Pereira · Sociedade Individual de Advocacia. Todos os direitos reservados.
          </p>
          <p className="font-sans font-light italic text-xs text-bg-secondary/50">
            Em conformidade com o Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
