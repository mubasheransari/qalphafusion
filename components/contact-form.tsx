"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";
import { ArrowUpRight, ChevronDown } from "./icons";

const fieldBase =
  "w-full rounded-xl border border-[#d6d7da] bg-band px-[18px] text-[13px] text-ink placeholder:text-[#8a8c96] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10";

function Fields({ initialService }: { initialService: string }) {
  const [service, setService] = useState(initialService);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Project enquiry${service ? ` — ${service}` : ""}`;
    const lines: string[] = [`Name: ${get("name")}`, `Email: ${get("email")}`];
    if (get("company")) lines.push(`Company: ${get("company")}`);
    if (service) lines.push(`Interested in: ${service}`);
    lines.push("", get("message"));
    const body = lines.join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-3 block text-[11.5px] font-medium">
          Your name *
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={`${fieldBase} h-12`} />
      </div>
      <div>
        <label htmlFor="email" className="mb-3 block text-[11.5px] font-medium">
          Email address *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${fieldBase} h-12`} />
      </div>
      <div>
        <label htmlFor="company" className="mb-3 block text-[11.5px] font-medium">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Your company" className={`${fieldBase} h-12`} />
      </div>
      <div>
        <label htmlFor="service" className="mb-3 block text-[11.5px] font-medium">
          I&apos;m interested in
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldBase} h-12 appearance-none pr-10`}
          >
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-3 block text-[11.5px] font-medium">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Your goals, your ideas, and what comes next..."
          className={`${fieldBase} min-h-[140px] resize-y py-4`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-brand px-7 text-[13px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(97,48,229,0.75)] transition-all hover:-translate-y-px hover:bg-brand-dark"
        >
          Compose project email
          <ArrowUpRight className="size-[14px] transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </button>
        <p className="mt-5 text-[11px] text-muted">
          This opens your email app with a pre-filled enquiry. Your message is
          sent when you send the email.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  const param = useSearchParams().get("service") ?? "";
  const initial = SERVICE_OPTIONS.includes(param) ? param : "";
  // re-mount when the pre-selected service changes (?service=…)
  return <Fields key={initial} initialService={initial} />;
}
