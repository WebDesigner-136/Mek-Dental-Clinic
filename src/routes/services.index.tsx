import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealChild } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Mek Dental Clinic — Dental Treatments in Hadath, Lebanon" },
      { name: "description", content: "Complete dental care at Mek Dental Clinic: Teeth Whitening, Hollywood Smile, Dental Implants, Braces, Aesthetic Dentistry, Oral Surgery & Periodontics. Book in Hadath, Baabda." },
      { property: "og:title", content: "Our Services | Mek Dental Clinic" },
      { property: "og:description", content: "Seven specialist dental treatments — delivered with precision and warmth in Hadath, Baabda." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        crumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title="Complete Dental Care, Under One Roof"
        subtitle="From your first consultation to your final smile reveal — every treatment carried out by a specialist, with precision and care."
        variant="dark"
      />
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x">
          <RevealStagger stagger={0.07} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((s) => (
              <RevealChild key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-lg hover:-translate-y-1 transition-all h-full"
                >
                  <div className="aspect-video frame-placeholder overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center text-center gap-1 group-hover:scale-[1.03] transition-transform">
                      <s.icon size={36} strokeWidth={1.5} className="text-[#6D767D]" />
                      <span className="text-xs text-[#6D767D]">{s.name} photo</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-medium mb-3">{s.name}</h3>
                    <p className="text-[0.9375rem] text-[#6D767D] leading-relaxed mb-5">{s.shortServices}</p>
                    <span className="text-link text-sm">Explore This Treatment <ArrowRight size={14} strokeWidth={1.5} /></span>
                  </div>
                </Link>
              </RevealChild>
            ))}
          </RevealStagger>
        </div>
      </section>
      <CTABanner title="Ready to Begin?" body="Your first consultation at Mek Dental Clinic is the only thing standing between you and the smile you deserve." />
    </>
  );
}
