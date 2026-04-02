export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  result: string;
  description: string;
  color: string;
  preview: string;
  videoUrl?: string;
  challenge: string;
  solution: string;
  impact: string[];
  deliverables: string[];
};

const makePreview = (title: string, category: string, gradientA: string, gradientB: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${gradientA}" />
          <stop offset="100%" stop-color="${gradientB}" />
        </linearGradient>
        <radialGradient id="shine" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.38)" />
          <stop offset="70%" stop-color="rgba(255,255,255,0.08)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <rect width="1200" height="900" fill="url(#shine)" />
      <circle cx="980" cy="160" r="150" fill="rgba(255,255,255,0.12)" />
      <circle cx="170" cy="740" r="220" fill="rgba(255,255,255,0.09)" />
      <rect x="92" y="104" width="1016" height="692" rx="34" fill="rgba(7,18,33,0.18)" stroke="rgba(255,255,255,0.2)" />
      <rect x="132" y="156" width="440" height="22" rx="11" fill="rgba(255,255,255,0.6)" />
      <rect x="132" y="204" width="286" height="14" rx="7" fill="rgba(255,255,255,0.45)" />
      <rect x="132" y="250" width="378" height="34" rx="17" fill="rgba(255,255,255,0.2)" />
      <rect x="132" y="308" width="530" height="194" rx="28" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.16)" />
      <rect x="708" y="196" width="320" height="306" rx="28" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.16)" />
      <rect x="708" y="534" width="320" height="92" rx="24" fill="rgba(255,255,255,0.18)" />
      <text x="132" y="576" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="700">${title}</text>
      <text x="132" y="644" fill="rgba(255,255,255,0.86)" font-family="Arial, Helvetica, sans-serif" font-size="28">${category}</text>
      <text x="708" y="604" fill="rgba(255,255,255,0.94)" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">UI / UX / SEO</text>
      <text x="708" y="652" fill="rgba(255,255,255,0.78)" font-family="Arial, Helvetica, sans-serif" font-size="22">Project preview</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const projects: ProjectItem[] = [
  {
    slug: 'luxe-fashion',
    title: 'Luxe Fashion',
    category: 'E-commerce',
    result: '+40% Conversions',
    description: 'Premium fashion store with custom Shopify theme and streamlined checkout flow.',
    color: 'from-pink-500 to-rose-600',
    preview: makePreview('Luxe Fashion', 'E-commerce', '#f43f5e', '#7c3aed'),
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    challenge: 'The brand needed a luxury storefront that felt premium while converting more visitors into buyers.',
    solution: 'We designed a polished Shopify experience with trust-focused sections, clean merchandising, and a faster checkout flow.',
    impact: ['40% increase in conversions', 'Higher average order value', 'Cleaner product discovery journey'],
    deliverables: ['Shopify storefront', 'Collection filtering', 'Product page redesign', 'Checkout optimization'],
  },
  {
    slug: 'dental-care-pro',
    title: 'Dental Care Pro',
    category: 'Healthcare',
    result: '+85% Bookings',
    description: 'Modern clinic website with appointment booking and trust-building content.',
    color: 'from-blue-500 to-cyan-600',
    preview: makePreview('Dental Care Pro', 'Healthcare', '#2563eb', '#06b6d4'),
    challenge: 'The clinic had low online trust and too many drop-offs before appointment booking.',
    solution: 'We rebuilt the website around service clarity, doctor credibility, and a streamlined booking funnel.',
    impact: ['85% increase in bookings', 'Improved mobile conversions', 'Better patient trust signals'],
    deliverables: ['Service pages', 'Booking integration', 'Doctor profile section', 'Mobile-first redesign'],
  },
  {
    slug: 'elite-properties',
    title: 'Elite Properties',
    category: 'Real Estate',
    result: '+60% Leads',
    description: 'High-end real estate landing page focused on lead capture and premium visuals.',
    color: 'from-violet-500 to-indigo-600',
    preview: makePreview('Elite Properties', 'Real Estate', '#8b5cf6', '#4f46e5'),
    challenge: 'The client needed a stronger digital presence for premium listings and investor leads.',
    solution: 'We created a refined landing experience with stronger visuals, clear CTAs, and high-intent lead forms.',
    impact: ['60% more leads', 'Higher time on page', 'Improved lead quality'],
    deliverables: ['Luxury landing page', 'Lead forms', 'Property highlights', 'Investor-focused content blocks'],
  },
  {
    slug: 'quickfix-mobile',
    title: 'QuickFix Mobile',
    category: 'Service Business',
    result: '+120% Inquiries',
    description: 'Repair service website with fast quote requests and mobile-first layout.',
    color: 'from-green-500 to-emerald-600',
    preview: makePreview('QuickFix Mobile', 'Service Business', '#10b981', '#047857'),
    challenge: 'The business needed more local inquiries and a simpler quote request process.',
    solution: 'We launched a conversion-focused site with fast CTAs, WhatsApp support, and optimized local service pages.',
    impact: ['120% more inquiries', 'Faster quote requests', 'Stronger mobile engagement'],
    deliverables: ['Service landing pages', 'Instant inquiry forms', 'WhatsApp CTA flow', 'Location trust signals'],
  },
  {
    slug: 'fitzone-studio',
    title: 'FitZone Studio',
    category: 'Fitness',
    result: '+95% Memberships',
    description: 'Fitness brand site with membership funnel, timetable, and CTA-focused sections.',
    color: 'from-orange-500 to-red-600',
    preview: makePreview('FitZone Studio', 'Fitness', '#f97316', '#dc2626'),
    challenge: 'The gym wanted to turn website visitors into real membership sign-ups.',
    solution: 'We built a high-energy site with membership tiers, trainer highlights, and a cleaner conversion path.',
    impact: ['95% increase in memberships', 'Better class discovery', 'More recurring inquiries'],
    deliverables: ['Membership funnel', 'Class schedule UI', 'Trainer showcase', 'Lead capture forms'],
  },
  {
    slug: 'cloudsync-saas',
    title: 'CloudSync SaaS',
    category: 'Technology',
    result: '+150% Sign-ups',
    description: 'SaaS growth page optimized for product clarity, demos, and conversions.',
    color: 'from-blue-600 to-blue-800',
    preview: makePreview('CloudSync SaaS', 'Technology', '#2563eb', '#0f172a'),
    challenge: 'The SaaS product had features but lacked a clear story that moved users toward demo or trial.',
    solution: 'We clarified the messaging, structured the landing flow, and highlighted the product value with stronger CTAs.',
    impact: ['150% more sign-ups', 'Improved trial-to-demo journey', 'Clearer product positioning'],
    deliverables: ['SaaS landing page', 'Feature storytelling', 'Demo CTA system', 'Conversion copywriting'],
  },
  {
    slug: 'gourmet-eats',
    title: 'Gourmet Eats',
    category: 'Restaurant',
    result: '+75% Orders',
    description: 'Restaurant experience with menus, online ordering, and local SEO improvements.',
    color: 'from-amber-500 to-orange-600',
    preview: makePreview('Gourmet Eats', 'Restaurant', '#f59e0b', '#ea580c'),
    challenge: 'The restaurant needed more online orders and better visibility for local customers.',
    solution: 'We redesigned the website for menu browsing, ordering, and local discoverability.',
    impact: ['75% more online orders', 'Better local visibility', 'Stronger mobile ordering experience'],
    deliverables: ['Interactive menu', 'Online ordering flow', 'Location SEO content', 'Offer banners'],
  },
  {
    slug: 'legal-partners',
    title: 'Legal Partners',
    category: 'Professional Services',
    result: '+55% Consultations',
    description: 'Professional law firm site designed for credibility and lead generation.',
    color: 'from-slate-700 to-slate-900',
    preview: makePreview('Legal Partners', 'Professional Services', '#334155', '#020617'),
    challenge: 'The firm needed a more credible online presence to improve consultation requests.',
    solution: 'We structured the website around expertise, trust, and a simple consultation booking path.',
    impact: ['55% more consultations', 'Improved authority signals', 'More targeted service inquiries'],
    deliverables: ['Practice area pages', 'Consultation funnel', 'Attorney profiles', 'Trust-building content'],
  },
];
