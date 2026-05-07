import type { ComponentType } from 'react';
import {
  BarChart3,
  Bot,
  Clapperboard,
  Code2,
  Image,
  Globe,
  Layers3,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Workflow,
} from 'lucide-react';

export type ServiceItem = {
  slug: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  points: string[];
  outcomes: string;
  overview: string;
  deliverables: string[];
  process: string[];
  industries: string[];
};

export const services: ServiceItem[] = [
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Mobile and business apps designed around usability, speed, and long-term scale.',
    points: ['Android and iOS-ready builds', 'Admin panel and CMS support', 'API, payment, and CRM integrations'],
    outcomes: 'Best for startups, internal systems, booking flows, and service-based businesses.',
    overview:
      'We design and build custom applications that support real business processes, customer journeys, and internal operations. Each application is structured for performance, maintainability, and long-term growth.',
    deliverables: ['User flow planning', 'Mobile-responsive interface design', 'Dashboard and admin modules', 'API and third-party integrations', 'Testing and deployment support'],
    process: ['Discovery and feature mapping', 'UX flow and interface design', 'Frontend and backend development', 'Quality assurance and launch readiness'],
    industries: ['Startups', 'Healthcare', 'Education', 'Service businesses'],
  },
  {
    slug: 'web-development-services',
    icon: Globe,
    title: 'Web Development Services',
    description: 'Corporate websites, product sites, and landing pages that help brands look credible and convert better.',
    points: ['Responsive layouts', 'Search Engine Optimization (SEO)-ready architecture', 'Performance optimization'],
    outcomes: 'Ideal for company profiles, campaigns, service businesses, and local authority building.',
    overview:
      'Our website development service focuses on credibility, conversion, and speed. We create polished, responsive websites that communicate your value clearly and guide visitors toward action.',
    deliverables: ['Corporate website design', 'Landing page systems', 'CMS-ready structure', 'Performance and accessibility review', 'Launch and analytics setup'],
    process: ['Brand and content mapping', 'Wireframe and design approval', 'Responsive development', 'Testing, SEO setup, and deployment'],
    industries: ['Corporate brands', 'Professional services', 'Real estate', 'Local businesses'],
  },
  {
    slug: 'shopify-development-services',
    icon: ShoppingBag,
    title: 'Shopify Development Services',
    description: 'Custom Shopify stores built to look premium, improve trust, and increase e-commerce sales.',
    points: ['Custom storefront design', 'Product and collection setup', 'Conversion-focused checkout improvements'],
    outcomes: 'Perfect for product brands that want a polished online store and stronger conversion performance.',
    overview:
      'We create Shopify stores that combine premium design with practical commerce strategy. From collection structure to product storytelling and checkout flow, every part is shaped to improve conversions.',
    deliverables: ['Shopify theme customization', 'Collection and product page design', 'Store setup and migration', 'Checkout and conversion improvements', 'Apps and payment integrations'],
    process: ['Store planning and product architecture', 'Design direction and trust-building layout', 'Theme development and integrations', 'Testing and launch support'],
    industries: ['Fashion', 'Beauty', 'Retail', 'Consumer products'],
  },
  {
    slug: 'graphic-design-services',
    icon: Image,
    title: 'Graphic Design Services',
    description: 'Brand visuals, marketing creatives, and polished design assets created to strengthen recognition and presentation.',
    points: ['Social media creatives', 'Brand support visuals', 'Marketing and promotional design', 'Presentation and promotional assets'],
    outcomes: 'Ideal for brands that need stronger visual identity, cleaner campaign creatives, and more professional communication.',
    overview:
      'Our Graphic Designing service helps businesses present themselves more professionally across digital and marketing touchpoints. We create visuals that support campaigns, branding, promotion, and content presentation.',
    deliverables: ['Social media post design', 'Ad and campaign creatives', 'Brand support graphics', 'Presentation and promotional visuals', 'Creative design packages for marketing use'],
    process: ['Creative direction and reference gathering', 'Visual concept development', 'Design refinement', 'Final asset preparation and delivery'],
    industries: ['E-commerce', 'Agencies', 'Corporate brands', 'Service businesses'],
  },
  {
    slug: 'video-editing-services',
    icon: Clapperboard,
    title: 'Video Editing Services',
    description: 'Professional video editing for reels, ads, social content, and branded videos that capture attention and drive engagement.',
    points: ['Short-form content editing', 'Ad and promotional videos', 'Reels and TikTok editing', 'Color grading and sound design'],
    outcomes: 'Perfect for creators, brands, and businesses that want polished video content that performs better on social media and advertising channels.',
    overview:
      'Our Video Editing service transforms raw footage into compelling, polished content ready for social media, advertising, and brand storytelling. We focus on pacing, visual impact, and platform-specific formatting to help your videos perform better and hold viewer attention longer.',
    deliverables: ['Edited short-form videos for Reels/TikTok', 'Ad and promotional video cuts', 'Color correction and grading', 'Sound design and audio mixing', 'Motion graphics and text overlays', 'Platform-optimized exports'],
    process: ['Footage review and creative direction', 'Rough cut and pacing edit', 'Refined edit with graphics and effects', 'Color grading and sound design', 'Final review and delivery'],
    industries: ['Content creators', 'E-commerce brands', 'Marketing agencies', 'Service businesses', 'Influencers'],
  },
  {
    slug: 'digital-marketing-services',
    icon: BarChart3,
    title: 'Digital Marketing Services',
    description: 'Campaign strategy and digital growth support designed to generate traffic, leads, and measurable results.',
    points: ['Campaign planning', 'Lead generation strategy', 'Performance reporting and optimization'],
    outcomes: 'Best for businesses that need stronger visibility, more inquiries, and clearer digital growth planning.',
    overview:
      'Our digital marketing service helps businesses build a stronger presence across campaigns, messaging, and performance channels. We focus on clarity, conversion goals, and better lead quality.',
    deliverables: ['Campaign strategy', 'Audience targeting guidance', 'Lead funnel planning', 'Performance analysis', 'Creative direction for digital promotion'],
    process: ['Goal setting and audience analysis', 'Channel and campaign planning', 'Creative and launch coordination', 'Reporting and optimization'],
    industries: ['Agencies', 'Service businesses', 'SaaS brands', 'E-commerce'],
  },
  {
    slug: 'data-solutions',
    icon: BarChart3,
    title: 'Data Solutions',
    description: 'Data annotation, labelling, analysis, and interpretation support for AI and business workflows.',
    points: ['Data annotation and label preparation', 'Data analysis and interpretation', 'Structured datasets for AI training'],
    outcomes: 'Best for teams that need cleaner datasets, better insights, and organised data work for AI or operations.',
    overview:
      'Our Data Solutions service helps businesses turn raw data into something useful, whether that means preparing training data for AI, labelling content for machine learning, or analysing information so decision-making becomes clearer. The focus is on accuracy, structure, and practical interpretation.',
    deliverables: ['Data annotation guidelines', 'Labelling workflows', 'Dataset cleaning support', 'Analysis summaries', 'Insight interpretation reports'],
    process: ['Data review and task scoping', 'Annotation and labelling setup', 'Analysis and quality checks', 'Interpretation and reporting'],
    industries: ['AI teams', 'Startups', 'Research projects', 'Operations teams'],
  },
  {
    slug: 'seo-services-for-new-websites',
    icon: SearchCheck,
    title: 'SEO Services for New Websites',
    description: 'Search Engine Optimization (SEO) services that improve visibility, rankings, and organic search performance.',
    points: ['On-page SEO structure', 'Technical optimization', 'Keyword and content alignment'],
    outcomes: 'Ideal for businesses that want stronger Google visibility and long-term organic traffic growth.',
    overview:
      'Search Engine Optimization (SEO) is more than keywords. We improve page structure, speed, content alignment, metadata, and technical signals so your website can perform better in organic search.',
    deliverables: ['SEO audit', 'Metadata and heading optimization', 'Technical SEO recommendations', 'Page content guidance', 'Performance and indexing improvements'],
    process: ['SEO review and benchmark analysis', 'Technical and on-page optimization', 'Content and keyword alignment', 'Monitoring and improvement tracking'],
    industries: ['Local businesses', 'Corporate sites', 'Blogs', 'Lead generation websites'],
  },
  {
    slug: 'saas-development-services',
    icon: Workflow,
    title: 'SaaS Development Services',
    description: 'Product-facing pages and SaaS platforms built for clearer onboarding, stronger positioning, and better sign-up flow.',
    points: ['SaaS landing pages', 'Dashboard interface systems', 'Trial and demo conversion journeys'],
    outcomes: 'Great for software products that need sharper messaging, cleaner interfaces, and scalable delivery.',
    overview:
      'We help SaaS businesses clarify product value and improve how users move from first visit to sign-up, demo, or onboarding. The focus is on product structure, trust, and conversion flow.',
    deliverables: ['SaaS website design', 'Product dashboard UI', 'Feature and pricing page structure', 'Onboarding flow planning', 'Conversion copy alignment'],
    process: ['Product positioning review', 'Feature hierarchy and user flow mapping', 'UI system and development', 'Testing and post-launch refinement'],
    industries: ['Software startups', 'B2B products', 'Internal platforms', 'Subscription businesses'],
  },
  {
    slug: 'wordpress-development-services',
    icon: Code2,
    title: 'WordPress Development Services',
    description: 'Flexible WordPress websites built for easy content management, performance, and professional presentation.',
    points: ['Custom theme development', 'Plugin and CMS configuration', 'Content-friendly page structure'],
    outcomes: 'Best for businesses that need an editable website with strong design and dependable performance.',
    overview:
      'We build WordPress websites that are easy to manage while still looking premium and performing well. The result is a site your team can update confidently without losing design quality.',
    deliverables: ['Custom WordPress website', 'Theme setup and customization', 'Plugin configuration', 'Content editing workflows', 'Optimization and security hardening'],
    process: ['Content and page planning', 'Design and theme structure', 'WordPress development and setup', 'Testing, training, and launch support'],
    industries: ['Corporate businesses', 'Schools', 'Publishers', 'Professional services'],
  },
  {
    slug: 'ai-development-services',
    icon: Bot,
    title: 'AI Development Services',
    description: 'AI systems that connect tools, remove manual work, and keep leads or operations moving without friction.',
    points: ['Lead capture pipelines', 'WhatsApp and email workflows', 'Business process automations'],
    outcomes: 'Great for inquiry handling, follow-ups, internal operations, and repetitive task reduction.',
    overview:
      'We create automation systems that connect your tools and reduce repetitive manual tasks. This helps your team move faster, respond sooner, and operate with less friction.',
    deliverables: ['Workflow design', 'CRM and tool integrations', 'Notification and follow-up automation', 'Internal operations automation', 'Testing and refinement'],
    process: ['Workflow discovery', 'Automation planning', 'Integration and setup', 'Validation and optimization'],
    industries: ['Agencies', 'Sales teams', 'Service companies', 'Operations-heavy businesses'],
  },
  {
    slug: 'ui-ux-design-services',
    icon: Layers3,
    title: 'UI/UX Design Services',
    description: 'Visual systems and interaction design that make products feel modern, structured, and easy to trust.',
    points: ['Wireframes and prototypes', 'Design systems', 'Conversion-focused page flow'],
    outcomes: 'Perfect when your product needs stronger clarity, better polish, or a more premium identity.',
    overview:
      'Our UI/UX design service focuses on how users understand, trust, and move through your website or product. We create systems that look polished and support better usability.',
    deliverables: ['Wireframes', 'High-fidelity screen design', 'Component systems', 'Prototype interactions', 'Responsive design logic'],
    process: ['User flow planning', 'Wireframe structure', 'Visual design and feedback', 'Design system handoff'],
    industries: ['Startups', 'SaaS', 'Corporate websites', 'Custom platforms'],
  },
  {
    slug: 'custom-web-app-development-services',
    icon: Workflow,
    title: 'Custom Web App Development Services',
    description: 'Bespoke portals, dashboards, and operation systems built around your exact workflow instead of generic templates.',
    points: ['Role-based access', 'Custom modules', 'Data dashboards and reporting'],
    outcomes: 'Useful for schools, agencies, logistics, healthcare, and internal business management.',
    overview:
      'We build custom web applications for organizations that need more than a standard website. These platforms are designed around your workflow, reporting needs, and team responsibilities.',
    deliverables: ['Custom dashboard modules', 'Role-based access systems', 'Reports and analytics views', 'Workflow-specific operations tools', 'Deployment and support'],
    process: ['Requirement and user-role analysis', 'System planning and architecture', 'Agile development and testing', 'Deployment and iterative improvement'],
    industries: ['Education', 'Healthcare', 'Agencies', 'Operations teams'],
  },
  {
    slug: 'ecommerce-business-startup',
    icon: Store,
    title: 'E-Commerce Business Startup',
    description: 'End-to-end e-commerce launch support from store setup and product sourcing to branding, marketing, and first sales.',
    points: ['Store setup and platform selection', 'Product listing and catalog management', 'Payment gateway and logistics integration', 'Branding and launch marketing'],
    outcomes: 'Perfect for entrepreneurs and brands ready to launch and grow an online store with professional guidance.',
    overview:
      'Our E-Commerce Business Startup service helps entrepreneurs turn product ideas into live, selling online stores. We guide you through platform selection, store configuration, product presentation, payment setup, and initial marketing so you can start generating revenue faster with fewer mistakes.',
    deliverables: ['E-commerce platform setup', 'Product catalog and listing creation', 'Payment gateway configuration', 'Shipping and logistics integration', 'Brand identity for the store', 'Launch marketing plan', 'Basic SEO and analytics setup'],
    process: ['Business model and product strategy', 'Platform selection and store setup', 'Product listing and catalog build', 'Payment, shipping, and policy configuration', 'Brand design and launch marketing', 'Testing, soft launch, and optimization'],
    industries: ['New entrepreneurs', 'Product brands', 'Dropshipping startups', 'Local businesses going online'],
  },
  {
    slug: 'website-maintenance-support',
    icon: ShieldCheck,
    title: 'Website Maintenance and Support',
    description: 'Post-launch care for fixes, updates, content changes, optimization, and new feature iterations.',
    points: ['Bug fixing support', 'Monitoring and improvements', 'Ongoing enhancement roadmap'],
    outcomes: 'Helps keep your system healthy, current, and growing after launch.',
    overview:
      'Our maintenance and support service helps businesses protect the quality of what has already been built. We handle fixes, updates, content adjustments, and practical improvements over time.',
    deliverables: ['Ongoing support cycles', 'Performance checks', 'Content and design updates', 'Bug fixes and enhancements', 'Technical guidance and maintenance planning'],
    process: ['Issue review and priority planning', 'Update and improvement execution', 'Testing and quality checks', 'Ongoing reporting and recommendations'],
    industries: ['Any business with an active website or platform', 'Growing product teams', 'Service businesses', 'Corporate operations'],
  },
];
