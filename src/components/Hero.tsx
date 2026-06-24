const LOGO = "/logo-ad-new.png";
const HERO_PHOTO = "https://i.imgur.com/G5UwLTl.png";

export function Hero() {
  return (
    <section className="min-h-[90vh] pt-[72px] bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left */}
        <div className="md:col-span-7 md:pl-4 lg:pl-16">
          <img
            src={LOGO}
            alt="Adriane Damian Advocacia"
            className="hero-item hero-item-0 h-[7rem] md:h-[9rem] w-auto object-contain mb-10"
          />
          <p className="hero-item hero-item-1 font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-8">
            Advocacia · Desde 1996
          </p>

          <h1 className="hero-item hero-item-2 font-serif font-normal text-graphite-deep text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Análise rigorosa,
            <br />
            decisão estratégica.
          </h1>

          <hr className="hero-item hero-item-3 my-10 w-10 h-px border-0 border-t border-gold-champagne" />

          <p className="hero-item hero-item-4 font-sans font-light text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
            Atuação consolidada em Direito Civil, Criminal e Empresarial, com
            sede em Santiago/RS. Análise estratégica de cada caso, acompanhamento
            direto e soluções judiciais e extrajudiciais.
          </p>

          <div className="hero-item hero-item-5 mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="btn-lift inline-flex items-center bg-graphite-deep text-bg-primary px-8 py-4 font-sans font-medium text-sm tracking-wide"
            >
              Agendar consulta
            </a>
            <a
              href="#atuacao"
              className="nav-link font-sans font-normal text-sm text-ink-primary hover:text-graphite-deep underline underline-offset-4 transition-colors duration-200"
            >
              Áreas de atuação →
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-photo md:col-span-5">
          <div className="mb-6">
            <div className="font-serif font-normal text-4xl text-gold-champagne leading-none gold-hover">I.</div>
            <div className="font-sans italic text-xs text-ink-soft mt-1">Retrato</div>
          </div>
          <div className="aspect-3/4 w-full overflow-hidden group img-reveal">
            <img
              src={HERO_PHOTO}
              alt="Adriane Damian Pereira — Advogada"
              className="w-full h-full object-cover object-top transition-[filter,transform] duration-700 group-hover:scale-[1.03]"
              style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.98)" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(40%) contrast(1.05) brightness(0.98)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) contrast(1.05) brightness(0.98)")}
            />
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-3 mt-8 text-ink-soft">
            <div className="scroll-bounce">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-gold-champagne">
                <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-ink-soft/60">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
