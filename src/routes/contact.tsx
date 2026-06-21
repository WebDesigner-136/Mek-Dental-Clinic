import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, Loader2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, LinkedinIcon } from "@/components/BrandIcons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Mek Dental Clinic — Hadath, Baabda" },
      { name: "description", content: "Book your appointment at Mek Dental Clinic in Hadath, Baabda. Call +961 71 349 369, WhatsApp us, or fill our online form. Mon–Fri 9AM–7PM." },
      { property: "og:title", content: "Book an Appointment | Mek Dental Clinic" },
      { property: "og:description", content: "Confirm your appointment within 24 hours — call, WhatsApp, or book online." },
    ],
  }),
  component: Contact,
});

function WhatsAppIconWhite() {
  return (
    <svg width={20} height={20} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.355.617 4.654 1.79 6.683L2.667 29.333l6.84-1.79a13.291 13.291 0 0 0 6.493 1.673h.006c7.36 0 13.33-5.97 13.331-13.333.001-3.563-1.385-6.913-3.903-9.434C22.917 4.053 19.566 2.667 16.001 2.667zm6.092 16.193c-.334-.167-1.974-.974-2.28-1.085-.305-.111-.527-.167-.749.167-.222.334-.86 1.085-1.054 1.307-.194.222-.388.25-.722.083-.334-.167-1.41-.52-2.685-1.658-.992-.886-1.66-1.978-1.855-2.312-.194-.334-.02-.514.147-.68.151-.149.334-.39.5-.585.167-.194.222-.334.334-.556.111-.222.056-.417-.028-.584-.083-.167-.749-1.81-1.027-2.479-.27-.65-.545-.562-.75-.572-.193-.009-.416-.011-.638-.011-.222 0-.583.083-.888.417-.305.334-1.165 1.138-1.165 2.775s1.193 3.22 1.36 3.442c.167.222 2.348 3.588 5.694 5.029.795.343 1.416.547 1.9.7.798.254 1.524.218 2.099.132.64-.096 1.974-.808 2.252-1.587.278-.78.278-1.448.194-1.587-.083-.139-.305-.222-.639-.389z"/>
    </svg>
  );
}

