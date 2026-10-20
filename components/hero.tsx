import Image from "next/image";
import { ButtonLink, Container } from "./ui";
import { ArrowUpRight } from "./icons";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0">
      {/* tilted product frame */}
      <div className="-rotate-[4.3deg] rounded-[34px] border border-[#e7e7ee] bg-[#fcfcfe] p-3.5 shadow-[0_40px_80px_-40px_rgba(40,30,110,0.35)]">
        <div className="rounded-[24px] bg-[#f3f3f4] p-4">
          <div className="relative aspect-square overflow-hidden rounded-[20px] bg-black">
            <Image
              src="/images/hero-knot.jpg"
              alt="Abstract glass ribbon sculpture in violet, teal and silver"
              fill
              priority
              sizes="(min-width: 1024px) 470px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#e4e4e7] bg-[#ececee] px-4 py-3.5">
              <p className="font-display text-[18px] font-semibold leading-tight tracking-[-0.02em] text-teal">
                Creative thinking
              </p>
              <p className="mt-1 text-[10px] text-muted">Driven by your ambition</p>
            </div>
            <div className="rounded-xl border border-[#e4e4e7] bg-[#ececee] px-4 py-3.5">
              <p className="font-display text-[18px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                Digital impact
              </p>
              <p className="mt-1 text-[10px] text-muted">Designed to move you forward</p>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips (kept level) */}
      <span className="absolute -right-3 -top-1 inline-flex items-center gap-1.5 rounded-full bg-teal px-[18px] py-2.5 text-[11px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(59,142,166,0.8)] sm:-right-5 sm:top-2">
        Motion-first
        <ArrowUpRight className="size-3" />
      </span>

      <div className="absolute -bottom-7 left-0 rounded-2xl border border-line bg-[#fcfcfe] px-[18px] py-3.5 shadow-[0_18px_40px_-22px_rgba(40,30,110,0.35)] sm:-left-2">
        <p className="font-display text-[13px] font-semibold tracking-[-0.01em]">
          SEO · Brand · Apps
        </p>
        <p className="mt-1 text-[11px] text-muted">One accountable team</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-hero-gradient">
      <Container className="grid min-h-[calc(100svh-85px)] items-center gap-16 py-16 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/40 px-[15px] py-[9px] text-[10px] font-normal uppercase tracking-[0.005em] text-muted">
            <span className="size-1.5 rounded-full bg-teal" />
            Alpha Fusion · Digital Growth Studio
          </p>

          <h1 className="mt-8 font-display text-[52px] font-bold leading-[1.03] tracking-[-0.02em] sm:text-[64px] lg:text-[72px]">
            We fuse
            <br />
            <span className="bg-[linear-gradient(90deg,#3b8ea6_0%,#1a1c33_45%,#6130e5_100%)] bg-clip-text text-transparent">
              innovation
            </span>
            <br />
            &amp; excellence.
          </h1>

          <p className="mt-8 max-w-[420px] text-[14px] leading-[1.75] text-muted">
            <span className="text-ink">Alpha Fusion</span> builds brands,
            campaigns, products and platforms that move small, mid and enterprise
            businesses forward.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" icon="up-right">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" icon="right">
              Explore services
            </ButtonLink>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
