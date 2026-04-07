import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import { projects } from './data/projects';
import { services } from './data/services';
import {
  getServicePageContent,
  getServicePathBySlug,
  getServiceSlugByRoute,
  servicePageRoutes,
} from './data/servicePages';

export type RoutePath =
  | '/'
  | '/services'
  | '/about'
  | '/projects'
  | '/process'
  | '/contact'
  | '/privacy-policy'
  | '/terms-of-service'
  | '/mobile-app-development'
  | '/web-development-services'
  | '/ai-development-services'
  | '/custom-software-development'
  | '/data-solutions'
  | `/services/${string}`
  | `/projects/${string}`;

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const getRouteFromPath = (pathname: string): RoutePath => {
  if ((servicePageRoutes as readonly string[]).includes(pathname)) return pathname as RoutePath;
  if (pathname === '/services') return '/services';
  if (pathname === '/about') return '/about';
  if (pathname === '/projects') return '/projects';
  if (pathname.startsWith('/projects/')) return pathname as `/projects/${string}`;
  if (pathname === '/services/application-development') return '/mobile-app-development';
  if (pathname === '/services/website-development') return '/web-development-services';
  if (pathname === '/services/automation-solutions') return '/ai-development-services';
  if (pathname === '/services/custom-web-apps') return '/custom-software-development';
  if (pathname === '/services/data-solutions') return '/data-solutions';
  if (pathname === '/process') return '/process';
  if (pathname === '/contact') return '/contact';
  if (pathname === '/privacy-policy') return '/privacy-policy';
  if (pathname === '/terms-of-service') return '/terms-of-service';
  if (pathname.startsWith('/services/')) return pathname as `/services/${string}`;
  return '/';
};

const SITE_NAME = 'WEBGAEBEL';
const SITE_URL = 'https://webgaebel.com';
const DEFAULT_TITLE = 'WebGaebel | Full Stack Development & AI Solutions Agency';
const DEFAULT_DESCRIPTION =
  'Web development services, software development, SaaS development, mobile apps, and AI solutions for businesses that need reliable digital delivery.';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const DEFAULT_KEYWORDS =
  'web development services, software development agency, SaaS development, mobile app development, AI development services, custom software development, enterprise software development, WebGaebel';

type SeoPayload = {
  title: string;
  description: string;
  keywords?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: Record<string, unknown>;
};

const setMetaContent = (selector: string, content: string) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    const match = selector.match(/^meta\[(name|property)="(.+)"\]$/);
    if (!match) return;

    element = document.createElement('meta');
    element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setCanonicalUrl = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

const setStructuredData = (schema?: Record<string, unknown>) => {
  const scriptId = 'dynamic-seo-schema';
  const existingScript = document.getElementById(scriptId);

  if (!schema) {
    existingScript?.remove();
    return;
  }

  const script = existingScript ?? document.createElement('script');
  script.id = scriptId;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(schema);

  if (!existingScript) {
    document.head.appendChild(script);
  }
};

