import { Image as ImageIcon } from "lucide-react";
import { RevealStagger, RevealChild } from "./Reveal";

export type Pair = { label: string };

export function BeforeAfterGrid({
  pairs,
  variant = "dark",
}: { pairs: Pair[]; variant?: "dark" | "light" }) {
  const dark = variant === "dark";
  return (
    <RevealStagger stagger={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pairs.map((p, i) => (
        <RevealChild key={i}>
          <article
            className={`rounded-2xl p-4 transition-all hover:brightness-105 ${
              dark ? "bg-[#3D3D3D]" : "bg-white shadow-warm-md hover:shadow-warm-lg"
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              <Frame label="Before" tone="before" dark={dark} />
              <Frame label="After" tone="after" dark={dark} />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-medium ${
                  dark ? "bg-[#4D4D4D] text-[#FAFAF8]" : "bg-[#F0EFED] text-[#6D767D]"
                }`}
              >
                {p.label}
              </span>
              {!dark && (
                <span className="text-[0.75rem] text-[#9E9B97]">Mek Dental · Hadath</span>
              )}
            </div>
          </article>
        </RevealChild>
      ))}
    </RevealStagger>
  );
}

function Frame({ label, tone, dark }: { label: string; tone: "before" | "after"; dark: boolean }) {
  const bg = dark
    ? tone === "before" ? "frame-dark" : "frame-dark-bright"
    : tone === "before" ? "bg-gradient-to-br from-[#D4D1CC] to-[#C8C5C1]" : "bg-gradient-to-br from-[#DDD9D5] to-[#D0CCC8]";
  return (
    <div className={`relative aspect-[3/4] rounded-xl overflow-hidden ${bg}`}>
      <span
        className={`absolute top-2 ${label === "Before" ? "left-2" : "right-2"} rounded-full px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wider`}
        style={{
          background: label === "Before" ? "rgba(0,0,0,0.5)" : "rgba(50,50,50,0.6)",
          color: "#FAFAF8",
        }}
      >
        {label}
      </span>
      <div className="absolute inset-0 grid place-items-center text-center gap-1.5">
        <ImageIcon size={28} strokeWidth={1.5} className={dark ? "text-[#6D767D]" : "text-[#9E9B97]"} />
        <span className={`text-[0.6875rem] ${dark ? "text-[#6D767D]" : "text-[#9E9B97]"}`}>
          Add patient photo
        </span>
      </div>
    </div>
  );
}
