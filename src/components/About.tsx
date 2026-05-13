import { useReveal } from "@/hooks/useReveal";

const ABOUT_PHOTO = "https://i.imgur.com/UInyKVW.png";

const credentials = [
  { value: "OAB/RS", label: "Inscrita desde 1996" },
  { value: "1.900+", label: "Processos atuados" },
  { value: "M.Sc.", label: "Mestrado em Direito — UNISC" },
  { value: "23 anos", label: "De docência universitária" },
];

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="sobre" className="reveal bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left — image */}
        <div className="md:col-span-5">
          <div className="mb-6">
            <div className="font-serif font-normal text-4xl text-gold-champagne leading-none">II.</div>
            <div className="font-sans italic text-xs text-ink-soft mt-1">Trajetória</div>
          </div>
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={ABOUT_PHOTO}
              alt="Adriane Damian Pereira em seu escritório"
              className="w-full h-full object-cover object-center transition-[filter] duration-700"
              style={{ filter: "grayscale(100%) contrast(1.08) brightness(0.96)" }}
            />
          </div>
        </div>

        {/* Right — text */}
        <div className="md:col-span-7 md:pl-4 lg:pl-12">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-6">
            Sobre
          </p>
          <h2 className="font-serif font-normal text-graphite-deep text-4xl md:text-5xl tracking-tight leading-tight mb-10">
            Formação sólida, prática consistente.
          </h2>
          <hr className="w-10 h-px border-0 border-t border-gold-champagne mb-10" />

          <div className="space-y-5 font-sans font-light text-base text-ink-primary leading-relaxed">
            <p>
              Adriane Damian Pereira é advogada inscrita na OAB/RS, com atuação
              consolidada nas áreas Civil, Criminal e Empresarial. Sua trajetória
              reúne prática forense, formação acadêmica e engajamento institucional.
            </p>
            <p>
              Mestra em Direito pela UNISC, com pesquisa em Direitos Sociais e
              Políticas Públicas, atuou por mais de duas décadas no magistério
              superior, tendo coordenado o curso de Direito entre 2010 e 2018.
              Essa vivência entre sala de aula e tribunal moldou uma advocacia
              tecnicamente cuidadosa e atenta ao contexto humano de cada caso.
            </p>
            <p>
              Atua também institucionalmente: integra a Subseção Santiago/Jaguari da OAB/RS,
              onde já exerceu os cargos de Vice-Presidente e Secretária-Geral, e é membro da
              Comissão da Mulher Advogada. Acredita que a advocacia se faz com preparo, ética
              e proximidade com quem confia sua causa.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="font-serif font-normal text-2xl text-gold-champagne leading-none">
                  {c.value}
                </dt>
                <dd className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
