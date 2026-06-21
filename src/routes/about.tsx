import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, User as UserIcon, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealChild, ClipReveal } from "@/components/Reveal";
import { InstagramIcon, LinkedinIcon } from "@/components/BrandIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mek Dental Clinic — Our Story, Mission & Team | Hadath, Lebanon" },
      { name: "description", content: "Learn about Mek Dental Clinic — founded by Dr. Mariana Karam, Endodontist, in Hadath, Baabda, Lebanon in 2022. Our story, mission, vision, and team." },
      { property: "og:title", content: "About Mek Dental Clinic — Our Story" },
      { property: "og:description", content: "Founded by Dr. Mariana Karam, Endodontist — in Hadath, Baabda, since 2022." },
    ],
  }),
  component: About,
});

const VALUES = [
  ["Precision", "Clinical excellence in every procedure"],
  ["Comfort", "Your wellbeing guides every decision we make"],
  ["Transparency", "Clear communication, no surprises — ever"],
] as const;

function About() {
  return (
    <>
      <PageHero
        crumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title="More Than a Clinic. We're Your Smile Partner."
        subtitle="The story of a practice built on trust, clinical excellence, and a genuine passion for every patient's confidence."
        variant="dark"
      />

      {/* Story */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal><div className="eyebrow mb-4">Our Story</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-7">Built to Be Different from Day One</h2></Reveal>
            {[
              "Mek Dental Clinic was founded in 2022 by Dr. Mariana Karam — a specialist Endodontist with a clear vision: to create a dental clinic that Lebanese patients could genuinely look forward to visiting. Established at the Event 2020 Center in Hadath, Baabda, the clinic was designed from the ground up with patients' comfort and clinical precision at its absolute core.",
              "Dr. Mariana identified a persistent gap — too many people in Lebanon were avoiding essential dental care because of anxiety, bad past experiences, or simply never finding a clinic that felt modern, transparent, and genuinely warm. Mek Dental was built to close that gap.",
              "Since 2022, the clinic has grown almost entirely through word-of-mouth and five-star patient recommendations — a testament not just to the clinical results, but to the experience of being treated like a person, not a patient number. Every single Google review reflects a real patient who left feeling better than when they arrived.",
              "Today, Mek Dental Clinic offers a complete spectrum of dental services — from preventive care to complete Hollywood Smile transformations — all delivered with the same unwavering commitment to excellence, transparency, and comfort that has defined the clinic since the very first appointment.",
            ].map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <p className="body-lg mb-5">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5 relative lg:pt-12">
            <ClipReveal className="aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-md frame-placeholder">
              <div className="absolute inset-0 grid place-items-center text-[#A09C97] text-sm">Clinic interior</div>
            </ClipReveal>
            <ClipReveal delay={0.15} className="absolute -bottom-6 -left-4 w-2/5 aspect-square rounded-2xl overflow-hidden shadow-warm-lg frame-placeholder hidden md:block">
              <div className="absolute inset-0 grid place-items-center text-[#A09C97] text-xs">Consultation</div>
            </ClipReveal>
            <ClipReveal delay={0.3} className="absolute -top-6 -right-4 w-2/5 aspect-[3/4] rounded-2xl overflow-hidden shadow-warm-lg frame-placeholder hidden md:block">
              <div className="absolute inset-0 grid place-items-center text-[#A09C97] text-xs">Smile result</div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#323232] section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl border border-[#444444] p-10">
                <Target size={32} strokeWidth={1.5} className="text-[#6D767D] mb-5" />
                <h3 className="font-display text-[2rem] font-medium text-[#FAFAF8] mb-4">Our Mission</h3>
                <p className="body-lg !text-[#6D767D]">
                  To provide every patient with access to world-class dental care in a calm, modern, and genuinely welcoming environment — making exceptional smiles achievable for everyone in Lebanon.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[#444444] p-10">
                <Eye size={32} strokeWidth={1.5} className="text-[#6D767D] mb-5" />
                <h3 className="font-display text-[2rem] font-medium text-[#FAFAF8] mb-4">Our Vision</h3>
                <p className="body-lg !text-[#6D767D]">
                  To become Lebanon's most trusted dental clinic — built not on advertising, but on the transformations we create and the trust our patients extend to us every single day.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 pt-10 border-t border-[#444444] grid sm:grid-cols-3 gap-8">
            {VALUES.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div>
                  <h4 className="font-display text-2xl font-medium text-[#FAFAF8] mb-2">{t}</h4>
                  <p className="text-[0.9375rem] text-[#6D767D]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Team */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal><div className="eyebrow mb-4">Our Team</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-5">The People Behind Your Smile</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg">Led by Dr. Mariana, our team is united by one goal — restoring your confidence with care and expertise.</p>
            </Reveal>
          </div>

          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealChild>
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-warm-md frame-placeholder mb-5">
                  <div className="absolute inset-0 grid place-items-center text-center gap-2 px-4">
                    <UserIcon size={56} strokeWidth={1.5} className="text-[#A09C97]" />
                    <p className="text-sm text-[#6D767D]">Dr. Mariana — insert portrait photo</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">Dr. Mariana Karam</h3>
                <p className="text-[0.875rem] font-medium text-[#6D767D] mb-3">Founder & Specialist Endodontist</p>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="size-9 rounded-full border border-[#E8E6E2] grid place-items-center text-[#6D767D] hover:text-[#323232] hover:border-[#323232] transition-colors">
                    <InstagramIcon size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/dr-mariana-karam-1aa134235/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="size-9 rounded-full border border-[#E8E6E2] grid place-items-center text-[#6D767D] hover:text-[#323232] hover:border-[#323232] transition-colors">
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </RevealChild>
            {[2, 3].map((n) => (
              <RevealChild key={n}>
                <div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-warm-md frame-placeholder mb-5">
                    <div className="absolute inset-0 grid place-items-center text-center gap-2 px-4">
                      <UserIcon size={56} strokeWidth={1.5} className="text-[#A09C97]" />
                      <p className="text-sm text-[#6D767D]">Team portrait — insert photo</p>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-1">Clinical Team Member</h3>
                  <p className="text-[0.875rem] font-medium text-[#6D767D]">Dental Specialist</p>
                </div>
              </RevealChild>
            ))}
          </RevealStagger>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center text-[0.9375rem] text-[#6D767D] max-w-xl mx-auto">
              Our team communicates fluently in Arabic, English, and French — because your comfort begins with being understood.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-[#FAFAF8] section-y !pt-0">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal><div className="eyebrow mb-4">Follow the Journey</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-5">See Real Results on Instagram</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg">Behind-the-scenes clinic life, patient journeys, and smile transformations — @dr.marianakaram</p>
            </Reveal>
          </div>

          <RevealStagger stagger={0.05} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <RevealChild key={i}>
                <a
                  href="https://www.instagram.com/dr.marianakaram/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="View on Instagram — @dr.marianakaram"
                  className="group relative aspect-square rounded-xl overflow-hidden block"
                  style={{ background: "linear-gradient(135deg, #E8E6E2 0%, #D4D1CC 100%)" }}
                >
                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(50,50,50,0.6)" }}>
                    <div className="text-center text-white flex flex-col items-center gap-1.5">
                      <InstagramIcon size={28} />
                      <span className="text-[0.8125rem]">View on Instagram</span>
                    </div>
                  </div>
                </a>
              </RevealChild>
            ))}
          </RevealStagger>

          <Reveal delay={0.3}>
            <div className="mt-10 text-center">
              <a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener" className="btn-outline">
                <InstagramIcon size={16} /> Follow @dr.marianakaram on Instagram <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
