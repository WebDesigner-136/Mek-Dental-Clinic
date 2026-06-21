import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal, WordSplit } from "./Reveal";

export function PageHero({
  crumb,
  title,
  subtitle,
  variant = "dark",
  minH = "40dvh",
}: {
  crumb: { label: string; to?: string }[];
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
  minH?: string;
}) {
  const dark = variant === "dark";
  return (
    <section
      className={`${dark ? "bg-[#323232]" : "bg-[#FAFAF8]"} pt-32 pb-16 md:pt-40 md:pb-20 relative`}
      style={{ minHeight: minH }}
    >
      <div className="container-x flex flex-col items-center text-center gap-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-[0.8125rem] ${dark ? "text-[#6D767D]" : "text-[#6D767D]"}`}>
            {crumb.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} strokeWidth={1.5} />}
                {c.to ? (
                  <Link to={c.to} className="hover:text-[#FAFAF8] transition-colors">{c.label}</Link>
                ) : (
                  <span className={dark ? "text-[#FAFAF8]" : "text-[#323232]"}>{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
        <h1 className={`h1-hero max-w-3xl ${dark ? "text-[#FAFAF8]" : "text-[#323232]"}`}>
          <WordSplit text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.4}>
            <p className={`body-lg max-w-2xl ${dark ? "text-[#6D767D]" : "text-[#6D767D]"}`}>
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
