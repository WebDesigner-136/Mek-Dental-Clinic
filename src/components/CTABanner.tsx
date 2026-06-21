import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner({
  title = "Your Transformation Starts with One Appointment",
  body = "Every result above started with a single message or call. It takes less than 2 minutes to book. We'll handle everything else.",
}: { title?: string; body?: string }) {
  return (
    <section className="bg-[#323232] section-y">
      <div className="container-x text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="h2-section text-[#FAFAF8] mb-5">{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg text-[#6D767D] mb-8">{body}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-inverse">Book Your Appointment</Link>
            <a href="tel:+96171349369" className="btn-outline-light">
              <Phone size={16} strokeWidth={1.5} /> Call +961 71 349 369
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
