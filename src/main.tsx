import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PracticeAreas } from "./components/PracticeAreas";
import { About } from "./components/About";
import { Principles } from "./components/Principles";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./styles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <main className="bg-bg-primary text-ink-primary">
        <Header />
        <Hero />
        <PracticeAreas />
        <About />
        <Principles />
        <div id="faq">
          <Faq />
        </div>
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </QueryClientProvider>
  </StrictMode>
);
