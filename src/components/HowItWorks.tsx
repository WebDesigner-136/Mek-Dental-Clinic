import { Calendar, Search, Heart, Smile, type LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, RevealChild } from "./Reveal";

type Step = { icon: LucideIcon; title: string; body: string };

const DEFAULT_STEPS: Step[] = [
  { icon: Calendar, title: "Book Your Appointment", body: "Call us, WhatsApp us, or fill out our form — it takes under 2 minutes and we'll confirm within 24 hours." },
  { icon: Search, title: "Consultation & Assessment", body: "Dr. Mariana reviews your dental health, listens to your goals, and maps a treatment plan — at zero pressure." },
  { icon: Heart, title: "Your Treatment", body: "We carry out your chosen treatment with precision, always keeping you comfortable, informed, and in control." },
  { icon: Smile, title: "Leave with Your New Smile", body: "Walk out with results that give you back what anxiety stole. And a team you can always reach when you need us." },
];

export function HowItWorks({
  steps = DEFAULT_STEPS,
  eyebrow = "The Process",
  title = "From First Message to New Smile — 4 Simple Steps",
}: {
  steps?: Step[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-[#FAFAF8] section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><div className="eyebrow mb-4">{eyebrow}</div></Reveal>
          <Reveal delay={0.1}><h2 className="h2-section">{title}</h2></Reveal>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] border-t border-dashed border-[#E8E6E2]" />
          <RevealStagger stagger={0.15} className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((s, i) => (
              <RevealChild key={i}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-[#FAFAF8] px-3">
                    <div className="size-10 rounded-full bg-[#323232] text-[#FAFAF8] font-display font-semibold grid place-items-center text-base">
                      {i + 1}
                    </div>
                  </div>
                  <s.icon size={26} strokeWidth={1.5} className="text-[#6D767D] mt-6 mb-4" />
                  <h3 className="h3-card mb-2">{s.title}</h3>
                  <p className="text-[0.9375rem] text-[#6D767D] leading-relaxed max-w-xs">{s.body}</p>
                </div>
              </RevealChild>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