type FormValues = {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
};

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    defaultValues: { service: "", time: "" },
  });

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    console.log("Booking request:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <PageHero
        crumb={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        title="Let's Start Your Smile Journey"
        subtitle="One message or call is all it takes. We'll confirm your appointment within 24 hours."
        variant="light"
        minH="35dvh"
      />

      <section className="bg-[#FAFAF8] pb-24">
        <div className="container-x grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 items-start">
          {/* LEFT: Info */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display text-[1.75rem] font-medium mb-7">Get in Touch</h2>
              <ul className="space-y-5 mb-8">
                <li className="flex gap-3 items-start"><MapPin size={20} strokeWidth={1.5} className="text-[#6D767D] mt-0.5 shrink-0" /><span className="text-[0.9375rem] text-[#323232]/85">Event 2020 Center, Bloc D - 1st Floor<br/>Hadath, Baabda, Lebanon</span></li>
                <li className="flex gap-3 items-start"><Phone size={20} strokeWidth={1.5} className="text-[#6D767D] mt-0.5 shrink-0" /><a href="tel:+96171349369" className="text-[0.9375rem] text-[#323232] hover:underline">+961 71 349 369</a></li>
                <li className="flex gap-3 items-start"><Mail size={20} strokeWidth={1.5} className="text-[#6D767D] mt-0.5 shrink-0" /><a href="mailto:drmarianakaram@gmail.com" className="text-[0.9375rem] text-[#323232] hover:underline break-all">drmarianakaram@gmail.com</a></li>
                <li className="flex gap-3 items-start"><InstagramIcon size={20} className="text-[#6D767D] mt-0.5 shrink-0" /><a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener" className="text-[0.9375rem] text-[#323232] hover:underline">@dr.marianakaram</a></li>
                <li className="flex gap-3 items-start"><LinkedinIcon size={20} className="text-[#6D767D] mt-0.5 shrink-0" /><a href="https://www.linkedin.com/in/dr-mariana-karam-1aa134235/" target="_blank" rel="noreferrer noopener" className="text-[0.9375rem] text-[#323232] hover:underline">Dr. Mariana Karam</a></li>
                <li className="flex gap-3 items-start"><Clock size={20} strokeWidth={1.5} className="text-[#6D767D] mt-0.5 shrink-0" /><span className="text-[0.9375rem] text-[#323232]/85">Monday – Friday: 9:00 AM – 7:00 PM<br/>Saturday & Sunday: Closed</span></li>
              </ul>

              <a
                href="https://wa.me/96171349369"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 w-full rounded-full py-3.5 font-medium text-white shadow-warm-md hover:shadow-warm-lg transition-all"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIconWhite /> Chat with Us on WhatsApp
              </a>

              <div className="mt-6 rounded-xl overflow-hidden shadow-warm-sm border border-[#E8E6E2]">
                <iframe
                  title="Mek Dental Clinic location"
                  src="https://www.google.com/maps?q=Hadath+Baabda+Lebanon&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Form */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="bg-white rounded-2xl p-7 md:p-10 shadow-warm-md border border-[#E8E6E2]">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 size={56} strokeWidth={1.5} className="text-[#323232] mx-auto mb-5" />
                    <h3 className="font-display text-2xl text-[#323232] mb-3">Appointment Request Received!</h3>
                    <p className="text-[0.9375rem] text-[#6D767D] max-w-md mx-auto mb-7">
                      Thank you for reaching out. We'll confirm your appointment within 24 hours via phone or WhatsApp. We look forward to seeing you at Mek Dental Clinic.
                    </p>
                    <Link to="/" className="btn-primary">Return to Home</Link>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-[1.75rem] font-medium mb-2">Book Your Appointment</h2>
                    <p className="text-[0.9375rem] text-[#6D767D] mb-7">
                      Fill out the form below and we'll confirm your appointment within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
                      <Field label="Full Name" required error={errors.fullName?.message}>
                        <input
                          type="text"
                          placeholder="Your full name"
                          className={inputCls(!!errors.fullName)}
                          {...register("fullName", { required: "Please share your name", minLength: { value: 2, message: "Please enter at least 2 characters" } })}
                        />
                      </Field>
                      <Field label="Phone Number" required error={errors.phone?.message}>
                        <input
                          type="tel"
                          placeholder="+961 XX XXX XXX"
                          className={inputCls(!!errors.phone)}
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[+\d\s()-]{7,}$/, message: "Enter a valid phone number" },
                          })}
                        />
                      </Field>
                      <Field label="Email Address (optional)" error={errors.email?.message}>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className={inputCls(!!errors.email)}
                          {...register("email", { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })}
                        />
                      </Field>
                      <Field label="Service of Interest" required error={errors.service?.message}>
                        <select className={inputCls(!!errors.service)} {...register("service", { required: "Choose a service" })}>
                          <option value="">Choose a service…</option>
                          {["General Consultation", "Teeth Whitening", "Hollywood Smile", "Oral Surgery", "Aesthetic Dentistry", "Braces & Aligners", "Dental Implants", "Periodontics", "Other"].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </Field>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Preferred Appointment Date" required error={errors.date?.message}>
                          <input type="date" min={today} className={inputCls(!!errors.date)} {...register("date", { required: "Choose a date" })} />
                        </Field>
                        <Field label="Preferred Time Slot" required error={errors.time?.message}>
                          <select className={inputCls(!!errors.time)} {...register("time", { required: "Choose a time" })}>
                            <option value="">Choose a time…</option>
                            <option>Morning (9:00 AM – 12:00 PM)</option>
                            <option>Afternoon (12:00 PM – 4:00 PM)</option>
                            <option>Evening (4:00 PM – 7:00 PM)</option>
                          </select>
                        </Field>
                      </div>
                      <Field label="Additional Information (optional)">
                        <textarea
                          rows={4}
                          placeholder="Any details about your needs, concerns, or questions..."
                          className={inputCls(false) + " resize-none"}
                          {...register("notes")}
                        />
                      </Field>

                      <button type="submit" disabled={loading} className="btn-primary justify-center w-full !py-4 disabled:opacity-70">
                        {loading ? (<><Loader2 size={18} strokeWidth={1.5} className="animate-spin" /> Sending your request…</>) : "Confirm My Appointment"}
                      </button>
                      <p className="text-center text-[0.8125rem] text-[#6D767D]">
                        🔒 Your information is kept completely private and will never be shared.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social row */}
      <section className="bg-[#F0EFED] py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-start justify-center gap-10 sm:gap-16 text-center">
            <a href="https://www.instagram.com/dr.marianakaram/" target="_blank" rel="noreferrer noopener" className="group flex flex-col items-center gap-3">
              <span className="size-14 rounded-full bg-white shadow-warm-sm grid place-items-center group-hover:scale-110 group-hover:shadow-warm-md transition-all" style={{ background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)" }}>
                <InstagramIcon size={22} className="text-white" />
              </span>
              <span className="text-[0.875rem] text-[#323232]">@dr.marianakaram</span>
            </a>
            <a href="https://wa.me/96171349369" target="_blank" rel="noreferrer noopener" className="group flex flex-col items-center gap-3">
              <span className="size-14 rounded-full shadow-warm-sm grid place-items-center text-white group-hover:scale-110 group-hover:shadow-warm-md transition-all" style={{ background: "#25D366" }}>
                <WhatsAppIconWhite />
              </span>
              <span className="text-[0.875rem] text-[#323232]">+961 71 349 369</span>
            </a>
            <a href="https://www.linkedin.com/in/dr-mariana-karam-1aa134235/" target="_blank" rel="noreferrer noopener" className="group flex flex-col items-center gap-3">
              <span className="size-14 rounded-full shadow-warm-sm grid place-items-center text-white group-hover:scale-110 group-hover:shadow-warm-md transition-all" style={{ background: "#0A66C2" }}>
                <LinkedinIcon size={22} className="text-white" />
              </span>
              <span className="text-[0.875rem] text-[#323232]">Dr. Mariana Karam</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function inputCls(hasError: boolean) {
  return `w-full bg-white border rounded-xl px-4 py-3 text-[0.9375rem] text-[#323232] placeholder:text-[#9E9B97] transition-all focus:outline-none focus:ring-2 focus:ring-[#323232]/30 focus:border-[#323232] ${
    hasError ? "border-red-400" : "border-[#E8E6E2]"
  }`;
}

function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[0.8125rem] font-medium text-[#323232] mb-2">
        {label}{required && <span className="text-[#6D767D]"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-red-500">
          <AlertCircle size={14} strokeWidth={1.5} /> {error}
        </span>
      )}
    </label>
  );
}
