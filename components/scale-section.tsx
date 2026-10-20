import Image from "next/image";
import Link from "next/link";
import { AUDIENCES, contactHref } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { Container, Eyebrow, TextLink } from "./ui";

export function ScaleSection() {
  return (
    <section className="py-10 lg:py-14">
      <Container className="grid items-start gap-14 lg:grid-cols-2 lg:gap-[72px]">
        <div className="lg:pt-6">
          <Eyebrow>Built to scale</Eyebrow>
          <h2 className="mt-5 font-display text-[34px] font-[550] leading-[1.12] tracking-[-0.02em] sm:text-[44px]">
            Small, mid &amp; enterprise.
            <br />
            We meet you
            <br />
            where you are.
          </h2>
          <p className="mt-7 text-[13px] text-muted">
            Your business is unique. Your digital strategy should be, too.
          </p>

          <ul className="mt-14 border-t-0">
            {AUDIENCES.map((a, i) => (
              <li key={a.name} className="border-b border-line first:pt-0">
                <Link
                  href={contactHref()}
                  className="group flex items-start gap-4 py-7"
                >
                  <span className="mt-1.5 font-display text-[12px] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[21px] font-medium tracking-[-0.02em]">
                      {a.name}
                    </span>
                    <span className="mt-3.5 block max-w-[470px] text-[12px] leading-[1.8] text-muted">
                      {a.description}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1.5 size-[15px] text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>

          <TextLink href={contactHref()} icon="right" className="mt-9 text-[14px]">
            Find your next move
          </TextLink>
        </div>

        <figure className="relative rounded-[28px] border border-line bg-[#fcfcfe] p-2.5 shadow-[0_30px_70px_-45px_rgba(40,30,110,0.4)]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
            <Image
              src="/images/team.jpg"
              alt="Four colleagues reviewing website designs together on a large monitor"
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-[18px] bottom-[18px] rounded-[10px] bg-white/70 px-[18px] py-[15px] text-[13px] text-ink backdrop-blur-md">
              Different disciplines. Shared ambition.
            </figcaption>
          </div>
        </figure>
      </Container>
    </section>
  );
}
