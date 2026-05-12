const areas = [
  {
    n: "01",
    title: "Direito Civil",
    desc: "Atuação em contratos, responsabilidade civil, direito de família, sucessões e questões patrimoniais. Acompanhamento judicial e extrajudicial com foco em soluções sólidas e juridicamente seguras.",
  },
  {
    n: "02",
    title: "Direito Criminal",
    desc: "Defesa técnica em todas as fases do processo penal, do inquérito ao tribunal do júri. Atuação pautada por rigor processual, sigilo absoluto e respeito intransigente às garantias constitucionais.",
  },
  {
    n: "03",
    title: "Direito Empresarial",
    desc: "Assessoria a empresas, sociedades e empreendedores em constituição, contratos, recuperação, litígios e governança. Visão estratégica que protege o negócio e antecipa riscos.",
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-6">
          Áreas de Atuação
        </p>
        <h2 className="font-serif font-normal text-graphite-deep text-4xl md:text-5xl tracking-tight leading-tight max-w-[700px] mb-20">
          Três frentes de atuação, uma única exigência: excelência.
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-rule-line">
          {areas.map((a) => (
            <article key={a.n} className="bg-bg-secondary p-10 md:p-12">
              <div className="font-serif font-normal text-5xl text-gold-champagne mb-8 leading-none">
                {a.n}
              </div>
              <hr className="w-[30px] h-px border-0 border-t border-graphite-deep mb-8" />
              <h3 className="font-serif font-medium text-2xl md:text-3xl text-graphite-deep mb-4">
                {a.title}
              </h3>
              <p className="font-sans font-light text-sm md:text-base text-ink-soft leading-relaxed">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
