import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  { initial: "E", name: "Emma Haddad", label: "Local Guide · Google Reviews",
    quote: "I've been afraid of dentists my whole life, but Dr. Mariana completely changed that. From the moment you step in, she makes you feel comfortable and at ease. She explains every step so you always know what's happening — and you can truly feel you're in expert hands. Parking is never a problem either. Once you visit her, she'll be your new go-to dentist!" },
  { initial: "R", name: "Rita Raad", label: "Verified Patient · Google Reviews",
    quote: "I had the best experience at Dr. Mariana's clinic and I will definitely be back. The treatment was smooth and painless, and the service was incredibly professional and caring. I left fully satisfied and highly recommend it to anyone." },
  { initial: "A", name: "Anthony Karam", label: "Verified Patient · Google Reviews",
    quote: "Dr. Mariana Karam is truly exceptional. From the moment you walk in, you're treated with genuine care, professionalism, and respect. She explains every step clearly, listens to your concerns, and always ensures you're comfortable. Her precision and gentle technique are unmatched — she genuinely makes going to the dentist feel easy." },
  { initial: "R", name: "Rim Kaady", label: "Verified Patient · Google Reviews",
    quote: "I had the best experience with Dr. Mariana! From the moment I walked in, she was welcoming and professional. The clinic was spotless, and she took the time to explain everything clearly and made sure I was comfortable throughout the entire procedure. Highly recommended!" },
  { initial: "R", name: "Ranine Abi Rached", label: "Verified Patient · Google Reviews",
    quote: "I had such a great experience with Dr. Mariana Karam. She's super professional, gentle, and really takes the time to explain everything clearly. The clinic is clean, calm, and truly welcoming. I highly recommend her if you're looking for someone who genuinely cares about her patients." },
  { initial: "J", name: "Joe Baz", label: "Local Guide · Google Reviews",
    quote: "I had a great experience at Dr. Mariana Karam's clinic. It's welcoming, clean, and modern — and she was professional, gentle, and thorough. She took the time to explain everything and made sure I was comfortable throughout. Highly recommend for anyone looking for quality dental care!" },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => { clearInterval(id); embla.off("select", onSelect); };
  }, [embla]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="bg-[#FAFAF8] section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal><div className="eyebrow mb-4">Patient Stories</div></Reveal>
          <Reveal delay={0.1}><h2 className="h2-section mb-5">What Our Patients Say</h2></Reveal>
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2 text-[0.875rem] text-[#6D767D]">
              <span className="inline-grid place-items-center size-5 rounded-full bg-[#FFFFFF] border border-[#E8E6E2] text-[10px] font-semibold">G</span>
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} strokeWidth={1.5} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </span>
              <span>5.0 rating on Google Reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden -mx-5 px-5" ref={emblaRef}>
          <div className="flex gap-6">
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-warm-md p-6 md:p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={15} strokeWidth={1.5} className="fill-current" />
                  ))}
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-[#323232]/85 flex-1">"{r.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[#E8E6E2] flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#F0EFED] text-[#6D767D] font-semibold grid place-items-center">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-medium text-[#323232] text-sm">{r.name}</div>
                    <div className="text-[0.75rem] text-[#6D767D]">{r.label}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={scrollPrev} aria-label="Previous testimonial" className="size-10 rounded-full border border-[#E8E6E2] hover:border-[#323232] grid place-items-center text-[#323232] transition-colors">
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => embla?.scrollTo(i)}
                className={`rounded-full transition-all ${selected === i ? "bg-[#323232] size-2.5" : "bg-[#E8E6E2] size-1.5"}`}
              />
            ))}
          </div>
          <button onClick={scrollNext} aria-label="Next testimonial" className="size-10 rounded-full border border-[#E8E6E2] hover:border-[#323232] grid place-items-center text-[#323232] transition-colors">
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
