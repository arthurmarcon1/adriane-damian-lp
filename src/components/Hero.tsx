import { useReveal } from "@/hooks/useReveal";

const LOGO = "https://i.imgur.com/SUPELsk.png";
const HERO_PHOTO = "https://i.imgur.com/G5UwLTl.png";

export function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal min-h-[90vh] pt-[72px] bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left */}
        <div className="md:col-span-7 md:pl-4 lg:pl-16">
          <img
            src={LOGO}
            alt="Logo AD — Adriane Damian Pereira"
            className="h-12 w-auto object-contain mb-8"
          />
          <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-8">
            Advocacia · Desde 1996
          </p>

          <h1 className="font-serif font-normal text-graphite-deep text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Advocacia técnica,
            <br />
            atendimento próximo.
          </h1>

          <hr className="my-10 w-10 h-px border-0 border-t border-gold-champagne" />

          <p className="font-sans font-light text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
            Atuação consolidada em Direito Civil, Criminal e Empresarial, com
            sede em Santiago/RS. Análise estratégica de cada caso, acompanhamento
            direto e soluções judiciais e extrajudiciais.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="inline-flex items-center bg-graphite-deep text-bg-primary px-8 py-4 font-sans font-medium text-sm tracking-wide hover:bg-graphite-darker transition-colors duration-200"
            >
              Agendar consulta
            </a>
            <a
              href="#atuacao"
              className="font-sans font-normal text-sm text-ink-primary hover:text-graphite-deep underline underline-offset-4 transition-colors duration-200"
            >
              Áreas de atuação →
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-5">
          <div className="mb-6">
            <div className="font-serif font-normal text-4xl text-gold-champagne leading-none">I.</div>
            <div className="font-sans italic text-xs text-ink-soft mt-1">Retrato</div>
          </div>
          <div className="aspect-[3/4] w-full overflow-hidden group">
            <img
              src={HERO_PHOTO}
              alt="Adriane Damian Pereira — Advogada"
              className="w-full h-full object-cover object-top transition-[filter] duration-700"
              style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.98)" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(60%) contrast(1.05) brightness(0.98)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) contrast(1.05) brightness(0.98)")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
