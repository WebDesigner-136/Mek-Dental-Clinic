export function getDentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Mek Dental Clinic",
    description:
      "Premium dental clinic in Hadath, Baabda, Lebanon — led by Dr. Mariana Karam, specialist Endodontist. Services include teeth whitening, Hollywood Smile, dental implants, braces, aesthetic dentistry, oral surgery, and periodontics.",
    url: "https://mekdental.com",
    telephone: "+96171349369",
    email: "drmarianakaram@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Event 2020 Center, Bloc D, 1st Floor",
      addressLocality: "Hadath",
      addressRegion: "Baabda",
      addressCountry: "LB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/dr.marianakaram/",
      "https://www.linkedin.com/in/dr-mariana-karam-1aa134235/",
    ],
    medicalSpecialty: "Endodontics",
    foundingDate: "2022",
    priceRange: "$$",
  };
}
