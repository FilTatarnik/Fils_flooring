// ─────────────────────────────────────────────────────────────
// All editable website copy lives here.
// Change text, phone, service areas, FAQs, etc. without touching
// any component code.
// ─────────────────────────────────────────────────────────────
import IMG1 from '../assets/IMG1.jpg';
import IMG2 from '../assets/IMG2.jpg';
import IMG3 from '../assets/IMG3.jpg';
import IMG4 from '../assets/IMG4.jpg';
import IMG5 from '../assets/IMG5.jpg';
import IMG6 from '../assets/IMG6.jpg';
import IMG7 from '../assets/IMG7.jpg';
import IMG9 from '../assets/IMG9.jpg';

export const business = {
  name: "Fil's Flooring",
  legalName: "Fil's Flooring Inc.",
  phone: '(630) 433-6299',
  phoneHref: 'tel:+16304336299',
  region: 'Chicago’s Northwest Suburbs',
  // Formspree form endpoint — submissions are emailed to you.
  formEndpoint: 'https://formspree.io/f/meoydqro',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Flooring installation · ' + business.region,
  title: 'Beautiful floors, installed right the first time.',
  subtitle:
    'Hardwood, luxury vinyl, laminate, tile, carpet and stairs — measured, prepped and installed with care by a team that treats your home like our own.',
  image: IMG3,
  highlights: ['Free in-home estimates', 'Clean, on-schedule installs', 'Residential & commercial'],
};

export const services = [
  {
    icon: 'hardwood',
    title: 'Hardwood Flooring',
    text: 'Solid and engineered hardwood installed with tight seams, proper acclimation and a flawless transition into every room.',
  },
  {
    icon: 'vinyl',
    title: 'Luxury Vinyl Plank',
    text: 'Waterproof, pet-friendly LVP that looks like real wood — ideal for kitchens, basements and busy households.',
  },
  {
    icon: 'laminate',
    title: 'Laminate',
    text: 'Durable, budget-friendly floors with the look of hardwood or stone, installed quickly with minimal disruption.',
  },
  {
    icon: 'tile',
    title: 'Tile',
    text: 'Porcelain and ceramic tile for bathrooms, entries and kitchens, laid level with clean, consistent grout lines.',
  },
  {
    icon: 'carpet',
    title: 'Carpet',
    text: 'Soft, comfortable carpet for bedrooms and living spaces, stretched and seamed for a smooth, lasting finish.',
  },
  {
    icon: 'stairs',
    title: 'Stairs & Trim',
    text: 'Stair treads, risers, landings, baseboards and transitions — the finishing details that make a floor look complete.',
  },
];

export const gallery = [
  { src: IMG3, alt: 'Natural oak hardwood floor in a bright living room', label: 'Hardwood · Living Room', wide: true },
  { src: IMG5, alt: 'Oak hardwood staircase with matching treads and risers', label: 'Stairs', tall: true },
  { src: IMG4, alt: 'Hardwood floor in a family room with a brick fireplace', label: 'Hardwood · Family Room', wide: true },
  { src: IMG6, alt: 'Hardwood hallway leading to the entry', label: 'Hardwood · Hallway', tall: true },
  { src: IMG7, alt: 'Hardwood landing wrapping around a staircase railing', label: 'Hardwood · Landing' },
  { src: IMG1, alt: 'Grey luxury vinyl plank in an open hallway', label: 'Luxury Vinyl Plank' },
  { src: IMG2, alt: 'Hardwood installation in progress with a flooring nailer', label: 'Installation in Progress' },
];

export const process = [
  {
    title: 'Schedule an estimate',
    text: 'Book online or call. Tell us about your space and the look you’re after.',
  },
  {
    title: 'Measure & quote',
    text: 'We visit, measure accurately, check the subfloor and give you a clear, itemized quote.',
  },
  {
    title: 'Prep & install',
    text: 'We protect your home, prep the subfloor properly and install on the agreed schedule.',
  },
  {
    title: 'Final walkthrough',
    text: 'We clean up and walk the finished floor with you to make sure every detail is right.',
  },
];

export const about = {
  image: IMG2,
  secondaryImage: IMG7,
  title: 'Craftsmanship you can stand on.',
  paragraphs: [
    'Fil’s Flooring is a family-run flooring company serving homeowners, builders and businesses across Chicago’s northwest suburbs. We specialize in every type of installation — from hardwood and tile to carpet and luxury vinyl.',
    'Most flooring problems start before the first board goes down. That’s why we take subfloor prep, layout and transitions seriously, so your floor looks great on day one and for years after.',
  ],
  points: [
    'Careful subfloor prep',
    'Honest, itemized quotes',
    'Clean, respectful work',
    'Residential & commercial',
  ],
  // Edit or remove these if they don't match your numbers.
  stats: [
    { value: '20+', label: 'Years of experience' },
    { value: '6', label: 'Flooring specialties' },
    { value: 'Free', label: 'In-home estimates' },
  ],
};

export const serviceAreas = [
  'Streamwood',
  'Elgin',
  'South Elgin',
  'Bartlett',
  'Hanover Park',
  'Hoffman Estates',
  'Schaumburg',
  'Carol Stream',
  'St. Charles',
  'Barrington',
  'Palatine',
  'West Dundee',
];

export const faqs = [
  {
    q: 'Are estimates really free?',
    a: 'Yes. We’ll come out, measure your space, talk through options and give you a written quote at no cost and with no obligation.',
  },
  {
    q: 'How long does an installation take?',
    a: 'It depends on the size of the space and the material. Many single-room projects are finished in a day or two; whole-home projects take longer. You’ll get a timeline with your quote.',
  },
  {
    q: 'Which flooring is best for kitchens, basements or homes with pets?',
    a: 'Luxury vinyl plank and tile are the most water- and scratch-resistant options. Hardwood is timeless for living areas and bedrooms. We’re happy to recommend the right fit for each room.',
  },
  {
    q: 'Do you work on commercial projects?',
    a: 'Yes. We handle both residential and commercial installations, from single homes to larger multi-unit and business spaces.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We’re based in the Streamwood / Elgin area and serve the surrounding northwest suburbs. If your town isn’t listed, just ask — we may still be able to help.',
  },
];

export const serviceOptions = [...services.map((s) => s.title), 'Multiple / not sure yet'];
