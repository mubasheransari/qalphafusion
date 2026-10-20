import Link from "next/link";
import { CAPABILITY_CARDS } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { Container, Eyebrow } from "./ui";

export function Capabilities() {
  return (
    <section className="py-24">
      <Container>
        <Eyebrow>Our capabilities</Eyebrow>
        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-[560px] font-display text-[34px] font-[550] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
            Everything your brand needs to move.
          </h2>
          <p className="max-w-[280px] pb-1 text-[12px] leading-[1.75] text-muted">
            Four core disciplines. One integrated team. Personalised solutions
            engineered for growth.
          </p>
        </div>

        <ul className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_CARDS.map((service, i) => (
            <li key={service.id}>
              <article className="group flex h-full min-h-[305px] flex-col rounded-3xl border border-line bg-[#fcfdfe] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(60,40,140,0.35)]">
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-xl font-display text-[16px] ${
                    i % 2 === 0
                      ? "bg-brand-soft text-brand"
                      : "bg-teal-soft text-teal"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 font-display text-[21px] font-[550] leading-[1.15] tracking-[-0.02em]">
                  {service.name}
                </h3>
                <p className="mt-4 text-[12px] leading-[1.75] text-muted">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-[13px] font-semibold text-teal"
                >
                  Explore
                  <ArrowUpRight className="size-[13px] transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
