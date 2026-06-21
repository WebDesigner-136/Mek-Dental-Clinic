import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  ["Is dental treatment painful?", "At Mek Dental Clinic, your comfort is our first priority. We use modern anesthetic techniques and gentle procedures to ensure treatments are as comfortable as possible. Most patients are genuinely surprised by how easy their experience is."],
  ["How do I book an appointment?", "You can book by calling us at +961 71 349 369, sending us a WhatsApp message, or filling out the booking form on our Contact page. We confirm all appointments within 24 hours."],
  ["What is Endodontics and is a root canal really painful?", "Endodontics treats the inner tissue of teeth — including root canals. A root canal removes infected tissue, eliminates pain, and saves your natural tooth. With modern anesthetics, root canal treatment is typically no more uncomfortable than a standard filling."],
  ["How long does a Hollywood Smile treatment take?", "A full Hollywood Smile typically takes 2–3 visits. We begin with a digital smile design session so you can preview your final results before any work begins — no surprises."],
  ["What are dental implants and am I a candidate?", "Dental implants are permanent, titanium-rooted replacements for missing teeth — they look and function exactly like natural teeth. Most healthy adults are suitable candidates. Dr. Mariana will assess your suitability at your consultation."],
  ["How effective is professional teeth whitening?", "Professional in-clinic whitening can brighten your smile by up to 8 shades in a single session. Results typically last 1–2 years with proper maintenance — far more effective and safer than over-the-counter products."],
  ["What are the clinic's opening hours?", "We are open Monday to Friday from 9:00 AM to 7:00 PM. We are closed on Saturdays and Sundays."],
  ["Where is the clinic located and is parking available?", "We are located at Event 2020 Center, Bloc D, 1st Floor, Hadath, Baabda. Parking is readily available — our patients consistently mention it as one of the most convenient aspects of visiting us."],
  ["Do you offer braces for adults?", "Absolutely. We offer both traditional braces and clear aligner options for patients of all ages. Your treatment plan — including duration and expected results — will be mapped out in full detail at your consultation."],
  ["How do you maintain clinic hygiene?", "Patient safety is non-negotiable. We maintain hospital-grade sterilization and hygiene protocols across all equipment and surfaces. Every procedure room is fully cleaned and re-sterilized between patients."],
] as const;

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#F0EFED] section-y">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-14">
          <Reveal><div className="eyebrow mb-4">Common Questions</div></Reveal>
          <Reveal delay={0.1}><h2 className="h2-section">Answers You Need Before You Book</h2></Reveal>
        </div>
        <div>
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#E8E6E2]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[1.0625rem] md:text-[1.1875rem] font-medium text-[#323232] leading-snug">{q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-[#6D767D]">
                    <ChevronDown size={20} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-[#6D767D]">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
