import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Mek Dental Clinic" },
      { name: "description", content: "Terms governing the use of the Mek Dental Clinic website and booking services." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="bg-[#FAFAF8] pt-32 pb-24 md:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="h1-hero text-[#323232] mb-8">Terms of Service</h1>
        <div className="space-y-5 body-lg">
          <p>By using the Mek Dental Clinic website and booking services, you agree to these terms. Content on this site is provided for information only and does not constitute medical advice. A formal consultation is required before any treatment.</p>
          <p>Appointment requests submitted through this site are confirmed within 24 hours by phone or WhatsApp. We reserve the right to reschedule appointments where clinically necessary, with as much notice as possible.</p>
          <p>All website content — including photography, copy, and design — is the property of Mek Dental Clinic and may not be reproduced without permission.</p>
          <p>For questions about these terms, contact <a className="underline" href="mailto:drmarianakaram@gmail.com">drmarianakaram@gmail.com</a>.</p>
        </div>
        <div className="mt-10"><Link to="/" className="btn-outline">Back to home</Link></div>
      </div>
    </section>
  );
}