const buildSeoPayload = (route: RoutePath, activeService: (typeof services)[number] | null): SeoPayload => {
  const servicePage = getServicePageContent(route);

  if (servicePage && activeService) {
    return {
      title: servicePage.metaTitle,
      description: servicePage.metaDescription,
      keywords: [servicePage.primaryKeyword, ...servicePage.secondaryKeywords].join(', '),
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: servicePage.h1,
        description: servicePage.metaDescription,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        areaServed: 'Worldwide',
        url: `${SITE_URL}${servicePage.route}`,
      },
    };
  }

  if (route === '/services') {
    return {
      title: `Web Development Services | ${SITE_NAME}`,
      description:
        'Explore WEBGAEBEL web development services, mobile app development, SEO, AI development services, Shopify, and WordPress solutions.',
      keywords:
        'web development services, mobile app development, SEO services, AI development services, Shopify development services',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'WEBGAEBEL Services',
        description: 'Service catalog covering web development, mobile apps, SEO, AI, Shopify, and WordPress.',
      },
    };
  }

  if (route === '/') {
    return {
      title: `Web Development & Software Development Agency | ${SITE_NAME}`,
      description:
        'WEBGAEBEL builds web development services, software development solutions, SaaS products, mobile apps, and AI systems for growing businesses.',
      keywords:
        'web development services, software development, SaaS development, mobile app development, AI development services, custom software development, web design agency, software development agency',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: SITE_NAME,
        description:
          'WEBGAEBEL builds web development services, software development solutions, SaaS products, mobile apps, and AI systems for growing businesses.',
        url: SITE_URL,
      },
    };
  }

  if (route === '/about') {
    return {
      title: `About WEBGAEBEL | Software & AI Development Agency`,
      description:
        'Learn how WEBGAEBEL approaches software development, SEO-focused content, mobile app delivery, and AI development services.',
      keywords:
        'software and AI development agency, enterprise software development company, web development services',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About WEBGAEBEL',
        description: 'About page for WEBGAEBEL, a software and AI development agency.',
      },
    };
  }

  if (route === '/projects') {
    return {
      title: `Projects | ${SITE_NAME}`,
      description:
        'Explore WEBGAEBEL projects with image previews, project detail pages, and trust-building portfolio layouts.',
      keywords: 'web design portfolio, project previews, project detail pages, agency portfolio',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'WEBGAEBEL Projects',
        description: 'Portfolio page for WEBGAEBEL projects and project detail views.',
      },
    };
  }

  if (route === '/process') {
    return {
      title: `Process | ${SITE_NAME}`,
      description:
        'Learn how WEBGAEBEL handles discovery, planning, design, development, launch, and optimization for websites and apps.',
      keywords: 'web development project timeline guide, agency process, development workflow',
    };
  }

  if (route === '/contact') {
    return {
      title: `Contact | ${SITE_NAME}`,
      description:
        'Contact WEBGAEBEL for website development, mobile app development, SEO services, and AI development projects.',
      keywords: 'contact software development agency, website development inquiry, SEO consultation',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact WEBGAEBEL',
        description: 'Contact page for project inquiries and agency communication.',
      },
    };
  }

  if (route === '/privacy-policy') {
    return {
      title: `Privacy Policy | ${SITE_NAME}`,
      description: 'Read the WEBGAEBEL privacy policy for information on how inquiries, communication, and submitted data are handled and protected.',
    };
  }

  if (route === '/terms-of-service') {
    return {
      title: `Terms of Service | ${SITE_NAME}`,
      description: 'Review WEBGAEBEL terms of service, website usage conditions, responsibilities, and project engagement limitations.',
    };
  }

  if (activeService) {
    return {
      title: `${activeService.title} | ${SITE_NAME}`,
      description: `${activeService.description} ${activeService.outcomes}`,
      keywords: `${activeService.title}, ${activeService.industries.join(', ')}, web agency services, ${SITE_NAME}`,
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: activeService.title,
        description: `${activeService.description} ${activeService.overview}`,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        areaServed: 'Worldwide',
        url: `${SITE_URL}${route}`,
      },
    };
  }

  const activeProject = route.startsWith('/projects/')
    ? projects.find((item) => item.slug === route.replace('/projects/', '')) ?? null
    : null;

  if (activeProject) {
    return {
      title: `${activeProject.title} | ${SITE_NAME}`,
      description: `${activeProject.description} Result: ${activeProject.result}.`,
      keywords: `${activeProject.title}, ${activeProject.category}, project preview, agency portfolio`,
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: activeProject.title,
        description: activeProject.description,
        about: activeProject.category,
        creator: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        url: `${SITE_URL}${route}`,
      },
    };
  }

  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
    },
  };
};

