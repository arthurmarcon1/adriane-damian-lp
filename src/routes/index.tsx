import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Adriane Damian Pereira | Advocacia em Santiago/RS" },
      {
        name: "description",
        content:
          "Advocacia em Direito Civil, Criminal e Empresarial. Atuação consolidada desde 1996. OAB/RS 39.833. Santiago, Rio Grande do Sul.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-bg-primary text-ink-primary">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Principles />
      <div id="faq"><Faq /></div>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
