import { SITE } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "./ui";

export function CtaBand() {
  return (
    <section className="bg-hero-gradient">
      <Container className="flex flex-col items-center py-24 text-center sm:py-[120px]">
        <Eyebrow>Let&apos;s fuse</Eyebrow>
        <h2 className="mt-7 max-w-[760px] font-display text-[40px] font-[550] leading-[1.07] tracking-[-0.025em] sm:text-[58px]">
          Ready for your
          <br />
          next big move?
        </h2>
        <p className="mt-7 max-w-[300px] text-[13px] leading-[1.8] text-muted">
          Tell us your goal. We&apos;ll bring the creativity, technology, and
          strategy to move it forward.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact" icon="up-right">
            Start a project
          </ButtonLink>
          <ButtonLink href={`mailto:${SITE.email}`} variant="secondary">
            {SITE.email}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
