export const PROGRAM_REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdhSsUVwvbcQKwjddjxcnKxi6U8y4N-TrCgp7zNC0F27ksRKg/viewform?usp=publish-editor';

export type ProgramModule = {
  title: string;
  detail: string;
  highlights: string[];
};

export type ProgramItem = {
  slug: string;
  title: string;
  duration: string;
  schedule: string;
  instructor: string;
  audience: string;
  summary: string;
  highlights: string[];
  modules: ProgramModule[];
  imageUrl: string;
  cardImage: string;
};

export const programs: ProgramItem[] = [
  {
    slug: 'next-gen-developer-program',
    title: 'Next-Gen Developer Program',
    duration: '5 months',
    schedule: '3 classes / week, 1.5 hours each',
    instructor: 'Hunain Haider',
    audience:
      'Absolute beginners, computer science students, and traditional programmers transitioning into high-speed enterprise software development.',
    summary:
      'A full-stack enterprise AI track that moves from frontend fundamentals to MERN, Python automation, .NET Core, and a capstone deployment sprint.',
    highlights: ['HTML5, CSS3, Tailwind CSS, and JavaScript', 'React, Node.js, Express.js, and MongoDB Atlas', 'Python automation and API integrations', 'C# and ASP.NET Core clean architecture', 'Live deployment capstone hackathon'],
    modules: [
      {
        title: 'Month 1',
        detail:
          'Frontend frameworks and AI vibe coding with HTML5, CSS3, Tailwind CSS, JavaScript fundamentals, Lovable.dev, and Replit Agent.',
        highlights: ['Frontend foundations', 'Rapid prototyping', 'AI-assisted workflow'],
      },
      {
        title: 'Month 2',
        detail:
          'Full-stack MERN stack with AI pair programming using React.js, Node.js, Express.js, MongoDB Atlas, Cursor AI, and GitHub Copilot.',
        highlights: ['MERN stack', 'AI pair programming', 'API-driven builds'],
      },
      {
        title: 'Month 3',
        detail:
          'Python core and smart automation scripting covering syntax, object-oriented programming, and API integrations for OpenAI and Gemini.',
        highlights: ['Python fundamentals', 'Automation scripting', 'AI integrations'],
      },
      {
        title: 'Month 4',
        detail:
          'Enterprise .NET Core and clean architecture with C# fundamentals, ASP.NET Core Web API, and multi-tenancy SaaS frameworks.',
        highlights: ['C# fundamentals', '.NET Core', 'SaaS architecture'],
      },
      {
        title: 'Month 5',
        detail:
          'Cross-stack integration and a 48-hour capstone hackathon with live deployments on Vercel, Netlify, and Supabase.',
        highlights: ['Cross-stack integration', 'Capstone sprint', 'Live deployment'],
      },
    ],
    imageUrl: '/program-images/program 1.png',
    cardImage: '/program-images/program 1.png',
  },
  {
    slug: 'digital-marketing-high-level-performance-ads',
    title: 'Digital Marketing and High-Level Performance Ads',
    duration: '4 months',
    schedule: '3 classes / week, 1.5 hours each',
    instructor: 'Taqi & Ali Ashhad',
    audience:
      'Traditional marketers, brand owners, agency founders, and individuals aiming to control premium local or international ad spends.',
    summary:
      'An advanced marketing track focused on Meta, TikTok, Google, budget optimization, and performance systems that support serious media buying.',
    highlights: ['Meta Ads and Business Manager setup', 'TikTok Spark Ads and creative testing', 'Google Search, Shopping, and Performance Max', 'CBO / ABO budget optimization', 'Conversion API and pixel setup'],
    modules: [
      {
        title: 'Month 1',
        detail:
          'Meta Ads mastery with Facebook and Instagram business architectures, business manager setup, and custom/lookalike audiences.',
        highlights: ['Meta Ads', 'Business Manager', 'Audience building'],
      },
      {
        title: 'Month 2',
        detail:
          'TikTok commercial campaigns, Spark Ads, Spark Video Frameworks, and creative matrix testing.',
        highlights: ['TikTok ads', 'Spark Ads', 'Creative testing'],
      },
      {
        title: 'Month 3',
        detail:
          'Google Search, Shopping Ads, Performance Max, YouTube ad systems, and ROAS scaling strategies.',
        highlights: ['Google Ads', 'ROAS growth', 'YouTube ad systems'],
      },
      {
        title: 'Month 4',
        detail:
          'Advanced budget optimization with CBO / ABO, multi-channel creative testing, Conversion API / Pixel setup, and client ad account handling.',
        highlights: ['Budget optimization', 'Conversion tracking', 'Account handling'],
      },
    ],
    imageUrl: '/program-images/program 2.png',
    cardImage: '/program-images/program 2.png',
  },
  {
    slug: 'shopify-and-ecommerce-growth-program',
    title: 'Shopify and E-Commerce Growth Program',
    duration: '2 months',
    schedule: '3 classes / week, 1.5 hours each',
    instructor: 'Taqi & Ali Ashhad',
    audience:
      'Aspiring entrepreneurs, local dropshippers, and retail manufacturers targeting Pakistan COD or international fulfillment markets.',
    summary:
      'A rapid-deployment Shopify and e-commerce track built around store architecture, product sourcing, funnel thinking, and scale-ready operations.',
    highlights: ['Shopify architecture and custom themes', 'Winning product sourcing', 'Pakistan COD setup', 'E-commerce funnels and AI copywriting', 'Courier and refund automation'],
    modules: [
      {
        title: 'Month 1',
        detail:
          'Shopify architecture, custom theme layouts, premium settings, winning product sourcing, and Pakistan COD setup.',
        highlights: ['Shopify setup', 'Theme layouts', 'Product sourcing'],
      },
      {
        title: 'Month 2',
        detail:
          'E-commerce marketing funnels, AI copywriting, courier integrations, return / refund automations, and scale architectures.',
        highlights: ['Funnels', 'AI copywriting', 'Ops automation'],
      },
    ],
    imageUrl: '/program-images/program 3.png',
    cardImage: '/program-images/program 3.png',
  },
  {
    slug: 'ai-foundations-and-premium-freelancing',
    title: 'AI Foundations and Premium Freelancing',
    duration: '3 months',
    schedule: '3 classes / week, 1.5 hours each',
    instructor: 'Ali Ashhad',
    audience:
      'Freelancers struggling with low-ticket orders, remote sales professionals, and consultants trying to secure dollar-denominated contracts.',
    summary:
      'A practical AI and freelancing track focused on prompt systems, automation pipelines, positioning, and high-ticket client acquisition.',
    highlights: ['Prompt engineering and custom GPTs', 'Make.com and Zapier pipelines', 'Upwork and Fiverr profile optimization', 'AI-driven proposal writing', 'Cold outreach and discovery closing'],
    modules: [
      {
        title: 'Month 1',
        detail:
          'Advanced prompt engineering, custom GPTs, Claude Enterprise workflows, and automated Make.com / Zapier pipelines.',
        highlights: ['Prompt engineering', 'Custom GPTs', 'Automation pipelines'],
      },
      {
        title: 'Month 2',
        detail:
          'Upwork and Fiverr profile optimization, AI-driven proposal writing, and LinkedIn inbound positioning.',
        highlights: ['Freelance profiles', 'Proposal writing', 'LinkedIn positioning'],
      },
      {
        title: 'Month 3',
        detail:
          'B2B cold outreach with Apollo.io and Sales Navigator, cold email infrastructure setup, and high-ticket discovery closing frameworks.',
        highlights: ['B2B outreach', 'Cold email', 'Discovery closing'],
      },
    ],
    imageUrl: '/program-images/program 4.png',
    cardImage: '/program-images/program 4.png',
  },
  {
    slug: 'creative-media-program',
    title: 'Creative Media Program',
    duration: '2 months',
    schedule: '3 classes / week',
    instructor: 'Outsourced Elite Framework',
    audience:
      'Aspiring content creators, video editors, and design assets professionals focused on high-CTR thumbnails and short-form reels.',
    summary:
      'A creative track built around graphic design and video editing for content, brand assets, and short-form media production.',
    highlights: ['Graphic design for brand assets', 'Short-form reel editing', 'Thumbnail systems', 'Creative workflow and delivery'],
    modules: [
      {
        title: 'Track focus 1',
        detail:
          'Graphic design systems for thumbnails, campaign visuals, brand assets, and content presentation.',
        highlights: ['Brand visuals', 'Thumbnails', 'Campaign creatives'],
      },
      {
        title: 'Track focus 2',
        detail:
          'Video editing for short-form reels, creator content, and high-impact social delivery.',
        highlights: ['Short-form video', 'Reels editing', 'Social content'],
      },
    ],
    imageUrl: '/program-images/program 5.png',
    cardImage: '/program-images/program 5.png',
  },
  {
    slug: 'amazon-private-label-and-agency-systems',
    title: 'Amazon Private Label and Agency Systems',
    duration: '3 months',
    schedule: '3 classes / week',
    instructor: 'Outsourced Elite Framework',
    audience:
      'Virtual assistants, investors, and wholesale operators entering international FBA marketplaces via data-backed analysis.',
    summary:
      'A marketplace-focused track centered on Amazon private label setup, operational systems, and agency-style execution.',
    highlights: ['Private label planning', 'Amazon marketplace operations', 'Data-backed analysis', 'Agency systems and workflows'],
    modules: [
      {
        title: 'Track focus 1',
        detail:
          'Amazon private label foundations, product research, and marketplace setup workflows.',
        highlights: ['Product research', 'Listing setup', 'Marketplace entry'],
      },
      {
        title: 'Track focus 2',
        detail:
          'Operational systems for sourcing, fulfillment, and routine execution across Amazon-style marketplace work.',
        highlights: ['Sourcing', 'Fulfillment', 'Daily operations'],
      },
      {
        title: 'Track focus 3',
        detail:
          'Agency systems that support outsourcing, delegation, reporting, and repeatable delivery.',
        highlights: ['Delegation', 'Reporting', 'Repeatable systems'],
      },
    ],
    imageUrl: '/program-images/program 6.png',
    cardImage: '/program-images/program 6.png',
  },
];

export const getProgramBySlug = (slug: string) => programs.find((program) => program.slug === slug) ?? null;

export const getProgramPathBySlug = (slug: string) => `/gaebel-talent-hub/${slug}`;