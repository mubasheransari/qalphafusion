import { SERVICES, contactHref } from "@/lib/site";
import { Check } from "./icons";
import { Container, TextLink } from "./ui";

export function ServicesList() {
  return (
    <section className="pb-24">
      <Container>
        <ol className="border-t border-line">
          {SERVICES.map((s, i) => (
            <li
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-b border-line py-12 last:border-b-0 lg:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[116px_minmax(0,1fr)_523px] lg:gap-0">
                <span className="font-display text-[22px] font-normal leading-none text-teal lg:pt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="lg:pr-12">
                  <h2 className="font-display text-[28px] font-[550] leading-[1.1] tracking-[-0.025em] sm:text-[32px]">
                    {s.name}
                  </h2>
                  <p className="mt-6 font-display text-[18px] leading-[1.35] tracking-[-0.015em] text-muted">
                    {s.tagline}
                  </p>
                  <p className="mt-5 max-w-[500px] text-[12.5px] leading-[1.85] text-muted">
                    {s.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-[11px]">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3.5 text-[13px]">
                        <Check className="size-[16px] shrink-0 text-teal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <TextLink href={contactHref(s.name)} className="mt-8">
                    {s.cta}
                  </TextLink>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
