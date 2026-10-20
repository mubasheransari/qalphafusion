import { contactHref } from "@/lib/site";
import { Check } from "./icons";
import { Container, Eyebrow, TextLink } from "./ui";

const POINTS = [
  "Online class support",
  "Exam preparation",
  "Professional certification support",
];

export function BeyondDigital() {
  return (
    <section className="border-y border-line bg-band">
      <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:gap-[72px] lg:py-[72px]">
        <div>
          <Eyebrow>Beyond digital</Eyebrow>
          <h2 className="mt-5 font-display text-[34px] font-[550] leading-[1.12] tracking-[-0.02em] sm:text-[44px]">
            Support for your
            <br />
            next achievement.
          </h2>
        </div>
        <div className="lg:-mt-1">
          <p className="text-[13px] leading-[1.8] text-muted">
            Educational and tutoring support to help you develop your knowledge
            and move forward with confidence.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[12.5px]">
                <Check className="size-[15px] text-teal" />
                {p}
              </li>
            ))}
          </ul>
          <TextLink
            href={contactHref("Education & Tutoring")}
            className="mt-8"
          >
            Explore education support
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
