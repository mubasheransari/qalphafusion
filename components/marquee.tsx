import { MARQUEE_ITEMS } from "@/lib/site";
import { Sparkle } from "./icons";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {MARQUEE_ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span
            className={`font-display text-[22px] font-bold uppercase leading-none tracking-[-0.04em] ${
              item === "Mobile Apps" ? "text-brand" : "text-ink"
            }`}
          >
            {item}
          </span>
          <Sparkle className="mx-9 size-[18px] shrink-0 text-teal" />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Our disciplines"
      className="overflow-hidden border-y border-line bg-band py-[26px]"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </section>
  );
}
