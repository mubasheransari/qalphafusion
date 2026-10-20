import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, Container } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alpha Fusion Ltd is a London-based digital growth studio working with clients across the UK and US.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Meet Alpha Fusion"
        title="Different disciplines. Shared ambition."
        lead="We bring creative thinking and technology together to help businesses reach their potential. Based in London, working with clients across the UK and US."
      />
      <section className="pb-24 pt-6">
        <Container className="grid items-end gap-12 lg:grid-cols-2 lg:gap-[66px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src="/images/team.jpg"
              alt="Four colleagues reviewing website designs together on a large monitor"
              fill
              sizes="(min-width: 1024px) 567px, 92vw"
              className="object-cover"
            />
          </div>
          <div className="lg:pb-2">
            <h2 className="font-display text-[28px] font-normal leading-[1.15] tracking-[-0.025em] sm:text-[34px]">
              A partner in your
              <br />
              next chapter.
            </h2>
            <p className="mt-9 text-[13px] leading-[1.9] text-muted">
              Alpha Fusion Ltd provides tailored digital marketing, animation,
              website and mobile app development, alongside educational support.
              Our work is shaped by each client&apos;s unique goals and
              requirements.
            </p>
            <p className="mt-6 text-[13px] leading-[1.9] text-muted">
              Our mission is to provide high-quality, reliable, and affordable
              services with complete transparency. We combine creativity with
              technology and a client-centric approach to deliver meaningful,
              long-term partnerships.
            </p>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
