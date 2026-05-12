export function Hero() {
  return (
    <section className="min-h-[90vh] pt-[72px] bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left */}
        <div className="md:col-span-7 md:pl-4 lg:pl-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-8">
            Advocacia · Desde 1996
          </p>

          <h1 className="font-serif font-normal text-graphite-deep text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Tradição forense
            <br />
            e <em className="italic text-gold-champagne">rigor</em> técnico
            <br />
            no interior gaúcho.
          </h1>

          <hr className="my-10 w-10 h-px border-0 border-t border-gold-champagne" />

          <p className="font-sans font-light text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
            Quase três décadas de atuação em Direito Civil, Criminal e Empresarial.
            Sede em Santiago/RS, com atendimento judicial e extrajudicial em todo o estado.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="inline-flex items-center bg-graphite-deep text-bg-primary px-8 py-4 font-sans font-medium text-sm tracking-wide hover:bg-graphite-darker transition-colors"
            >
              Agendar consulta
            </a>
            <a
              href="#atuacao"
              className="font-sans font-normal text-sm text-ink-primary hover:text-graphite-deep underline underline-offset-4"
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
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Retrato profissional de Adriane Damian Pereira"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(10%) brightness(0.95)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
