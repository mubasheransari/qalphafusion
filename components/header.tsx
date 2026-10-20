"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#f8f9fc]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] w-full max-w-[1280px] items-center justify-between px-5 sm:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[12.5px] font-medium transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="md" icon="up-right">
              Start a project
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white/60 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-canvas md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1280px] flex-col px-5 py-3 sm:px-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[15px] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              icon="up-right"
              onClick={() => setOpen(false)}
              className="my-5"
            >
              Start a project
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
