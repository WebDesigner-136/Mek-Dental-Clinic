import {
  Sun, Star, Zap, Sparkles, AlignCenter, Anchor, Shield,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: typeof Sun;
  shortHome: string;
  shortServices: string;
  overview: string[];
  benefits: string[];
  steps: { title: string; body: string }[];
};

const stdSteps = (titles: string[], bodies: string[]) =>
  titles.map((t, i) => ({ title: t, body: bodies[i] }));

export const SERVICES: Service[] = [
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: Sun,
    shortHome:
      "Brighten your smile up to 8 shades with our professional in-clinic whitening — safe, precise, and completed in a single visit.",
    shortServices:
      "Brighten your smile by up to 8 shades with professional in-clinic whitening — safe, effective, and completed in a single visit.",
    overview: [
      "Professional teeth whitening at Mek Dental Clinic uses clinically-proven peroxide-based bleaching agents that safely break down staining compounds accumulated on the enamel surface over years. Unlike over-the-counter strips or whitening toothpastes, our in-clinic treatment is administered and monitored directly by Dr. Mariana, ensuring results that are uniform, predictable, and completely safe for your enamel and gum tissue.",
      "The treatment is ideal for patients with staining from coffee, tea, wine, tobacco, or general aging of the enamel. In a single session, most patients achieve 4–8 shades of improvement — results that are immediately visible and last 12–24 months with proper aftercare.",
      "Before your whitening session, Dr. Mariana conducts a brief dental assessment to ensure your teeth are suitable for whitening and that any existing restorations (fillings, crowns, veneers) are accounted for in your treatment plan.",
    ],
    benefits: [
      "Visible results in a single visit",
      "Up to 8 shades brighter",
      "Supervised for complete safety",
      "Long-lasting with simple maintenance",
      "Immediate confidence boost",
    ],
    steps: stdSteps(
      ["Pre-treatment Assessment", "Gum Protection", "Whitening Gel Application", "Light Activation", "Final Shade Reveal"],
      [
        "A brief check ensures your teeth and gums are ready for whitening.",
        "A protective barrier is placed to shield gum tissue from the bleaching agent.",
        "The medical-grade whitening gel is applied evenly across your teeth.",
        "An activation light accelerates the brightening process where indicated.",
        "We compare before and after shades so you see the transformation immediately.",
      ],
    ),
  },
  {
    slug: "hollywood-smile",
    name: "Hollywood Smile",
    icon: Star,
    shortHome:
      "A digitally designed, complete smile makeover — crafted around your face, personality, and confidence goals.",
    shortServices:
      "A digitally designed, complete smile transformation — porcelain veneers, contouring, and whitening crafted to your face and personality.",
    overview: [
      "The Hollywood Smile is the pinnacle of cosmetic dentistry — a complete smile makeover that combines multiple treatments to create a flawless, natural-looking smile specifically designed for your face, skin tone, and personality. At Mek Dental Clinic, every Hollywood Smile journey begins with a Digital Smile Design (DSD) session where you digitally preview your final results before any irreversible work begins.",
      "The treatment typically involves porcelain veneers — ultra-thin ceramic shells bonded to the front surface of your teeth — and may also incorporate teeth whitening, gum contouring, and selective composite adjustments. The result is a smile that looks perfectly natural, yet impeccably refined.",
      "Dr. Mariana approaches every Hollywood Smile as a piece of artistry guided by clinical science. No two designs are identical — each is tailored to the individual's facial proportions, tooth structure, lip framing, and personal preference.",
    ],
    benefits: [
      "Completely personalised smile design",
      "Digital preview before treatment begins",
      "Natural-looking porcelain veneers",
      "Combined whitening and contouring",
      "Transformative, long-lasting results",
    ],
    steps: stdSteps(
      ["Digital Smile Design", "Tooth Preparation", "Temporary Veneers", "Final Veneer Placement", "Review and Polish"],
      [
        "We map your ideal smile digitally so you preview the outcome first.",
        "Where required, minimal enamel is shaped to receive the veneers.",
        "You wear temporary veneers to validate fit, shape, and comfort.",
        "Hand-crafted porcelain veneers are precisely bonded into place.",
        "We refine bite, polish, and ensure every detail meets your expectations.",
      ],
    ),
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    icon: Zap,
    shortHome:
      "Expert extractions, wisdom tooth removal, and surgical procedures — performed with precision and minimal recovery time.",
    shortServices:
      "Expert extractions, wisdom tooth removal, and surgical procedures — precise, comfortable, and with clear aftercare guidance.",
    overview: [
      "Oral surgery at Mek Dental Clinic encompasses a range of minor and complex surgical dental procedures, all performed by Dr. Mariana with the precision, care, and clinical expertise of a specialist practitioner. Our surgical services include standard and complex tooth extractions, wisdom tooth removal (including impacted cases), soft tissue procedures, and bone grafting to prepare sites for dental implants.",
      "Patient comfort during surgery is achieved through effective local anesthesia and a calm, patient-led consultation process. Dr. Mariana takes the time before every surgical procedure to ensure you fully understand what will happen, what you will feel, and how to manage recovery — eliminating uncertainty and reducing anxiety at every step.",
      "Post-operative aftercare is provided in detail, and the clinic is reachable for any concerns during your recovery.",
    ],
    benefits: [
      "Full range of surgical dental procedures",
      "Impacted wisdom tooth specialist",
      "Pre-surgery consultation to eliminate uncertainty",
      "Detailed post-operative aftercare plan",
      "Emergency follow-up support available",
    ],
    steps: stdSteps(
      ["Pre-surgical Assessment", "Anesthesia", "Surgical Procedure", "Recovery Briefing", "Follow-up Review"],
      [
        "X-rays and a thorough exam map your case before anything begins.",
        "Effective local anesthesia ensures you remain comfortable throughout.",
        "Dr. Mariana performs the procedure with specialist precision.",
        "You leave with clear written and verbal recovery instructions.",
        "We see you again to confirm healing is on track.",
      ],
    ),
  },
  {
    slug: "aesthetic-dentistry",
    name: "Aesthetic Dentistry",
    icon: Sparkles,
    shortHome:
      "Veneers, bonding, and restorations that look completely natural — because beauty should be invisible.",
    shortServices:
      "Composite bonding, veneers, crowns, and restorations that look completely natural — because great aesthetics should be invisible.",
    overview: [
      "Aesthetic dentistry at Mek Dental Clinic is the art of making your smile look its absolute best while ensuring it functions perfectly. This discipline covers a broad range of procedures — each designed to address a specific cosmetic concern while maintaining the full health and integrity of your teeth.",
      "Our aesthetic services include composite bonding (repairing chips, closing gaps, reshaping teeth with tooth-colored resin), porcelain veneers (ultra-thin shells for complete shape and color transformation), all-ceramic crowns (full coverage restorations that protect damaged teeth while looking completely natural), and tooth-colored composite fillings that seamlessly replace old metal amalgam fillings.",
      "Dr. Mariana's approach to aesthetic dentistry is guided by the principle that the best dental work is invisible — it enhances your smile without looking artificial, dental, or done.",
    ],
    benefits: [
      "Full spectrum of cosmetic dental treatments",
      "Results that look completely natural",
      "Minimal-invasive approaches where possible",
      "Both cosmetic and restorative outcomes",
      "Personalized treatment planning",
    ],
    steps: stdSteps(
      ["Aesthetic Consultation", "Digital Treatment Preview", "Tooth Preparation", "Treatment Delivery", "Polish and Review"],
      [
        "We photograph and assess every detail of your current smile.",
        "You preview the proposed outcome digitally before any work begins.",
        "Where indicated, gentle preparation readies the teeth for treatment.",
        "Your bonding, veneer, or crown is precisely placed and shaped.",
        "Final polish, bite check, and a review of long-term care.",
      ],
    ),
  },
  {
    slug: "braces-aligners",
    name: "Braces & Aligners",
    icon: AlignCenter,
    shortHome:
      "Straighter teeth at any age — traditional braces or discreet clear aligners, tailored to your lifestyle.",
    shortServices:
      "Straighten your smile at any age — traditional braces or discreet clear aligners, with a personalised treatment plan.",
    overview: [
      "Orthodontic treatment at Mek Dental Clinic corrects misaligned, crowded, or spaced teeth to create a straighter, healthier, and more confident smile. We offer both traditional metal braces — which remain the gold standard for complex orthodontic cases — and modern clear aligner systems for patients who want a more discreet treatment option.",
      "Traditional braces use brackets and wires to gradually shift teeth into alignment over a typical treatment period of 12–24 months. Clear aligners are a series of custom-made, nearly invisible trays changed every 1–2 weeks — they can be removed for eating and cleaning, making them a popular choice for adult patients.",
      "All orthodontic treatment at Mek Dental begins with a comprehensive assessment that includes dental photographs, impressions or scans, and a detailed discussion of options, timelines, and expected outcomes — so you can make a fully informed decision.",
    ],
    benefits: [
      "Options for teenagers and adults",
      "Discreet clear aligner alternative",
      "Comprehensive orthodontic assessment included",
      "Regular review appointments every 4–6 weeks",
      "Retainer provided on treatment completion",
    ],
    steps: stdSteps(
      ["Orthodontic Assessment", "Option Discussion", "Brace or Aligner Fit", "Monthly Adjustments", "Completion & Retainer"],
      [
        "Photos, impressions, and a full bite analysis build your record.",
        "We walk you through every option — clearly, with no pressure.",
        "Your braces or first set of aligners are precisely fitted.",
        "Regular reviews keep your alignment moving on plan.",
        "Once aligned, a retainer locks in your new smile for the long term.",
      ],
    ),
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: Anchor,
    shortHome:
      "Permanent, titanium-rooted replacements for missing teeth — indistinguishable from natural in look and function.",
    shortServices:
      "Permanent, titanium-rooted replacements for missing teeth — natural in look, feel, and function.",
    overview: [
      "Dental implants are widely considered the gold standard solution for missing teeth — and for good reason. A dental implant is a small titanium screw surgically placed into the jawbone, which fuses with the bone over several months to create a permanent, stable root. Once integrated, a natural-looking ceramic crown is attached, creating a tooth that looks, feels, and functions exactly like the one you lost.",
      "Unlike dentures, implants are permanent and do not shift, click, or require adhesive. Unlike dental bridges, they do not require alteration of adjacent healthy teeth. With proper care, a dental implant can last a lifetime — making them the most cost-effective long-term solution for missing teeth.",
      "Candidacy for dental implants depends on the health of the jawbone and gums. Dr. Mariana conducts a thorough assessment — including digital X-rays and a bone density evaluation — at your consultation to determine suitability and present a full treatment plan.",
    ],
    benefits: [
      "Permanent and lifetime-lasting solution",
      "Identical to natural teeth in look and function",
      "No impact on adjacent healthy teeth",
      "Preserves jawbone and facial structure",
      "Fully fixed — no removal, no adhesives",
    ],
    steps: stdSteps(
      ["Implant Consultation", "Surgical Placement", "Osseointegration", "Crown Fitting", "Final Review"],
      [
        "Digital X-rays and a bone density check confirm your candidacy.",
        "The titanium implant is precisely placed into the jawbone.",
        "Over 3–6 months the implant fuses with the surrounding bone.",
        "A custom ceramic crown is attached to the integrated implant.",
        "We review aesthetics, bite, and ongoing care for your new tooth.",
      ],
    ),
  },
  {
    slug: "periodontics",
    name: "Periodontics",
    icon: Shield,
    shortHome:
      "Advanced gum care and disease treatment — because your smile's foundation deserves as much attention as its surface.",
    shortServices:
      "Advanced gum disease treatment and prevention — protecting the foundation that makes every other smile treatment possible.",
    overview: [
      "Periodontics is the dental specialty focused on the structures that support your teeth — your gums, the alveolar bone beneath them, and the connective tissue that holds everything in place. Healthy gums are the non-negotiable foundation of a healthy, beautiful smile — and gum disease is one of the most common preventable causes of tooth loss worldwide.",
      "At Mek Dental Clinic, we provide comprehensive periodontal care — from routine gum health assessments during check-ups, to advanced treatment for gum disease (periodontitis). Our periodontal treatments include scaling and root planing (deep cleaning below the gumline to remove bacterial deposits), antibiotic therapy, gum disease management protocols, and surgical periodontal procedures where required.",
      "Early-stage gum disease (gingivitis) is fully reversible. More advanced periodontitis requires consistent treatment and maintenance but can be effectively managed to halt progression and protect your remaining teeth. Dr. Mariana assesses gum health at every visit and will recommend a treatment pathway if any concerns are identified.",
    ],
    benefits: [
      "Early detection through comprehensive gum screening",
      "Deep cleaning removes disease-causing deposits",
      "Fully reversible at early stages",
      "Protects the foundation of all other dental work",
      "Long-term gum health maintenance plans",
    ],
    steps: stdSteps(
      ["Periodontal Assessment", "Scaling & Root Planing", "Adjunct Therapy", "Progress Review", "Maintenance Plan"],
      [
        "A full probing exam maps the health of your gums and supporting bone.",
        "Deep cleaning removes bacterial deposits above and below the gumline.",
        "Targeted antibiotic therapy is added where the case calls for it.",
        "We re-evaluate after treatment to confirm gums are healing as planned.",
        "A long-term plan keeps your gum health protected for years to come.",
      ],
    ),
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
