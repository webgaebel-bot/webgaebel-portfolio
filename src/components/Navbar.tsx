import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { RoutePath } from '../App';

type NavbarProps = {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, sectionId?: string) => void;
};

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: RoutePath, sectionId?: string) => {
    onNavigate(path, sectionId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' as RoutePath, id: 'hero' },
    { name: 'Services', path: '/services' as RoutePath },
    { name: 'Process', path: '/process' as RoutePath },
    { name: 'Projects', path: '/projects' as RoutePath },
    { name: 'Contact', path: '/contact' as RoutePath },
  ];

  const isLinkActive = (path: RoutePath) => {
    if (path === '/services') return currentPath === '/services' || currentPath.startsWith('/services/');
    if (path === '/projects') return currentPath === '/projects' || currentPath.startsWith('/projects/');
    return currentPath === path;
  };

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 transition-soft ${
        isScrolled
          ? 'border-b border-white/60 bg-white/88 shadow-[0_20px_50px_rgba(11,61,102,0.12)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
            onClick={() => handleNavigation('/', 'hero')}
          >
            <img src="/logo.png" alt="Webgaebel Tech Solutions" className="h-12 w-auto" />
            <div className="hidden text-left sm:block">
              <div className="font-['Space_Grotesk'] text-sm font-bold tracking-[0.25em] text-[var(--color-corporate-blue)]">
                WEBGAEBEL
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--color-teal)]">
                Tech Solutions
              </div>
            </div>
          </motion.button>

          <div className="hidden items-center gap-2 xl:flex">
            <div className="flex items-center rounded-full border border-white/60 bg-white/72 p-2 shadow-[0_14px_34px_rgba(11,61,102,0.08)] backdrop-blur-xl">
              {navLinks.map((link, index) => {
                const active = isLinkActive(link.path);

                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index }}
                    onClick={() => handleNavigation(link.path, link.id)}
                    className={`relative overflow-hidden rounded-full px-4 py-3 text-sm font-semibold transition-soft ${
                      active ? 'text-white' : 'text-slate-700 hover:text-[var(--color-corporate-blue)]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-highlight"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            'linear-gradient(135deg, var(--color-deep-navy), var(--color-teal), var(--color-cyan))',
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      />
                    )}
                    {!active && (
                      <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-soft hover:opacity-100" />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavigation('/contact')}
              className="theme-button-primary text-sm"
            >
              Start Project
            </motion.button>
          </div>

          <button
            className="rounded-full border border-white/70 bg-white/80 p-3 text-[var(--color-corporate-blue)] shadow-[0_14px_34px_rgba(11,61,102,0.08)] transition-soft hover:border-brand hover:text-[var(--color-teal)] xl:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[rgba(11,61,102,0.08)] bg-white/92 backdrop-blur-xl xl:hidden"
          >
            <div className="container mx-auto space-y-3 px-4 py-5">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path, link.id)}
                    className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-soft ${
                      active
                        ? 'bg-[var(--color-corporate-blue)] text-white shadow-[0_16px_36px_rgba(11,61,102,0.18)]'
                        : 'bg-[rgba(11,61,102,0.04)] text-slate-700 hover:bg-[rgba(47,178,177,0.14)] hover:text-[var(--color-corporate-blue)]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <button onClick={() => handleNavigation('/contact')} className="theme-button-primary w-full text-sm">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
