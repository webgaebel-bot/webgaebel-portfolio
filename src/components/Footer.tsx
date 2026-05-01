import { Facebook, Instagram, Linkedin, Mail, MapPinned, Phone, Twitter } from 'lucide-react';
import type { RoutePath } from '../App';

type FooterProps = {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, sectionId?: string) => void;
};

export default function Footer({ currentPath, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const goTo = (path: RoutePath, sectionId?: string) => {
    onNavigate(path, sectionId);
  };

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-ink),var(--color-deep-navy),var(--color-corporate-blue))] text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container relative mx-auto px-4 py-14 sm:px-6 lg:px-8 md:py-16">
        <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="max-w-sm leading-8 text-white/72">
              SEO-focused websites, custom systems, mobile apps, and AI delivery for ambitious businesses.
            </p>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-white/76">
              <li><button onClick={() => goTo('/')} className="transition-soft hover:text-[var(--color-cyan)]">Home</button></li>
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">Services</button></li>
              <li><button onClick={() => goTo('/about')} className="transition-soft hover:text-[var(--color-cyan)]">About</button></li>
              <li><button onClick={() => goTo('/process')} className="transition-soft hover:text-[var(--color-cyan)]">Process + SDLC</button></li>
              <li><button onClick={() => goTo('/contact')} className="transition-soft hover:text-[var(--color-cyan)]">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Core Services</h3>
            <ul className="space-y-3 text-white/76">
              <li><button onClick={() => goTo('/web-development-services')} className="transition-soft hover:text-[var(--color-cyan)]">Web Development Services</button></li>
              <li><button onClick={() => goTo('/mobile-app-development')} className="transition-soft hover:text-[var(--color-cyan)]">Mobile App Development</button></li>
              <li><button onClick={() => goTo('/ai-development-services')} className="transition-soft hover:text-[var(--color-cyan)]">AI Development Services</button></li>
              <li><button onClick={() => goTo('/custom-software-development')} className="transition-soft hover:text-[var(--color-cyan)]">Custom Software</button></li>
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Contact</h3>
            <div className="space-y-4 text-white/76">
              <a href="mailto:contact@webgaebel.com" className="flex items-start gap-3 transition-soft hover:text-[var(--color-cyan)]">
                <Mail className="mt-1 h-5 w-5 text-[var(--color-cyan)]" />
                <span>contact@webgaebel.com</span>
              </a>
              <a href="tel:+17402522078" className="flex items-start gap-3 transition-soft hover:text-[var(--color-cyan)]">
                <Phone className="mt-1 h-5 w-5 text-[var(--color-teal)]" />
                <span>+1 740 252 2078</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPinned className="mt-1 h-5 w-5 text-[var(--color-teal)]" />
                <span>
                  Digital delivery for local and international clients with dedicated support and
                  clear communication.
                </span>
              </div>
              <button
                onClick={() =>
                  goTo(
                    currentPath === '/services'
                      ? '/services'
                      : currentPath === '/about'
                        ? '/about'
                      : currentPath === '/process'
                        ? '/process'
                          : '/contact'
                  )
                }
                className="rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
              >
                {currentPath === '/services'
                  ? 'Revisit Services'
                  : currentPath === '/about'
                    ? 'View About'
                  : currentPath === '/process'
                    ? 'View Process'
                    : 'Start Conversation'}
              </button>

              <div className="pt-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Follow Us
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/webgaebel?igsh=MTAxMjl4b3B3aWEwdg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576470094663&mibextid=ZbWKw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/112655199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/WebGaebel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>(c) {currentYear} WEBGAEBEL. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => goTo('/privacy-policy')} className="transition-soft hover:text-[var(--color-cyan)]">
              Privacy Policy
            </button>
            <button onClick={() => goTo('/terms-of-service')} className="transition-soft hover:text-[var(--color-cyan)]">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

