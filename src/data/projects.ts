export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  result: string;
  description: string;
  color: string;
  preview: string;
  liveUrl?: string;
  videoUrl?: string;
  challenge: string;
  solution: string;
  impact: string[];
  deliverables: string[];
};

type ProjectSeed = Omit<ProjectItem, 'preview' | 'color'> & {
  color: string;
  gradientA: string;
  gradientB: string;
  previewImage?: string;
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

const projectPreviewImages = {
  'ai-content-generator': '/project-images/ai-content-generator.png',
  'build-my-ai-resume-79': '/project-images/AI-powered resume.png',
  'dental-clinic-website': '/project-images/clinic-webiste.png',
  'coffee-shop-website': '/project-images/coffee-shop-website.png',
  'e-commerce-store': '/project-images/e-commerce-store.png',
  'freelancer-booking-app': '/project-images/Freelancer Booking App.png',
  'furniture-website': '/project-images/furniture-shop.png',
  'grocery-shop-website': '/project-images/grocery-shop-website.png',
  'marketing-trading': '/project-images/marketing-trading.png',
  'real-estate-listings': '/project-images/real-state.png',
  'restaurant-pos-system': '/project-images/Restaurant POS System.png',
  'ride-share-pro': '/project-images/Ride-Share-Pro.png',
  'school-management-system': '/project-images/school-manegment.png',
} satisfies Partial<Record<string, string>>;

const projectSeeds = [
  {
    slug: 'ai-content-generator',
    title: 'AI Content Generator',
    category: 'Website',
    result: 'Live build',
    description: 'AI content workflow website built to help teams create and manage content faster.',
    color: 'from-teal-600 to-slate-800',
    gradientA: '#0f766e',
    gradientB: '#0b3d66',
    previewImage: projectPreviewImages['ai-content-generator'],
    liveUrl: 'https://ai-content-generator-roan.vercel.app/',
    challenge: 'The product needed a simple way to present an AI content workflow without overwhelming the user.',
    solution: 'We shaped the interface around clear prompts, quick actions, and a calm dashboard experience.',
    impact: ['Clearer content workflow', 'Better product storytelling', 'Strong foundation for AI features'],
    deliverables: ['Landing page', 'Feature sections', 'Conversion copy', 'Responsive layout'],
  },
  {
    slug: 'asset-manager',
    title: 'Asset Manager',
    category: 'Mobile App',
    result: 'Video included',
    description: 'Mobile app concept for managing files, media, and project assets in one place.',
    color: 'from-sky-500 to-blue-700',
    gradientA: '#0ea5e9',
    gradientB: '#1d4ed8',
    videoUrl: '/project-videos/Asset-Manager.mp4',
    challenge: 'The app needed a mobile-friendly way to organize assets quickly during busy project work.',
    solution: 'We designed a focused app flow with fast browse actions, cleaner grouping, and easy upload paths.',
    impact: ['Simpler asset access', 'Cleaner mobile flow', 'Fast project handoff'],
    deliverables: ['App screens', 'Asset browsing UI', 'Upload flow', 'Mobile interaction design'],
  },
  {
    slug: 'build-my-ai-resume-79',
    title: 'Build My AI Resume',
    category: 'Website',
    result: 'Live demo',
    description: 'AI resume builder site with a clean conversion path and lightweight product presentation.',
    color: 'from-violet-500 to-blue-700',
    gradientA: '#7c3aed',
    gradientB: '#2563eb',
    previewImage: projectPreviewImages['build-my-ai-resume-79'],
    liveUrl: 'https://furniture-shop-bbdh.vercel.app/',
    challenge: 'The project needed a simple, credible landing experience for an AI-powered resume tool.',
    solution: 'We focused the page on value explanation, confidence-building design, and clear next steps.',
    impact: ['Better product clarity', 'Cleaner signup path', 'More professional presentation'],
    deliverables: ['Landing page', 'Product messaging', 'CTA structure', 'Responsive sections'],
  },
  {
    slug: 'clinic-connect',
    title: 'Clinic Connect',
    category: 'Mobile App',
    result: 'Video included',
    description: 'Healthcare mobile app concept for appointments, patient communication, and clinic management.',
    color: 'from-teal-500 to-emerald-700',
    gradientA: '#14b8a6',
    gradientB: '#0f766e',
    videoUrl: '/project-videos/Clinic-Connect.mp4',
    challenge: 'The clinic experience needed to feel trustworthy while staying simple enough for mobile users.',
    solution: 'We built a structured app flow around appointments, health information, and quick access actions.',
    impact: ['Improved patient clarity', 'Better booking flow', 'Stronger mobile trust'],
    deliverables: ['Mobile app UI', 'Appointment screens', 'Patient dashboard', 'Quick action cards'],
  },
  {
    slug: 'dental-clinic-website',
    title: 'Dental Clinic Website',
    category: 'Website',
    result: 'Live site',
    description: 'Dental clinic website designed to present services, build patient trust, and make booking inquiries feel simple and premium.',
    color: 'from-cyan-500 to-blue-700',
    gradientA: '#06b6d4',
    gradientB: '#1d4ed8',
    previewImage: projectPreviewImages['dental-clinic-website'],
    liveUrl: 'https://dental-clinic-six-rust.vercel.app/',
    challenge: 'The clinic needed a calm, professional website that explained care clearly without looking too clinical or cold.',
    solution: 'We shaped the experience around soft visuals, clear service sections, and a smoother appointment-focused journey.',
    impact: ['Stronger patient trust', 'Cleaner service presentation', 'More polished booking journey'],
    deliverables: ['Homepage design', 'Service sections', 'Trust-building layout', 'Responsive website'],
  },
  {
    slug: 'coffee-shop-website',
    title: 'Coffee Shop Website',
    category: 'Website',
    result: 'Live site',
    description: 'Stylish coffee shop website designed to showcase menu items, brand personality, and ordering CTAs.',
    color: 'from-amber-700 to-orange-800',
    gradientA: '#92400e',
    gradientB: '#7c2d12',
    previewImage: projectPreviewImages['coffee-shop-website'],
    liveUrl: 'https://coffee-shop-website-smoky.vercel.app/',
    challenge: 'The brand needed a warm digital presence that felt inviting and supported local orders.',
    solution: 'We used rich visuals, clean typography, and simple action sections to create a cozy storefront feel.',
    impact: ['Stronger brand vibe', 'Clearer menu presentation', 'Better ordering focus'],
    deliverables: ['Homepage design', 'Menu layout', 'Call-to-action flow', 'Mobile responsive sections'],
  },
  {
    slug: 'e-commerce-store',
    title: 'E-Commerce Store',
    category: 'Website',
    result: 'Live store',
    description: 'Online store experience with product browsing, cart flow, and conversion-focused content.',
    color: 'from-pink-600 to-violet-700',
    gradientA: '#be185d',
    gradientB: '#7c3aed',
    previewImage: projectPreviewImages['e-commerce-store'],
    liveUrl: 'https://e-commerce-store-271z.vercel.app/',
    challenge: 'The store needed a fast browsing flow and a design that could support product discovery.',
    solution: 'We organized products, CTAs, and shopping steps so the buyer journey stayed straightforward.',
    impact: ['Cleaner shopping flow', 'Better product browsing', 'Improved purchase confidence'],
    deliverables: ['Storefront UI', 'Product cards', 'Cart journey', 'Responsive commerce layout'],
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Mobile App',
    result: 'Product ready',
    description: 'Mobile budgeting app concept for tracking spending, categories, and daily financial habits.',
    color: 'from-green-500 to-emerald-700',
    gradientA: '#16a34a',
    gradientB: '#15803d',
    challenge: 'The app needed to make finance tracking feel quick, readable, and easy to keep using.',
    solution: 'We kept the interface minimal and focused on daily actions, summaries, and category awareness.',
    impact: ['Simpler expense tracking', 'Clear financial snapshots', 'Easy daily use'],
    deliverables: ['Budget screens', 'Summary cards', 'Category views', 'Mobile dashboard'],
  },
  {
    slug: 'food-delivery-app',
    title: 'Food Delivery App',
    category: 'Mobile App',
    result: 'Concept build',
    description: 'Mobile ordering app concept for browsing restaurants, adding items, and checking out quickly.',
    color: 'from-orange-500 to-red-600',
    gradientA: '#f97316',
    gradientB: '#ea580c',
    challenge: 'The flow needed to stay fast while still making food discovery pleasant on smaller screens.',
    solution: 'We designed a snackable browsing experience with strong visuals and a reduced checkout path.',
    impact: ['Faster ordering flow', 'Better restaurant discovery', 'Stronger mobile UX'],
    deliverables: ['Restaurant listings', 'Menu browsing', 'Cart UX', 'Checkout screens'],
  },
  {
    slug: 'freelancer-booking-app',
    title: 'Freelancer Booking App',
    category: 'Mobile App',
    result: 'Video included',
    description: 'Booking app concept for scheduling freelance services, project calls, and client time slots.',
    color: 'from-indigo-600 to-blue-700',
    gradientA: '#4f46e5',
    gradientB: '#1d4ed8',
    previewImage: projectPreviewImages['freelancer-booking-app'],
    videoUrl: '/project-videos/freelancing-app.mp4',
    challenge: 'The booking flow needed to feel simple for clients while keeping scheduling details organized.',
    solution: 'We structured the app around service selection, time booking, and clear confirmation steps.',
    impact: ['Simpler booking path', 'Cleaner scheduling', 'More professional client flow'],
    deliverables: ['Booking flow', 'Service cards', 'Calendar screens', 'Confirmation states'],
  },
  {
    slug: 'furniture-website',
    title: 'Furniture Website',
    category: 'Website',
    result: 'Live site',
    description: 'Furniture brand website with product storytelling, collection sections, and premium presentation.',
    color: 'from-slate-700 to-teal-700',
    gradientA: '#0b3d66',
    gradientB: '#134e4a',
    previewImage: projectPreviewImages['furniture-website'],
    liveUrl: 'https://furniture-shop-blue.vercel.app/',
    challenge: 'The store needed a polished premium look that could sell furniture without feeling crowded.',
    solution: 'We created a calm, elegant layout with clear collections and stronger product focus.',
    impact: ['Stronger premium feel', 'Better collection browsing', 'Cleaner brand presence'],
    deliverables: ['Showcase homepage', 'Collection grid', 'Product highlights', 'Responsive design'],
  },
  {
    slug: 'grocery-shop-website',
    title: 'Grocery Shop Website',
    category: 'Website',
    result: 'Live store',
    description: 'Grocery commerce site built for product browsing, daily essentials, and quick purchasing.',
    color: 'from-green-600 to-teal-700',
    gradientA: '#16a34a',
    gradientB: '#0f766e',
    previewImage: projectPreviewImages['grocery-shop-website'],
    liveUrl: 'https://grocery-shop-website-one.vercel.app/',
    challenge: 'The site needed to support quick shopping decisions while staying clean and approachable.',
    solution: 'We emphasized category browsing, trust, and fast action areas to support repeat purchases.',
    impact: ['Faster grocery browsing', 'Clear category structure', 'Better purchase path'],
    deliverables: ['Store layout', 'Category navigation', 'Promo sections', 'Mobile checkout flow'],
  },
  {
    slug: 'marketing-trading',
    title: 'Marketing Trading',
    category: 'Website',
    result: 'Video included',
    description: 'Trading and marketing website concept focused on credibility, service clarity, and lead generation.',
    color: 'from-emerald-600 to-cyan-700',
    gradientA: '#059669',
    gradientB: '#0e7490',
    previewImage: projectPreviewImages['marketing-trading'],
    videoUrl: '/project-videos/marketing-trading.mp4',
    challenge: 'The project needed to explain trading and marketing services in a way that felt trustworthy and easy to scan.',
    solution: 'We structured the page around strong hero messaging, clearer service sections, and a more direct inquiry path.',
    impact: ['Stronger service presentation', 'Better first impression', 'Clearer conversion journey'],
    deliverables: ['Landing page design', 'Service sections', 'Lead generation flow', 'Responsive layout'],
  },
  {
    slug: 'market-navigator',
    title: 'Market Navigator',
    category: 'Mobile App',
    result: 'Concept build',
    description: 'Mobile app concept for market insights, discovery, and quick investment-style navigation.',
    color: 'from-slate-800 to-slate-600',
    gradientA: '#0f172a',
    gradientB: '#334155',
    challenge: 'The interface needed to present market information in a way that felt readable on mobile.',
    solution: 'We simplified the data presentation and focused on fast access to the most useful signals.',
    impact: ['Cleaner data display', 'Better mobile readability', 'Focused decision-making flow'],
    deliverables: ['Dashboard UI', 'Insight cards', 'Market filters', 'Responsive app screens'],
  },
  {
    slug: 'real-estate-listings',
    title: 'Real Estate Listings',
    category: 'Website',
    result: 'Live site',
    description: 'Real estate website designed to showcase listings, property details, and lead generation.',
    color: 'from-violet-600 to-indigo-700',
    gradientA: '#8b5cf6',
    gradientB: '#4338ca',
    previewImage: projectPreviewImages['real-estate-listings'],
    liveUrl: 'https://real-estate-listings-amber.vercel.app/',
    challenge: 'The site needed to present listings clearly while keeping lead generation easy to find.',
    solution: 'We built a premium listing flow with filters, strong property cards, and simple inquiry paths.',
    impact: ['Better listing visibility', 'Stronger lead capture', 'More polished presentation'],
    deliverables: ['Listings grid', 'Property detail pages', 'Lead forms', 'Responsive brochure layout'],
  },
  {
    slug: 'restaurant-pos-system',
    title: 'Restaurant POS System',
    category: 'Website',
    result: 'Live demo',
    description: 'Restaurant POS interface for order management, login, and day-to-day operational control.',
    color: 'from-slate-700 to-slate-900',
    gradientA: '#334155',
    gradientB: '#0f172a',
    previewImage: projectPreviewImages['restaurant-pos-system'],
    liveUrl: 'https://real-estate-listings-mzqp.vercel.app/login',
    challenge: 'The POS needed a direct interface that worked well for staff in a fast-moving environment.',
    solution: 'We kept the layout operational and focused on the screens staff would use most often.',
    impact: ['Faster order handling', 'Cleaner admin workflow', 'Better staff usability'],
    deliverables: ['Login screen', 'POS dashboard', 'Order flow', 'Operational UI'],
  },
  {
    slug: 'ride-share-pro',
    title: 'Ride-Share Pro',
    category: 'Mobile App',
    result: 'Video included',
    description: 'Ride-sharing mobile app concept with booking, trip tracking, and ride management flows.',
    color: 'from-pink-500 to-rose-600',
    gradientA: '#ec4899',
    gradientB: '#db2777',
    previewImage: projectPreviewImages['ride-share-pro'],
    videoUrl: '/project-videos/Ride-pro.mp4',
    challenge: 'The product needed an easy booking experience that still felt polished and reliable on mobile.',
    solution: 'We organized the app around location input, driver matching, and trip progress visibility.',
    impact: ['Simpler ride booking', 'Better trip tracking', 'More polished mobile journey'],
    deliverables: ['Booking flow', 'Trip screens', 'Driver status UI', 'Mobile navigation'],
  },
  {
    slug: 'school-management-system',
    title: 'School Management System',
    category: 'Website',
    result: 'Live platform',
    description: 'Comprehensive school management platform with multi-role access for administrators, teachers, and parents. Features include student records, attendance tracking, exam schedules, fee management, and real-time announcements.',
    color: 'from-blue-600 to-teal-700',
    gradientA: '#2563eb',
    gradientB: '#0f766e',
    previewImage: projectPreviewImages['school-management-system'],
    liveUrl: 'https://school-management-system-t7vp.vercel.app/',
    challenge: 'The system needed to handle multiple user roles (admin, teacher, parent) with different permissions while keeping the interface intuitive for non-technical users.',
    solution: 'We built a role-based dashboard system with streamlined navigation, modular components for each user type, and a clean design that simplifies complex school operations.',
    impact: ['Multi-role dashboard system', 'Streamlined admin workflows', 'Parent-teacher communication portal', 'Real-time notifications and announcements'],
    deliverables: ['Login system', 'Admin dashboard', 'Teacher portal', 'Parent portal', 'Student records module', 'Announcements system'],
  },
] satisfies ProjectSeed[];

export const projects: ProjectItem[] = projectSeeds.map(({ gradientA, gradientB, previewImage, ...project }) => ({
  ...project,
  preview: previewImage ?? makePreview(project.title, project.category, gradientA, gradientB),
}));
