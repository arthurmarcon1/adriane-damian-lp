import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Adriane Damian Pereira · Advocacia · OAB/RS 39.833" },
      {
        name: "description",
        content:
          "Advocacia em Santiago/RS desde 1996. Atuação em Direito Civil, Criminal e Empresarial. OAB/RS 39.833.",
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
    </main>
  );
}
