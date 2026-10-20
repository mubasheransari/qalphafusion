import type { Metadata } from "next";
import { PageIntro, Container } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "Personalised, collaborative and built around you — how Alpha Fusion works with clients.",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we think"
        title={
          <>
            Personalised. Collaborative.
            <br />
            Built around you.
          </>
        }
        lead="We believe the best work begins with understanding your business. Creativity and technology come together around one clear ambition: moving you forward."
      />
      <section className="pb-24 pt-6">
        <Container>
          <ol className="grid gap-12 md:grid-cols-3 md:gap-9">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="border-t border-line pt-9">
                <span className="font-display text-[14px] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-10 font-display text-[27px] font-[550] leading-[1.2] tracking-[-0.025em]">
                  {p.title}
                </h2>
                <p className="mt-6 text-[12.5px] leading-[1.85] text-muted">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
