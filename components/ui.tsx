import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-normal text-brand ${className}`}
    >
      {children}
    </p>
  );
}

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  icon?: "up-right" | "right" | "none";
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  icon = "none",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-200";
  const sizes = {
    md: "h-10 px-5 text-[12px]",
    lg: "h-12 px-6 text-[13px]",
  };
  const variants = {
    primary:
      "bg-brand text-white shadow-[0_14px_30px_-12px_rgba(97,48,229,0.75)] hover:-translate-y-px hover:bg-brand-dark hover:shadow-[0_18px_34px_-12px_rgba(97,48,229,0.8)]",
    secondary:
      "border border-line bg-white/30 text-ink hover:border-[#c9cad1] hover:bg-white",
  };
  return (
    <Link
      {...props}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon === "up-right" && (
        <ArrowUpRight className="size-[14px] transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
      )}
      {icon === "right" && (
        <ArrowRight className="size-[15px] transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export function TextLink({
  children,
  icon = "up-right",
  className = "",
  ...props
}: Omit<ComponentProps<typeof Link>, "className"> & {
  icon?: "up-right" | "right";
  className?: string;
}) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-2 text-[13px] font-semibold text-teal transition-colors hover:text-[#2f7488] ${className}`}
    >
      {children}
      {icon === "up-right" ? (
        <ArrowUpRight className="size-[13px] transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
      ) : (
        <ArrowRight className="size-[14px] transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/** Page-level intro: eyebrow + large headline + lead paragraph */
export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="pb-14 pt-16 sm:pt-24">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-[900px] font-display text-[40px] font-[550] leading-[1.1] tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
          {title}
        </h1>
        <p className="mt-7 max-w-[620px] text-[14px] leading-[1.75] text-muted sm:text-[15px]">
          {lead}
        </p>
      </Container>
    </section>
  );
}
