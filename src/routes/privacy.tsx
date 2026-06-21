import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mek Dental Clinic" },
      { name: "description", content: "How Mek Dental Clinic collects, uses, and safeguards your personal information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="bg-[#FAFAF8] pt-32 pb-24 md:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="h1-hero text-[#323232] mb-8">Privacy Policy</h1>
        <div className="space-y-5 body-lg">
          <p>Mek Dental Clinic ("we", "our") is committed to protecting your personal information and your right to privacy. This policy explains what data we collect, why we collect it, and how it is safeguarded.</p>
          <p>We collect only the information you voluntarily provide when booking an appointment — your name, phone number, optional email, and any clinical context you choose to share. This information is used solely to contact you about your appointment and to provide ongoing dental care.</p>
          <p>We do not sell or share your personal information with third parties for marketing. Patient clinical records are stored securely and only accessible to authorised clinical staff.</p>
          <p>If you would like to review, update, or delete the personal information we hold about you, please contact us at <a className="underline" href="mailto:drmarianakaram@gmail.com">drmarianakaram@gmail.com</a> or call <a className="underline" href="tel:+96171349369">+961 71 349 369</a>.</p>
        </div>
        <div className="mt-10"><Link to="/" className="btn-outline">Back to home</Link></div>
      </div>
    </section>
  );
}
