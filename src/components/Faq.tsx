import { useState } from "react";

const faqs = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "O primeiro contato pode ser feito por WhatsApp, telefone ou e-mail para apresentação preliminar do caso. A consulta presencial é agendada no escritório em Santiago/RS, com análise completa da situação, esclarecimento de dúvidas e definição conjunta da estratégia mais adequada.",
  },
  {
    q: "Quais regiões são atendidas?",
    a: "O escritório tem sede em Santiago/RS e atende toda a região central do Rio Grande do Sul, com atuação em todas as comarcas do estado quando necessário. Causas em outros estados podem ser avaliadas individualmente.",
  },
  {
    q: "Atendem causas particulares e empresariais?",
    a: "Sim. A atuação contempla pessoas físicas em Direito Civil, Família, Sucessões e Criminal, e também pessoas jurídicas em Direito Empresarial — constituição, contratos, recuperação, litígios e consultoria contínua.",
  },
  {
    q: "Como são definidos os honorários?",
    a: "Os honorários seguem a Tabela de Honorários da OAB/RS e são definidos após a análise do caso, considerando complexidade, urgência e modalidade de atuação. Toda contratação é formalizada por instrumento próprio, com total transparência.",
  },
  {
    q: "É possível resolver sem ir ao tribunal?",
    a: "Sempre que viável, sim. A atuação extrajudicial — negociações, acordos, mediações e arbitragens — é priorizada quando representar a solução mais eficiente para o cliente. O processo judicial é o caminho quando a via negociada se esgota ou não cabe.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-[800px] mx-auto px-8 md:px-12">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-6">
          Dúvidas frequentes
        </p>
        <h2 className="font-serif font-normal text-graphite-deep text-4xl md:text-5xl tracking-tight leading-tight mb-16">
          Perguntas comuns, respostas diretas.
        </h2>

        <ul className="border-b border-rule-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-t border-rule-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-medium text-xl md:text-2xl text-graphite-deep">
                    {f.q}
                  </span>
                  <span className="font-serif font-light text-2xl text-gold-champagne shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans font-light text-base text-ink-soft leading-relaxed max-w-[700px] pb-8">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
