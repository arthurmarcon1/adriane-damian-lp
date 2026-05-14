import { useState, type FormEvent } from "react";
import { useReveal } from "@/hooks/useReveal";

export function Contact() {
  const [sending, setSending] = useState(false);
  const ref = useReveal<HTMLElement>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);

    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const subject = (formData.get("subject") as string)?.trim() || "";
    const message = (formData.get("message") as string)?.trim() || "";

    const lines = [
      "Olá, Dra. Adriane! Vim pelo site.",
      "",
      `*Nome:* ${name}`,
      `*E-mail:* ${email}`,
    ];

    if (phone) lines.push(`*Telefone:* ${phone}`);
    if (subject) lines.push(`*Assunto:* ${subject}`);

    lines.push("", "*Mensagem:*", message);

    const text = encodeURIComponent(lines.join("\n"));

    const whatsappUrl = `https://wa.me/5555996136663?text=${text}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => setSending(false), 1500);
  }

  const labelCls =
    "block font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-2";

  const fieldCls =
    "w-full bg-transparent border-0 border-b border-bg-secondary/30 focus:border-gold-champagne focus:outline-none py-3 px-0 font-sans font-light text-base text-bg-primary placeholder:text-bg-secondary/50 rounded-none transition-colors";

  return (
    <section
      ref={ref}
      id="contato"
      className="reveal bg-graphite-deep py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Coluna esquerda */}
        <div className="md:col-span-5">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gold-champagne mb-6">
            Contato
          </p>

          <h2 className="font-serif font-normal text-bg-primary text-4xl md:text-5xl tracking-tight leading-tight mb-8">
            Vamos conversar sobre o seu caso.
          </h2>

          <hr className="w-10 h-px border-0 border-t border-gold-champagne mb-10" />

          <p className="font-sans font-light text-base text-bg-secondary/80 leading-relaxed mb-12">
            O primeiro contato é confidencial e sem compromisso.
            Apresente sua situação pelos canais abaixo e agendaremos
            uma análise adequada.
          </p>

          <div className="space-y-8">
            <div>
              <p className={labelCls}>WhatsApp</p>

              <a
                href="https://wa.me/5555996136663"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-normal text-2xl md:text-3xl text-bg-primary hover:text-gold-champagne transition-colors mt-2 inline-block"
              >
                (55) 99613-6663
              </a>
            </div>

            <div>
              <p className={labelCls}>Escritório</p>

              <p className="font-serif font-normal text-xl md:text-2xl text-bg-primary mt-2 leading-snug">
                Rua Tito Beccon, 217
                <br />
                Vila Nova · Santiago/RS · CEP 97.714-156
              </p>
            </div>

            <div>
              <p className={labelCls}>Registro Profissional</p>

              <p className="font-serif font-normal text-xl md:text-2xl text-bg-primary mt-2">
                OAB/RS 39.833
              </p>
            </div>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="md:col-span-7">
          <div className="bg-graphite-darker p-10 md:p-12">
            <h3 className="font-serif font-medium text-2xl text-bg-primary mb-2">
              Envie sua mensagem
            </h3>

            <p className="font-sans font-light text-sm text-bg-secondary/70 mb-10">
              A mensagem será enviada diretamente pelo WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelCls} htmlFor="name">
                  Nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className={fieldCls}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className={fieldCls}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="phone">
                  Telefone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={fieldCls}
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="subject">
                  Assunto
                </label>

                <select
                  id="subject"
                  name="subject"
                  className={fieldCls}
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    className="bg-graphite-darker"
                  >
                    Selecione
                  </option>

                  <option className="bg-graphite-darker">
                    Direito Civil
                  </option>

                  <option className="bg-graphite-darker">
                    Direito Criminal
                  </option>

                  <option className="bg-graphite-darker">
                    Direito Empresarial
                  </option>

                  <option className="bg-graphite-darker">
                    Direito de Família
                  </option>

                  <option className="bg-graphite-darker">
                    Outro
                  </option>
                </select>
              </div>

              <div>
                <label className={labelCls} htmlFor="message">
                  Mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Descreva brevemente sua situação..."
                  className={fieldCls}
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full md:w-auto bg-gold-champagne text-graphite-deep hover:bg-bg-primary transition-colors px-10 py-4 font-sans font-medium text-sm tracking-[0.2em] uppercase rounded-none disabled:opacity-70"
                >
                  {sending
                    ? "Abrindo WhatsApp..."
                    : "Enviar mensagem →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}