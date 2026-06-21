import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./BrandIcons";
import { SERVICES } from "@/lib/services";

const navLinks = [
  ["/", "Home"], ["/about", "About Us"], ["/services", "Services"],
  ["/gallery", "Smile Gallery"], ["/contact", "Contact Us"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[#323232] text-[#6D767D]">
      <div className="container-x py-20 md:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-[1.25rem] font-semibold text-[#FAFAF8] mb-3">
            Mek Dental Clinic
          </div>
          <p className="text-[0.875rem] leading-relaxed max-w-xs mb-6">
            Crafting confident smiles in Lebanon since 2022.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener"
               aria-label="Instagram" className="text-[#6D767D] hover:text-[#FAFAF8] transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dr-mariana-karam-1aa134235/" target="_blank" rel="noreferrer noopener"
               aria-label="LinkedIn" className="text-[#6D767D] hover:text-[#FAFAF8] transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-[#FAFAF8]/60 mb-5">Navigation</h4>
          <ul className="space-y-3 text-[0.9375rem]">
            {navLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[#FAFAF8] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-[#FAFAF8]/60 mb-5">Our Services</h4>
          <ul className="space-y-3 text-[0.9375rem]">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[#FAFAF8] transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-[#FAFAF8]/60 mb-5">Find Us</h4>
          <ul className="space-y-3.5 text-[0.9375rem]">
            <li className="flex gap-3"><MapPin size={18} strokeWidth={1.5} className="shrink-0 mt-0.5" /><span>Event 2020 Center, Bloc D - 1st Floor<br/>Hadath, Baabda</span></li>
            <li className="flex gap-3"><Phone size={18} strokeWidth={1.5} className="shrink-0 mt-0.5" /><a href="tel:+96171349369" className="hover:text-[#FAFAF8] transition-colors">+961 71 349 369</a></li>
            <li className="flex gap-3"><Mail size={18} strokeWidth={1.5} className="shrink-0 mt-0.5" /><a href="mailto:drmarianakaram@gmail.com" className="hover:text-[#FAFAF8] transition-colors break-all">drmarianakaram@gmail.com</a></li>
            <li className="flex gap-3"><Clock size={18} strokeWidth={1.5} className="shrink-0 mt-0.5" /><span>Mon–Fri: 9:00 AM – 7:00 PM<br/>Sat–Sun: Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#444444]">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-[0.8125rem]">
          <p>© 2025 Mek Dental Clinic · All Rights Reserved</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-[#FAFAF8] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FAFAF8] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
