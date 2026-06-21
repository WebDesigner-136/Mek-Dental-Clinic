import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterGrid } from "@/components/BeforeAfter";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery — Before & After Results | Mek Dental Clinic, Lebanon" },
      { name: "description", content: "Real smile transformations at Mek Dental Clinic — before and after results from teeth whitening, Hollywood Smile, veneers, and implant treatments in Hadath, Baabda." },
      { property: "og:title", content: "Smile Gallery — Real Results | Mek Dental Clinic" },
      { property: "og:description", content: "Real before & after transformations from Mek Dental Clinic in Hadath, Baabda." },
    ],
  }),
  component: Gallery,
});

const PAIRS = [
  { label: "Hollywood Smile" },
  { label: "Porcelain Veneers" },
  { label: "Dental Implant Crown" },
  { label: "Professional Whitening" },
  { label: "Composite Bonding" },
  { label: "Clear Aligners Treatment" },
  { label: "Aesthetic Dentistry" },
  { label: "Full Smile Makeover" },
];

const FILTERS = ["All", "Hollywood Smile", "Veneers", "Whitening", "Implants", "Braces"];

function Gallery() {
  const [active, setActive] = useState("All");
  const visible = active === "All"
    ? PAIRS
    : PAIRS.filter((p) => p.label.toLowerCase().includes(active.toLowerCase().replace("braces", "aligner")));
  return (
    <>
      <PageHero
        crumb={[{ label: "Home", to: "/" }, { label: "Smile Gallery" }]}
        title="Real Smiles. Real Stories."
        subtitle="These aren't photographs of perfect teeth. They are photographs of confidence restored, anxiety overcome, and people who finally decided their smile deserved to be seen."
        variant="dark"
        minH="50dvh"
      />

      <section className="bg-[#FAFAF8] py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <p className="body-lg max-w-2xl mx-auto text-center mb-10">
              Every before & after below represents a real patient's journey at Mek Dental Clinic. The results shown are real outcomes — not simulations, not stock photographs. These are real smiles. Real people.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-2 justify-center mb-12 overflow-x-auto">
            {FILTERS.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors ${
                    isActive ? "bg-[#323232] text-[#FAFAF8]" : "border border-[#E8E6E2] text-[#6D767D] hover:border-[#323232] hover:text-[#323232]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <BeforeAfterGrid pairs={visible.length ? visible : PAIRS} variant="light" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
