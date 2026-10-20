import Link from "next/link";

export function LogoMark({ className = "size-[37px]" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,#6130e5_0%,#4f64c8_50%,#3b8ea6_100%)] ${className}`}
    >
      <svg viewBox="0 0 64 64" className="size-full" aria-hidden="true">
        <circle cx="30" cy="34" r="10.5" fill="none" stroke="#0f111a" strokeWidth="4.4" />
        <path d="M40.5 22v25" stroke="#0f111a" strokeWidth="4.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Alpha Fusion Ltd — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark />
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-[22px] font-semibold leading-none tracking-[-0.025em] text-ink">
          Alpha<span className="text-brand">Fusion</span>
        </span>
        <span className="text-[8.5px] font-bold uppercase leading-none tracking-[0.04em] text-muted">
          Ltd
        </span>
      </span>
    </Link>
  );
}
