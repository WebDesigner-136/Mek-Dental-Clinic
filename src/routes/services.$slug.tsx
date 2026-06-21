import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealStagger, RevealChild } from "@/components/Reveal";
import { HowItWorks } from "@/components/HowItWorks";
import { CTABanner } from "@/components/CTABanner";
import { SERVICES, getService } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = params?.slug ? getService(params.slug) : undefined;
    if (!s) return { meta: [{ title: "Service — Mek Dental Clinic" }] };
    return {
      meta: [
        { title: `${s.name} | Mek Dental Clinic — Hadath, Lebanon` },
        { name: "description", content: s.shortServices },
        { property: "og:title", content: `${s.name} | Mek Dental Clinic` },
        { property: "og:description", content: s.shortServices },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4 pt-32">
      <div>
        <h1 className="h2-section mb-3">Service not found</h1>
        <Link to="/services" className="btn-primary mt-4">View all services</Link>
      </div>
    </div>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  const reduce = useReducedMotion();
  if (!service) {
    throw notFound();
  }
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#323232] min-h-[60dvh] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #3D3A38 0%, #2A2826 100%)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(50,50,50,0.55)" }} />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[0.8125rem] text-[#6D767D] mb-8">
            <Link to="/" className="hover:text-[#FAFAF8] transition-colors">Home</Link>
            <ChevronRight size={12} strokeWidth={1.5} />
            <Link to="/services" className="hover:text-[#FAFAF8] transition-colors">Services</Link>
            <ChevronRight size={12} strokeWidth={1.5} />
            <span className="text-[#FAFAF8]">{service.name}</span>
          </nav>
          <div className="max-w-3xl">
            <Icon size={36} strokeWidth={1.5} className="text-[#6D767D] mb-6" />
            <h1 className="h1-hero text-[#FAFAF8] mb-8">{service.name}</h1>
            <Link to="/contact" className="btn-inverse">
              Book This Treatment <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#FAFAF8] section-y">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><div className="eyebrow mb-4">Overview</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section mb-7">What is {service.name}?</h2></Reveal>
            {service.overview.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <p className="body-lg mb-5">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5 lg:pt-20">
            <Reveal>
              <div className="bg-white rounded-2xl p-8 shadow-warm-md border border-[#E8E6E2]">
                <div className="eyebrow mb-5">Key Benefits</div>
                <ul className="space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.9375rem] text-[#323232]/85">
                      <CheckCircle size={20} strokeWidth={1.5} className="shrink-0 mt-0.5 text-[#323232]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorks
        steps={service.steps.map((s, i) => ({ icon: [Icon, CheckCircle, ArrowRight, CheckCircle, CheckCircle][i] ?? CheckCircle, title: s.title, body: s.body }))}
        eyebrow="What to Expect"
        title={`Your ${service.name} Journey, Step by Step`}
      />

      {/* Related */}
      <section className="bg-[#F0EFED] section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal><div className="eyebrow mb-4">Related Treatments</div></Reveal>
            <Reveal delay={0.1}><h2 className="h2-section">Explore More of Our Care</h2></Reveal>
          </div>
          <RevealStagger stagger={0.07} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s) => (
              <RevealChild key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group block bg-white rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-lg hover:-translate-y-1 transition-all h-full">
                  <div className="aspect-video frame-placeholder relative overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center">
                      <s.icon size={32} strokeWidth={1.5} className="text-[#6D767D]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium mb-2">{s.name}</h3>
                    <p className="text-[0.9rem] text-[#6D767D] leading-relaxed mb-4">{s.shortServices}</p>
                    <span className="text-link text-sm">Explore <ArrowRight size={14} strokeWidth={1.5} /></span>
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
