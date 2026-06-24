import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";

const ABOUT_PHOTO = "https://i.imgur.com/UInyKVW.png";

const credentials = [
  { value: "OAB/RS", label: "Inscrita desde 1996" },
  { value: "1.900+", label: "Processos atuados" },
  { value: "M.Sc.", label: "Mestrado em Direito — UNISC" },
  { value: "23 anos", label: "De docência universitária" },
];

function useCountUp(target: number, enabled: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [enabled, target, duration]);
  return count;
}

function AnimatedCredential({ value, label, revealed }: { value: string; label: string; revealed: boolean }) {
  const isNumber = /^\d/.test(value);
  const numericTarget = isNumber ? parseInt(value.replace(/\D/g, ""), 10) : 0;
  // Strip leading digits + formatting chars (dots/commas used as thousand separators)
  const suffix = isNumber ? value.replace(/^[\d.,]+/, "") : "";
  const count = useCountUp(numericTarget, revealed && isNumber);

  return (
    <div>
      <dt className="font-serif font-normal text-2xl text-gold-champagne leading-none">
        {isNumber ? `${count.toLocaleString("pt-BR")}${suffix}` : value}
      </dt>
      <dd className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </dd>
    </div>
  );
}

export function About() {
  const ref = useReveal<HTMLElement>();
  const dlRef = useRef<HTMLDListElement>(null);
  const [dlRevealed, setDlRevealed] = useState(false);

  useEffect(() => {
    const el = dlRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setDlRevealed(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="sobre" className="reveal bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left — image */}
        <div className="md:col-span-5">
          <div className="mb-6">
            <div className="font-serif font-normal text-4xl text-gold-champagne leading-none gold-hover cursor-default">II.</div>
            <div className="font-sans italic text-xs text-ink-soft mt-1">Trajetória</div>
          </div>
          <div className="aspect-3/4 w-full overflow-hidden group">
            <img
              src={ABOUT_PHOTO}
              alt="Adriane Damian Pereira em seu escritório"
              className="w-full h-full object-cover object-center transition-[filter,transform] duration-700 group-hover:scale-[1.03]"
              style={{ filter: "grayscale(100%) contrast(1.08) brightness(0.96)" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(40%) contrast(1.08) brightness(0.96)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) contrast(1.08) brightness(0.96)")}
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

          <dl
            ref={dlRef}
            className="mt-12 grid grid-cols-2 gap-x-12 gap-y-6"
          >
            {credentials.map((c) => (
              <AnimatedCredential
                key={c.label}
                value={c.value}
                label={c.label}
                revealed={dlRevealed}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
