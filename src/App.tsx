import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import { projects } from './data/projects';
import { services } from './data/services';

export type RoutePath =
  | '/'
  | '/services'
  | '/projects'
  | '/process'
  | '/contact'
  | '/privacy-policy'
  | '/terms-of-service'
  | `/services/${string}`
  | `/projects/${string}`;

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const getRouteFromPath = (pathname: string): RoutePath => {
  if (pathname === '/services') return '/services';
  if (pathname === '/projects') return '/projects';
  if (pathname === '/process') return '/process';
  if (pathname === '/contact') return '/contact';
  if (pathname === '/privacy-policy') return '/privacy-policy';
  if (pathname === '/terms-of-service') return '/terms-of-service';
  if (pathname.startsWith('/services/')) return pathname as `/services/${string}`;
  if (pathname.startsWith('/projects/')) return pathname as `/projects/${string}`;
  return '/';
};

function App() {
  const [route, setRoute] = useState<RoutePath>(getRouteFromPath(window.location.pathname));
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    const initialLoaderTimer = window.setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);

    const handlePopState = () => {
      const nextRoute = getRouteFromPath(window.location.pathname);
      setRoute(nextRoute);
      setIsLoaderVisible(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.clearTimeout(initialLoaderTimer);
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
    const isDetailNavigation = path.startsWith('/projects/') || path.startsWith('/services/');

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

  const activeProject = useMemo(
    () =>
      route.startsWith('/projects/')
        ? projects.find((item) => item.slug === route.replace('/projects/', '')) ?? null
        : null,
    [route]
  );

  const activeService = useMemo(
    () =>
      route.startsWith('/services/')
        ? services.find((item) => item.slug === route.replace('/services/', '')) ?? null
        : null,
    [route]
  );

  return (
    <div className="site-shell">
      <Navbar currentPath={route} onNavigate={navigateTo} />

      <AnimatePresence>
        {(isInitialLoading || isLoaderVisible) && (
          <motion.div
            key={isInitialLoading ? 'initial-loader' : 'project-loader'}
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
            <ServicesPage onOpenService={(slug) => navigateTo(`/services/${slug}`)} />
          ) : activeService ? (
            <ServiceDetailPage service={activeService} onBackToServices={() => navigateTo('/services')} />
          ) : route === '/process' ? (
            <ProcessPage />
          ) : route === '/contact' ? (
            <ContactPage />
          ) : route === '/privacy-policy' ? (
            <PrivacyPolicyPage />
          ) : route === '/terms-of-service' ? (
            <TermsOfServicePage />
          ) : activeProject ? (
            <ProjectDetailPage project={activeProject} onBackToProjects={() => navigateTo('/projects')} />
          ) : route === '/projects' ? (
            <ProjectsPage onOpenProject={(slug) => navigateTo(`/projects/${slug}`)} />
          ) : (
            <HomePage
              onNavigateToServices={() => navigateTo('/services')}
              onOpenService={(slug) => navigateTo(`/services/${slug}`)}
              onNavigateToProjects={() => navigateTo('/projects')}
              onNavigateToProcess={() => navigateTo('/process')}
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
