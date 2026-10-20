import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Alpha Fusion about your project. Email info@alphafusionltd.com or call +44 7367 066235.",
};

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11.5px] text-muted">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="pb-28 pt-16 sm:pt-24">
      <Container>
        <h1 className="max-w-[760px] font-display text-[40px] font-[550] leading-[1.1] tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
          Big ideas start with a conversation.
        </h1>
        <p className="mt-7 max-w-[620px] text-[14px] leading-[1.75] text-muted sm:text-[15px]">
          Tell us what you have in mind. We&apos;ll explore how creativity,
          technology, and strategy can bring your next move to life.
        </p>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[5fr_7fr] lg:gap-12">
          <div className="space-y-11">
            <Info label="Email us">
              <a
                href={`mailto:${SITE.email}`}
                className="font-display text-[20px] tracking-[-0.02em] hover:text-brand"
              >
                {SITE.email}
              </a>
            </Info>
            <Info label="Call us">
              <a
                href={SITE.phoneHref}
                className="font-display text-[20px] tracking-[-0.02em] hover:text-brand"
              >
                {SITE.phone}
              </a>
            </Info>
            <Info label="Our home">
              <p className="font-display text-[14px] leading-[1.9] tracking-[-0.01em]">
                {SITE.location}
                <br />
                {SITE.serving}
              </p>
            </Info>
            <Info label="Business hours">
              <p className="font-display text-[14px] leading-[1.9] tracking-[-0.01em]">
                {SITE.hours.map((h) => (
                  <span key={h} className="block">
                    {h}
                  </span>
                ))}
              </p>
            </Info>
          </div>

          <Suspense fallback={<div className="min-h-[480px]" aria-hidden="true" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
