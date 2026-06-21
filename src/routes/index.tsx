import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone, ArrowRight, Target, MessageCircle, CheckCircle, MapPin,
  User as UserIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Reveal, RevealStagger, RevealChild, WordSplit, ClipReveal } from "@/components/Reveal";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BeforeAfterGrid } from "@/components/BeforeAfter";
import { InstagramIcon, LinkedinIcon } from "@/components/BrandIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mek Dental Clinic — Confident Smiles in Hadath, Lebanon" },
      { name: "description", content: "Expert dental care in Hadath, Baabda. Led by Dr. Mariana Karam, Endodontist. Teeth whitening, Hollywood Smile, dental implants, braces & more. Book today." },
      { property: "og:title", content: "Mek Dental Clinic — Confident Smiles in Hadath, Lebanon" },
      { property: "og:description", content: "Expert dental care in Hadath, Baabda. Led by Dr. Mariana Karam, Endodontist." },
    ],
  }),
  component: Home,
});

const STATS = [
  ["98%", "Patient Satisfaction"],
  ["7+", "Treatments Offered"],
  ["3+", "Years of Excellence"],
] as const;

const HOME_PAIRS = [
  { label: "Hollywood Smile" },
  { label: "Porcelain Veneers" },
  { label: "Dental Implant Crown" },
  { label: "Professional Whitening" },
  { label: "Composite Bonding" },
  { label: "Clear Aligners" },
];

const DIFFS = [
  { icon: Target, title: "Specialist-Led Care", body: "Led by Dr. Mariana Karam — a certified Endodontist — your treatment is guided by deep specialist knowledge, not generalist guesswork." },
  { icon: MessageCircle, title: "Clear Communication", body: "We explain every step before we begin it. You'll always know what's happening, why it's happening, and what to expect next." },
  { icon: CheckCircle, title: "Modern Facility", body: "State-of-the-art equipment in a spotless, welcoming environment — because precision tools produce precision results." },
  { icon: MapPin, title: "Easy to Reach", body: "Located at Event 2020 Center in Hadath, with easy parking — so your journey to a better smile starts stress-free." },
];

