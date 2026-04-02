export type ServicePageRoute =
  | '/mobile-app-development'
  | '/web-development-services'
  | '/ai-development-services'
  | '/custom-software-development';

export type ServicePageContent = {
  route: ServicePageRoute;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  subheading: string;
  introParagraphs: string[];
  processSteps: Array<{ title: string; detail: string }>;
  features: Array<{ title: string; detail: string }>;
  benefits: Array<{ title: string; detail: string }>;
  technologies: Array<{ group: string; items: string[] }>;
  whyChooseUsParagraphs: string[];
  whyChooseUsPoints: string[];
  ctaTitle: string;
  ctaParagraphs: string[];
  relatedLinks: Array<{ label: string; path: string }>;
};

export const servicePathBySlug: Record<string, ServicePageRoute> = {
  'application-development': '/mobile-app-development',
  'website-development': '/web-development-services',
  'automation-solutions': '/ai-development-services',
  'custom-web-apps': '/custom-software-development',
};

export const serviceSlugByRoute: Record<ServicePageRoute, string> = {
  '/mobile-app-development': 'application-development',
  '/web-development-services': 'website-development',
  '/ai-development-services': 'automation-solutions',
  '/custom-software-development': 'custom-web-apps',
};

export const servicePageContentByRoute: Record<ServicePageRoute, ServicePageContent> = {
  '/mobile-app-development': {
    route: '/mobile-app-development',
    serviceSlug: 'application-development',
    metaTitle: 'Mobile App Development Services | WEBGAEBEL',
    metaDescription:
      'Build iOS and Android apps with clean UX, reliable integrations, and launch-ready planning through WEBGAEBEL mobile app development services.',
    h1: 'Mobile App Development Services',
    primaryKeyword: 'mobile app development services',
    secondaryKeywords: [
      'iOS app development',
      'Android app development',
      'cross-platform apps',
      'React Native apps',
      'Flutter apps',
      'app MVP development',
      'mobile UI/UX',
      'app integrations',
    ],
    subheading:
      'Launch iOS and Android apps with product-led planning, mobile-first design, and a build process that keeps the user journey simple.',
    introParagraphs: [
      'Mobile app development is about turning a business idea into a product people can actually use on the phone they carry every day. A strong app is not just a set of screens. It is a clear path from first tap to completed task, with the right balance of usability, speed, and reliability. That is why the planning stage matters so much. The feature list, the information architecture, and the interface decisions all need to work together before the first line of code is written.',
      'For WEBGAEBEL, the goal is to build mobile app development services that feel structured, practical, and ready for real users. We focus on the business problem first, then shape the product around the experience people need on mobile. That may mean a customer portal, a booking flow, an internal operations app, or a product MVP. The finish line is not simply a working app. It is an app that feels easy to understand, easy to trust, and easy to continue improving after launch.',
    ],
    processSteps: [
      {
        title: '1. Discovery and product scope',
        detail:
          'We start by defining the app goal, user roles, core tasks, and the minimum feature set required for a sensible first release. This avoids bloated scope and keeps the build centered on value.',
      },
      {
        title: '2. User flow and screen planning',
        detail:
          'We map the screens, navigation, and key actions so the app feels natural on a small display. Each tap should move the user forward with as little friction as possible.',
      },
      {
        title: '3. Interface design and interaction logic',
        detail:
          'The interface is designed for clarity, touch comfort, and consistent behavior. Buttons, forms, lists, and dashboards are arranged so the app remains readable across devices and orientations.',
      },
      {
        title: '4. Development and integrations',
        detail:
          'We build the frontend and backend layers, connect APIs, and handle things like authentication, notifications, payments, and admin workflows in a controlled way.',
      },
      {
        title: '5. Testing, store preparation, and launch',
        detail:
          'Before release, we test on real devices, review performance, and prepare the app for publication. That includes the final checks that help the launch feel organized instead of rushed.',
      },
    ],
    features: [
      {
        title: 'iOS and Android-ready builds',
        detail:
          'The app can be designed for iPhone and Android users with a mobile-first interface that keeps navigation easy and content focused.',
      },
      {
        title: 'Cross-platform delivery',
        detail:
          'When it makes sense, we use cross-platform patterns to reduce duplication and keep the codebase manageable without sacrificing user experience.',
      },
      {
        title: 'Admin and workflow support',
        detail:
          'If the app needs dashboards, admin panels, approvals, or content management, those structures are built into the product from the start.',
      },
      {
        title: 'API and payment integrations',
        detail:
          'The app can connect to back-office systems, payments, bookings, CRM tools, and notifications so the mobile experience fits the business workflow.',
      },
      {
        title: 'Store launch readiness',
        detail:
          'We prepare the app for store submission, versioning, and future maintenance so the product has a cleaner release path.',
      },
    ],
    benefits: [
      {
        title: 'Faster access for users',
        detail:
          'A mobile app gives customers or staff a faster way to complete tasks than a browser-based flow that was never designed for repeated use.',
      },
      {
        title: 'Better engagement',
        detail:
          'Apps create direct access, repeat usage, and more consistent engagement because the product lives on the device people use constantly.',
      },
      {
        title: 'Cleaner task handling',
        detail:
          'Mobile interfaces are ideal for bookings, approvals, messages, alerts, and simple data capture because the experience can be tuned for speed.',
      },
      {
        title: 'Scalable product foundation',
        detail:
          'A well-built app can grow with your business, which means new screens, new workflows, and new integrations can be added without starting over.',
      },
    ],
    technologies: [
      { group: 'Frontend', items: ['React Native', 'Flutter', 'Expo', 'TypeScript'] },
      { group: 'Native', items: ['Swift', 'Kotlin', 'iOS SDK', 'Android SDK'] },
      { group: 'Backend', items: ['Node.js', 'REST APIs', 'Supabase', 'Firebase'] },
      { group: 'Release', items: ['App Store Connect', 'Google Play Console', 'Crash reporting', 'Analytics'] },
    ],
    whyChooseUsParagraphs: [
      'Mobile app projects succeed when the product is shaped around actual user behavior, not just around a feature checklist. We keep the interface practical and the build process direct so the app can move toward release without unnecessary complexity. Every screen, action, and integration is considered in relation to how the user will touch the product in real life.',
      'We also pay attention to the long view. A launch-ready app should still be easy to maintain after it reaches the store, which means the code structure, API handling, and release workflow all need to stay organized. That is the difference between a one-off build and a product that can grow with the business.',
    ],
    whyChooseUsPoints: [
      'Mobile-first product thinking from planning to launch',
      'Interface decisions built around touch behavior and speed',
      'Clean development flow that supports future updates',
    ],
    ctaTitle: 'Ready to build your mobile app?',
    ctaParagraphs: [
      'If you have an app idea, booking flow, internal tool, or product MVP in mind, we can shape the requirements into a clear build plan. The next step is usually a simple consultation to decide what the app must do on day one and what can be added later.',
      'Use the contact page to start the conversation, and we will help turn the idea into a practical mobile product roadmap.',
    ],
    relatedLinks: [
      { label: 'Web Development Services', path: '/web-development-services' },
      { label: 'AI Development Services', path: '/ai-development-services' },
      { label: 'Custom Software Development', path: '/custom-software-development' },
    ],
  },
  '/web-development-services': {
    route: '/web-development-services',
    serviceSlug: 'website-development',
    metaTitle: 'Web Development Services | WEBGAEBEL',
    metaDescription:
      'Build responsive, SEO-friendly websites with WEBGAEBEL web development services focused on speed, clarity, and conversion.',
    h1: 'Web Development Services',
    primaryKeyword: 'web development services',
    secondaryKeywords: [
      'responsive web design',
      'custom websites',
      'landing pages',
      'SEO-friendly websites',
      'website redesign',
      'business websites',
      'performance optimization',
      'conversion-focused pages',
    ],
    subheading:
      'Create fast, responsive websites that explain the offer clearly, load quickly, and help visitors move toward contact with confidence.',
    introParagraphs: [
      'Web development services form the base of most modern agency websites because the website is often the first place a buyer decides whether the company is serious. A good website does more than look polished. It answers the right questions quickly, gives the page a logical structure, and makes the next step obvious. When visitors can understand the service in a few seconds, they are much more likely to continue reading and eventually take action.',
      'WEBGAEBEL builds web development services around clarity, performance, and search visibility. That means the structure is planned before the design is polished, the content is written before the page is overloaded, and the final build is reviewed on mobile as carefully as it is on desktop. The goal is to create websites that do their job well: communicate value, support keyword targeting, and guide people toward a conversation without friction.',
    ],
    processSteps: [
      {
        title: '1. Discovery and site mapping',
        detail:
          'We begin by mapping the homepage, service pages, about page, and contact path so the site has a clear architecture from the start.',
      },
      {
        title: '2. Wireframes and content flow',
        detail:
          'Each page is outlined with a logical order of sections so the content appears in the sequence visitors expect and search engines can understand.',
      },
      {
        title: '3. Responsive UI build',
        detail:
          'The layout is then built to work smoothly on phones, tablets, and desktops, with spacing, typography, and interactions tuned for real screens.',
      },
      {
        title: '4. Performance and SEO setup',
        detail:
          'We pay attention to speed, metadata, image handling, schema, and heading hierarchy so the site has a stronger technical base.',
      },
      {
        title: '5. Testing and launch',
        detail:
          'Before publishing, we check browser behavior, mobile layout, form flow, and page consistency to make sure the website is ready to go live.',
      },
    ],
    features: [
      {
        title: 'Responsive layouts',
        detail:
          'Pages are designed to adapt gracefully across screen sizes, making the site readable and usable on the devices people actually use.',
      },
      {
        title: 'SEO-friendly structure',
        detail:
          'The architecture is organized around clean headings, internal links, and keyword-focused content so the pages are easier to understand.',
      },
      {
        title: 'Landing page systems',
        detail:
          'We can build focused landing pages for campaigns, services, and lead generation with a layout that reduces distraction.',
      },
      {
        title: 'CMS-ready content flow',
        detail:
          'When the website needs easy editing, we design the page patterns so your team can update content without breaking the structure.',
      },
      {
        title: 'Speed and accessibility',
        detail:
          'Performance, readable contrast, and keyboard-friendly behavior are considered so the site works better for more visitors.',
      },
    ],
    benefits: [
      {
        title: 'Stronger first impression',
        detail:
          'A clean website helps buyers trust the business sooner because the offer, the layout, and the page quality all feel more deliberate.',
      },
      {
        title: 'Clearer messaging',
        detail:
          'Visitors should know what the business does within moments of arriving, and a good web build makes that message easy to grasp.',
      },
      {
        title: 'Better organic visibility',
        detail:
          'Structured content, metadata, and internal linking improve the page foundation for search visibility over time.',
      },
      {
        title: 'Higher conversion potential',
        detail:
          'A website that feels fast and organized makes it easier for a visitor to read, compare, and contact the business.',
      },
    ],
    technologies: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { group: 'Core web', items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive design'] },
      { group: 'SEO tools', items: ['Meta tags', 'Schema markup', 'GA4', 'Google Search Console'] },
      { group: 'Integrations', items: ['REST APIs', 'Forms', 'Maps', 'Analytics'] },
    ],
    whyChooseUsParagraphs: [
      'Web development works best when the final page is guided by a clear plan rather than by decoration alone. We start with structure, then move into design, and finally shape the content so it supports the goal of the page. That approach keeps the experience calm, readable, and conversion-focused.',
      'We also keep maintenance in mind. A website should be easy to improve, which means the code, layout, and content blocks need to stay organized. This matters for businesses that want to continue refining pages after launch without having to rebuild the whole site.',
    ],
    whyChooseUsPoints: [
      'Clean structure before visual polish',
      'Pages built for speed, clarity, and mobile usability',
      'Content and code that are easier to maintain over time',
    ],
    ctaTitle: 'Need a new website built properly?',
    ctaParagraphs: [
      'If your current site feels outdated, slow, or hard to explain, we can turn it into a cleaner web experience with a better page structure and a more focused message.',
      'Start with a consultation and we will map the pages, the content, and the conversion path together.',
    ],
    relatedLinks: [
      { label: 'Mobile App Development', path: '/mobile-app-development' },
      { label: 'AI Development Services', path: '/ai-development-services' },
      { label: 'Custom Software Development', path: '/custom-software-development' },
    ],
  },
  '/ai-development-services': {
    route: '/ai-development-services',
    serviceSlug: 'automation-solutions',
    metaTitle: 'AI Development Services | WEBGAEBEL',
    metaDescription:
      'Automate workflows and build intelligent products with WEBGAEBEL AI development services, OpenAI integrations, and custom AI solutions.',
    h1: 'AI Development Services',
    primaryKeyword: 'AI development services',
    secondaryKeywords: [
      'OpenAI integration',
      'AI automation',
      'custom AI solutions',
      'chatbots',
      'document processing',
      'AI assistants',
      'workflow automation',
      'intelligent search',
    ],
    subheading:
      'Turn repetitive work into intelligent workflows with AI systems that answer questions, process content, and support faster decisions.',
    introParagraphs: [
      'AI development services help a business use machine intelligence in a practical way. That can mean a support assistant, a document processing flow, a knowledge search layer, a workflow automation system, or a product feature that understands and summarizes information. The important part is not the novelty. The important part is whether the AI system solves a real operational problem and fits the way the business already works.',
      'At WEBGAEBEL, AI development is approached as a product and systems problem, not a trend. We look at the task the team is doing today, the friction that slows it down, and the data or prompts needed to improve it. Then we design the AI flow with safety, review, and maintainability in mind. The result is a tool that feels useful instead of experimental, and a setup that the business can continue to refine after launch.',
    ],
    processSteps: [
      {
        title: '1. Use case discovery',
        detail:
          'We identify the exact business task that the AI should improve, such as answering questions, sorting documents, or automating a repeat workflow.',
      },
      {
        title: '2. Data and prompt planning',
        detail:
          'The inputs, outputs, and guardrails are defined so the system knows what to process, what to ignore, and when to escalate to a human.',
      },
      {
        title: '3. Model and flow design',
        detail:
          'We design the user experience, prompt sequence, and tool connections so the AI behaves consistently and stays useful for the intended job.',
      },
      {
        title: '4. Integration and deployment',
        detail:
          'The system is connected to the website, app, or internal process so it can start working with real data and real users.',
      },
      {
        title: '5. Monitoring and refinement',
        detail:
          'After launch, the flow is reviewed and tuned so performance stays stable and the output continues to match the business need.',
      },
    ],
    features: [
      {
        title: 'AI assistants',
        detail:
          'Build assistant-style experiences that can answer questions, guide users, or help staff move through internal tasks faster.',
      },
      {
        title: 'Document processing',
        detail:
          'Use AI to classify, summarize, or extract useful information from documents, forms, and content-heavy inputs.',
      },
      {
        title: 'Workflow automation',
        detail:
          'Connect AI to actions such as routing, tagging, alerts, and content preparation so routine work becomes faster and more consistent.',
      },
      {
        title: 'Intelligent search',
        detail:
          'Add search behavior that understands meaning rather than just exact words, which makes information easier to find.',
      },
      {
        title: 'Custom product features',
        detail:
          'AI can also be added inside a website or software product as a feature that improves the way users interact with the system.',
      },
    ],
    benefits: [
      {
        title: 'Less manual repetition',
        detail:
          'When routine tasks are reduced, the team has more time for decisions, customer service, and higher-value work.',
      },
      {
        title: 'Faster response time',
        detail:
          'AI can help respond to queries, sort data, or prepare summaries more quickly than a manual process alone.',
      },
      {
        title: 'Better internal efficiency',
        detail:
          'A good AI system improves how information moves through the organization, which can make daily operations easier to manage.',
      },
      {
        title: 'More scalable support',
        detail:
          'The same AI flow can often support more users or more content without the same increase in manual effort.',
      },
    ],
    technologies: [
      { group: 'AI layer', items: ['OpenAI API', 'Prompt workflows', 'Embeddings', 'Function calling'] },
      { group: 'Data layer', items: ['Vector search', 'Supabase', 'PostgreSQL', 'Content indexing'] },
      { group: 'Automation', items: ['Node.js', 'Webhooks', 'Queues', 'API orchestration'] },
      { group: 'Deployment', items: ['Cloud hosting', 'Monitoring', 'Error logging', 'Access control'] },
    ],
    whyChooseUsParagraphs: [
      'AI development works best when it is practical, specific, and controlled. We do not build it as a novelty layer. We build it to complete tasks more efficiently and with enough structure that people can still trust the output. That is why the planning, prompts, and integration steps matter as much as the model itself.',
      'The long-term success of an AI feature depends on how well it fits the business process. If the process is clear, the AI can support it. If the process is messy, the AI will only magnify the confusion. That is why we start with the workflow, not the hype.',
    ],
    whyChooseUsPoints: [
      'AI use cases tied to real business outcomes',
      'Controlled integrations with human review where needed',
      'Systems designed to stay maintainable after launch',
    ],
    ctaTitle: 'Ready to build an AI feature or workflow?',
    ctaParagraphs: [
      'If you want a practical AI assistant, automation flow, or intelligent product feature, we can turn the idea into a workable scope and implementation plan.',
      'Reach out through the contact page and we will outline the best starting point for your use case.',
    ],
    relatedLinks: [
      { label: 'Web Development Services', path: '/web-development-services' },
      { label: 'Mobile App Development', path: '/mobile-app-development' },
      { label: 'Custom Software Development', path: '/custom-software-development' },
    ],
  },
  '/custom-software-development': {
    route: '/custom-software-development',
    serviceSlug: 'custom-web-apps',
    metaTitle: 'Custom Software Development Services | WEBGAEBEL',
    metaDescription:
      'Build internal systems, portals, and workflow software with WEBGAEBEL custom software development services designed for scale and control.',
    h1: 'Custom Software Development Services',
    primaryKeyword: 'custom software development services',
    secondaryKeywords: [
      'business software',
      'workflow systems',
      'internal dashboards',
      'portal development',
      'database applications',
      'custom web applications',
      'role-based access',
      'reporting tools',
    ],
    subheading:
      'Create software that fits your process, your users, and your data instead of forcing the business into a generic template.',
    introParagraphs: [
      'Custom software development services are for businesses that have outgrown spreadsheets, scattered tools, or generic systems that never quite fit the way the team works. The goal is to build software around the actual process, whether that means a portal, an operations dashboard, an approval workflow, a reporting layer, or a secure internal tool that removes repetitive steps from the day.',
      'WEBGAEBEL approaches custom software as a process design exercise as much as a development exercise. We look at how work moves through the organization, what information needs to be captured, what should be automated, and who needs access to what. Once that is clear, the software can be shaped around the real workflow instead of the other way around. That usually leads to cleaner operations, better visibility, and a system that can grow without creating extra manual work.',
    ],
    processSteps: [
      {
        title: '1. Process discovery',
        detail:
          'We review the workflow, user roles, pain points, and required data so the build is based on a real operational need instead of guesswork.',
      },
      {
        title: '2. System architecture',
        detail:
          'The data model, permissions, dashboard structure, and integration points are outlined before development so the system stays organized.',
      },
      {
        title: '3. Interface and workflow design',
        detail:
          'We design the screens and actions so the software feels simple to use even when the business logic behind it is more advanced.',
      },
      {
        title: '4. Development and integration',
        detail:
          'The system is built with the required database logic, user access, and external connections so the workflow can run in one place.',
      },
      {
        title: '5. Testing, rollout, and support',
        detail:
          'The software is checked for usability, permission behavior, and stability before the rollout, then supported after launch so the system can improve.',
      },
    ],
    features: [
      {
        title: 'Role-based access',
        detail:
          'Different users can see the right information and perform the right actions without exposing parts of the system they do not need.',
      },
      {
        title: 'Custom dashboards',
        detail:
          'Operational data can be presented in a way that helps the team understand performance, workload, and progress quickly.',
      },
      {
        title: 'Workflow automation',
        detail:
          'Manual steps can be reduced by building the system to move requests, approvals, and updates through a structured flow.',
      },
      {
        title: 'Reporting and analytics',
        detail:
          'The software can summarize activity, track status, and provide the views the business needs to make better decisions.',
      },
      {
        title: 'Secure database handling',
        detail:
          'Information is stored and retrieved in an organized way so the platform can support both growth and practical control.',
      },
    ],
    benefits: [
      {
        title: 'Less manual overhead',
        detail:
          'Custom software removes repetitive admin work and reduces the amount of time people spend moving information by hand.',
      },
      {
        title: 'Better visibility',
        detail:
          'Dashboards and reporting layers make it easier for teams to see what is happening and where attention is needed.',
      },
      {
        title: 'More control over process',
        detail:
          'Instead of adapting to off-the-shelf software, the business gets a system that follows its own workflow.',
      },
      {
        title: 'Easier future growth',
        detail:
          'A modular build can be expanded as the business changes, which makes the software more useful over the long term.',
      },
    ],
    technologies: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Component systems'] },
      { group: 'Backend', items: ['Node.js', 'APIs', 'Authentication', 'Business rules'] },
      { group: 'Data', items: ['PostgreSQL', 'Supabase', 'Data modelling', 'Reporting tables'] },
      { group: 'Operations', items: ['Access control', 'Deployment', 'Logging', 'Maintenance workflow'] },
    ],
    whyChooseUsParagraphs: [
      'Custom software succeeds when the development plan mirrors the actual process the business wants to improve. We spend time understanding that process first so the eventual system feels like a natural fit instead of a workaround.',
      'We also aim for clarity in the build itself. The interface, the data structure, and the permission model should all be easy to maintain once the software is live. That makes future changes simpler and reduces the chance of the system becoming difficult to manage later.',
    ],
    whyChooseUsPoints: [
      'Process-led software planning',
      'Clear architecture built for maintainability',
      'Practical support after the initial rollout',
    ],
    ctaTitle: 'Need software built around your process?',
    ctaParagraphs: [
      'If spreadsheets, disconnected tools, or manual approvals are slowing your team down, we can design a better system around the way you actually work.',
      'Start the conversation through the contact page and we will map the right scope for your custom software project.',
    ],
    relatedLinks: [
      { label: 'Web Development Services', path: '/web-development-services' },
      { label: 'Mobile App Development', path: '/mobile-app-development' },
      { label: 'AI Development Services', path: '/ai-development-services' },
    ],
  },
};

export const servicePageRoutes = Object.keys(servicePageContentByRoute) as ServicePageRoute[];

export const getServicePageContent = (route: string) =>
  (servicePageContentByRoute as Record<string, ServicePageContent>)[route] ?? null;

export const getServicePathBySlug = (slug: string) => servicePathBySlug[slug] ?? `/services/${slug}`;

export const getServiceSlugByRoute = (route: string) =>
  (serviceSlugByRoute as Record<string, string>)[route] ?? null;

