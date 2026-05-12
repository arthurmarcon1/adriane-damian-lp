import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Hero,
  head: () => ({
    meta: [
      { title: "Adriane Damian Pereira · Advocacia · OAB/RS 39.833" },
      {
        name: "description",
        content:
          "Adriane Damian Pereira — Advocacia em Santiago, RS. OAB/RS 39.833.",
      },
    ],
  }),
});