function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FAFAF8] min-h-[100dvh] pt-28 md:pt-32 pb-16 flex items-center">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="eyebrow mb-6"
            >
              Trusted Dental Care in Hadath — Since 2022
            </motion.div>
            <h1 className="h1-hero text-[#323232] mb-7">
              <span className="block"><WordSplit text="Your Smile" delay={0.2} /></span>
              <span className="block"><WordSplit text="Deserves to Be" delay={0.35} /></span>
              <span className="block italic font-light text-[#323232]/85"><WordSplit text="Seen." delay={0.5} /></span>
            </h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="body-lg max-w-[480px] mb-9"
            >
              Expert dental care in a calm, modern clinic designed around you — from your first check-up to your complete smile transformation. In Hadath, Baabda.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/contact" className="btn-primary">Book Your Appointment</Link>
              <a href="tel:+96171349369" className="btn-outline">
                <Phone size={16} strokeWidth={1.5} /> Call +961 71 349 369
              </a>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 pt-6 border-t border-[#E8E6E2] flex flex-wrap gap-x-7 gap-y-3 text-[0.8125rem] text-[#6D767D]"
            >
              <span className="flex items-center gap-1.5"><span className="text-[#F59E0B]">★</span> 5.0 · Google Reviews</span>
              <span>3+ Years of Excellence</span>
              <span>7+ Treatments Offered</span>
              <span>98% Patient Satisfaction</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-lg frame-placeholder"
            >
              <div className="absolute inset-0 grid place-items-center text-center gap-2 px-6">
                <UserIcon size={56} strokeWidth={1.5} className="text-[#A09C97]" />
                <p className="text-[#6D767D] text-sm">Patient smiling confidently<br/>at Mek Dental Clinic</p>
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-[#323232] text-[#FAFAF8] px-4 py-1.5 text-[0.75rem] font-medium">
                Est. 2022 · Hadath, Baabda
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <ClipReveal className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-md frame-placeholder">
              <div className="absolute inset-0 grid place-items-center text-[#A09C97] text-sm">Clinic interior</div>
            </ClipReveal>
            <ClipReveal
              className="absolute -bottom-10 -right-4 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-warm-lg frame-placeholder hidden md:block"
              delay={0.15}
            >
              <div className="absolute inset-0 grid place-items-center text-[#A09C97] text-sm">Consultation</div>
            </ClipReveal>
          </div>
          <div>
            <Reveal><div className="eyebrow mb-4">About Mek Dental</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-6">A Place Where Comfort Meets Precision</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg mb-5">
                At Mek Dental Clinic, we believe every patient deserves expert, gentle care in a modern, welcoming environment. Founded by Dr. Mariana Karam — a specialist Endodontist — our clinic has been transforming smiles and restoring confidence in Hadath, Baabda since 2022.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="body-lg mb-7">
                Our approach is simple: treat every patient with the attention and expertise they deserve, explain every procedure clearly, and create an experience that feels anything but clinical.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/about" className="text-link mb-10">Discover Our Story <ArrowRight size={16} strokeWidth={1.5} /></Link>
            </Reveal>
            <div className="mt-10 pt-7 border-t border-[#E8E6E2] grid grid-cols-3 gap-4">
              {STATS.map(([n, l]) => (
                <Reveal key={l}>
                  <div>
                    <div className="font-display font-bold text-3xl md:text-4xl text-[#323232] leading-none">{n}</div>
                    <div className="mt-2 text-[0.8125rem] text-[#6D767D]">{l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-[#F0EFED] section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal><div className="eyebrow mb-4">Our Expertise</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-5">Treatments Designed for Your Confidence</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg">From your first consultation to your final reveal — every treatment delivered with precision and genuine care.</p>
            </Reveal>
          </div>

          <RevealStagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <RevealChild key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block bg-white p-7 border-t-2 border-[#323232] shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all h-full"
                >
                  <s.icon size={24} strokeWidth={1.5} className="text-[#6D767D] mb-5" />
                  <h3 className="h3-card mb-3">{s.name}</h3>
                  <p className="text-[0.9rem] text-[#6D767D] leading-relaxed mb-5">{s.shortHome}</p>
                  <span className="text-link text-sm">Learn More <ArrowRight size={14} strokeWidth={1.5} /></span>
                </Link>
              </RevealChild>
            ))}
          </RevealStagger>

          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link to="/services" className="btn-primary">View All Treatments <ArrowRight size={16} strokeWidth={1.5} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Reveal><div className="eyebrow mb-4">Why Mek Dental</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-6">What Makes Us Different</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg mb-8">
                Most dental anxieties are born from not knowing what comes next. We've built a clinic culture around total transparency, genuine warmth, and results that speak louder than any marketing.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/contact" className="btn-primary">Book Your Free Consultation <ArrowRight size={16} strokeWidth={1.5} /></Link>
            </Reveal>
          </div>
          <RevealStagger stagger={0.12} className="space-y-7">
            {DIFFS.map((d) => (
              <RevealChild key={d.title}>
                <div className="border-l-2 border-[#E8E6E2] pl-6 py-1 hover:border-[#323232] transition-colors">
                  <d.icon size={22} strokeWidth={1.5} className="text-[#6D767D] mb-3" />
                  <h3 className="font-display text-xl font-medium text-[#323232] mb-2">{d.title}</h3>
                  <p className="text-[0.9375rem] text-[#6D767D] leading-relaxed">{d.body}</p>
                </div>
              </RevealChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CLINICAL CASES — dark centerpiece */}
      <section className="bg-[#323232] section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal><div className="eyebrow !text-[#6D767D] mb-4">Real Results</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section text-[#FAFAF8] mb-5">Transformations That Speak for Themselves</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg !text-[#6D767D]">
                These are real patient outcomes from Mek Dental Clinic. Every case below is a real smile restored, a real person who decided enough was enough.
              </p>
            </Reveal>
          </div>
          <BeforeAfterGrid pairs={HOME_PAIRS} variant="dark" />
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link to="/gallery" className="btn-outline-light">See the Full Gallery <ArrowRight size={16} strokeWidth={1.5} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <HowItWorks />

      {/* MEET DOCTOR */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ClipReveal className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-warm-lg frame-placeholder">
              <div className="absolute inset-0 grid place-items-center text-center gap-2 px-4">
                <UserIcon size={56} strokeWidth={1.5} className="text-[#A09C97]" />
                <p className="text-sm text-[#6D767D]">Doctor photo — Dr. Mariana Karam</p>
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-[#323232] text-[#FAFAF8] px-4 py-1.5 text-[0.8125rem] font-medium">
                Dr. Mariana Karam · Endodontist
              </span>
            </ClipReveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal><div className="eyebrow mb-4">Meet Your Doctor</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-3">Dr. Mariana Karam</h2></Reveal>
            <Reveal delay={0.15}>
              <span className="inline-flex items-center rounded-full border border-[#E8E6E2] px-3 py-1 text-[0.8125rem] text-[#6D767D] mb-6">
                Specialist in Endodontics
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg mb-5">
                Dr. Mariana Karam is the founder and lead dentist at Mek Dental Clinic, specializing in Endodontics — the field of dentistry focused on treating the inner tissue of teeth, including complex root canal procedures. With a reputation built entirely on patient outcomes and word-of-mouth referrals, Dr. Mariana has become one of Hadath's most trusted dental specialists.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="body-lg mb-7">
                Her clinical philosophy centers on three pillars: precision in every procedure, transparency in every consultation, and genuine warmth in every interaction. Since founding Mek Dental Clinic in 2022, she has helped hundreds of patients across Baabda overcome dental anxiety and achieve the smiles they had long deserved.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  "Specialist in Endodontics (Root Canal Treatment)",
                  "Expert in Hollywood Smile & Complete Smile Design",
                  "Advanced Dental Implant Placement Specialist",
                  "Trained in Aesthetic Dentistry & Porcelain Veneers",
                  "Licensed & Certified Dental Practitioner — Lebanon",
                  "Fluent in Arabic, English, and French",
                ].map((c) => (
                  <li key={c} className="flex gap-2.5 text-[0.9375rem] text-[#6D767D]">
                    <CheckCircle size={18} strokeWidth={1.5} className="shrink-0 mt-0.5 text-[#323232]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="flex flex-wrap gap-3 items-center">
                <Link to="/contact" className="btn-primary">Book with Dr. Mariana <ArrowRight size={16} strokeWidth={1.5} /></Link>
                <div className="flex gap-2 ml-2">
                  <a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="size-10 rounded-full border border-[#E8E6E2] grid place-items-center text-[#6D767D] hover:text-[#323232] hover:border-[#323232] transition-colors">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/dr-mariana-karam-1aa134235/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="size-10 rounded-full border border-[#E8E6E2] grid place-items-center text-[#6D767D] hover:text-[#323232] hover:border-[#323232] transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
}
