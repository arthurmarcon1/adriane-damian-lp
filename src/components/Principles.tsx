const pillars = [
  {
    n: "01",
    title: "Experiência consolidada",
    desc: "Atuação contínua em fóruns gaúchos desde 1996. Mais de 1.900 processos acompanhados, com prática consolidada em todas as etapas do procedimento judicial e extrajudicial.",
  },
  {
    n: "02",
    title: "Atendimento personalizado",
    desc: "Cada cliente é recebido pela própria advogada. Sem intermediários, sem terceirização. Análise individualizada, estratégia desenhada caso a caso e acompanhamento direto até a solução.",
  },
  {
    n: "03",
    title: "Ética profissional",
    desc: "Atuação pautada pelo Código de Ética da OAB e por princípios de transparência. Engajamento institucional demonstrado em cargos eletivos na Subseção Santiago/Jaguari.",
  },
  {
    n: "04",
    title: "Judicial e extrajudicial",
    desc: "Atuação completa nas duas frentes: representação em juízo com rigor técnico e, sempre que possível, soluções negociadas que preservam tempo, recursos e relações.",
  },
];

export function Principles() {
  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-6">
          Princípios
        </p>
        <h2 className="font-serif font-normal text-graphite-deep text-4xl md:text-5xl tracking-tight leading-tight max-w-[760px] mb-20">
          O que sustenta uma advocacia de excelência.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-rule-line">
          {pillars.map((p) => (
            <article key={p.n} className="bg-bg-secondary p-10 md:p-12">
              <div className="font-serif font-normal text-5xl text-gold-champagne mb-6 leading-none">
                {p.n}
              </div>
              <hr className="w-[30px] h-px border-0 border-t border-graphite-deep mb-6" />
              <h3 className="font-serif font-medium text-2xl text-graphite-deep mb-3">
                {p.title}
              </h3>
              <p className="font-sans font-light text-sm md:text-base text-ink-soft leading-relaxed">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