function App() {
  const [route, setRoute] = useState<RoutePath>(getRouteFromPath(window.location.pathname));
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== route) {
      window.history.replaceState({}, '', route);
    }

    const handlePopState = () => {
      const nextRoute = getRouteFromPath(window.location.pathname);
      setRoute(nextRoute);
      setIsLoaderVisible(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const completeNavigation = (path: RoutePath, sectionId?: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }

    setRoute(path);

    window.requestAnimationFrame(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const navigateTo = (path: RoutePath, sectionId?: string) => {
    const isDetailNavigation =
      path.startsWith('/projects/') ||
      path.startsWith('/services/') ||
      (servicePageRoutes as readonly string[]).includes(path);

    if (isDetailNavigation) {
      setIsLoaderVisible(true);
      window.setTimeout(() => {
        completeNavigation(path, sectionId);
        window.setTimeout(() => setIsLoaderVisible(false), 220);
      }, 900);
      return;
    }

    setIsLoaderVisible(false);
    completeNavigation(path, sectionId);
  };

  const activeService = useMemo(
    () =>
      getServiceSlugByRoute(route)
        ? services.find((item) => item.slug === getServiceSlugByRoute(route)) ?? null
        : route.startsWith('/services/')
          ? services.find((item) => item.slug === route.replace('/services/', '')) ?? null
          : null,
    [route]
  );

  const activeProject = useMemo(
    () =>
      route.startsWith('/projects/')
        ? projects.find((item) => item.slug === route.replace('/projects/', '')) ?? null
        : null,
    [route]
  );

  useEffect(() => {
    const seo = buildSeoPayload(route, activeService);
    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;
    const imageUrl = seo.image?.startsWith('http')
      ? seo.image
      : seo.image
        ? `${SITE_URL}${seo.image}`
        : DEFAULT_IMAGE;

    document.title = seo.title;

    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[name="keywords"]', seo.keywords ?? '');
    setMetaContent('meta[property="og:title"]', seo.title);
    setMetaContent('meta[property="og:description"]', seo.description);
    setMetaContent('meta[property="og:type"]', seo.type ?? 'website');
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:image"]', imageUrl);
    setMetaContent('meta[name="twitter:title"]', seo.title);
    setMetaContent('meta[name="twitter:description"]', seo.description);
    setMetaContent('meta[name="twitter:image"]', imageUrl);
    setCanonicalUrl(canonicalUrl);
    setStructuredData(seo.schema);
  }, [route, activeService]);

  return (
    <div className="site-shell">
      <Navbar currentPath={route} onNavigate={navigateTo} />

      <AnimatePresence>
        {isLoaderVisible && (
          <motion.div
            key="project-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#190607]/95 backdrop-blur-sm"
          >
            <div className="relative flex h-[230px] w-[230px] items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-[10px] border-transparent"
                style={{
                  borderTopColor: '#18a9da',
                  borderRightColor: '#1dd6d0',
                  borderBottomColor: '#2fb2b1',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-[22px] rounded-full border border-white/10"
                animate={{ scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <motion.div
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="text-center font-['Space_Grotesk'] text-3xl font-semibold text-white"
              >
                Loading...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
        {route === '/services' ? (
            <ServicesPage onOpenService={(slug) => navigateTo(getServicePathBySlug(slug))} />
          ) : route === '/about' ? (
            <AboutPage onNavigateToServices={() => navigateTo('/services')} onNavigateToContact={() => navigateTo('/contact')} />
          ) : getServicePageContent(route) && activeService ? (
            <ServiceDetailPage
              service={activeService}
              pageContent={getServicePageContent(route) ?? undefined}
              onBackToServices={() => navigateTo('/services')}
              onNavigateToContact={() => navigateTo('/contact')}
              onNavigateToRelated={(path) => navigateTo(path as RoutePath)}
            />
          ) : activeService ? (
            <ServiceDetailPage
              service={activeService}
              onBackToServices={() => navigateTo('/services')}
              onNavigateToContact={() => navigateTo('/contact')}
              onNavigateToRelated={(path) => navigateTo(path as RoutePath)}
            />
          ) : activeProject ? (
            <ProjectDetailPage project={activeProject} onBackToProjects={() => navigateTo('/projects')} />
          ) : route === '/process' ? (
            <ProcessPage />
          ) : route === '/contact' ? (
            <ContactPage />
          ) : route === '/privacy-policy' ? (
            <PrivacyPolicyPage />
          ) : route === '/terms-of-service' ? (
            <TermsOfServicePage />
          ) : route === '/projects' ? (
            <ProjectsPage onOpenProject={(slug) => navigateTo(`/projects/${slug}`)} />
          ) : (
            <HomePage
              onNavigateToServices={() => navigateTo('/services')}
              onOpenService={(slug) => navigateTo(getServicePathBySlug(slug))}
              onNavigateToContact={() => navigateTo('/contact')}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer currentPath={route} onNavigate={navigateTo} />
    </div>
  );
}

export default App;
