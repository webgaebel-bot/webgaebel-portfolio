import { Mail, MapPinned } from 'lucide-react';
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
            <img src="/logo.png" alt="Webgaebel Tech Solutions" className="mb-4 h-20 w-auto" />
            <p className="max-w-sm leading-8 text-white/72">
              Premium websites, custom systems, automation workflows, and polished product design
              for ambitious businesses.
            </p>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-white/76">
              <li><button onClick={() => goTo('/')} className="transition-soft hover:text-[var(--color-cyan)]">Home</button></li>
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">Services</button></li>
              <li><button onClick={() => goTo('/process')} className="transition-soft hover:text-[var(--color-cyan)]">Process + SDLC</button></li>
              <li><button onClick={() => goTo('/projects')} className="transition-soft hover:text-[var(--color-cyan)]">Projects</button></li>
              <li><button onClick={() => goTo('/contact')} className="transition-soft hover:text-[var(--color-cyan)]">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Core Services</h3>
            <ul className="space-y-3 text-white/76">
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">Application Development</button></li>
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">Website Development</button></li>
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">Automation Solutions</button></li>
              <li><button onClick={() => goTo('/services')} className="transition-soft hover:text-[var(--color-cyan)]">UI/UX Design</button></li>
            </ul>
          </div>

          <div>
            <h3 className="theme-heading mb-4 text-lg font-bold">Contact</h3>
            <div className="space-y-4 text-white/76">
              <a href="mailto:webgaebel@gmail.com" className="flex items-start gap-3 transition-soft hover:text-[var(--color-cyan)]">
                <Mail className="mt-1 h-5 w-5 text-[var(--color-cyan)]" />
                <span>webgaebel@gmail.com</span>
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
                      : currentPath === '/process'
                        ? '/process'
                        : currentPath.startsWith('/projects')
                          ? '/projects'
                          : '/contact'
                  )
                }
                className="rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
              >
                {currentPath === '/services'
                  ? 'Revisit Services'
                  : currentPath === '/process'
                    ? 'View Process'
                    : currentPath.startsWith('/projects')
                      ? 'View Projects'
                      : 'Start Conversation'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>© {currentYear} WEBGAEBEL. All rights reserved.</p>
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
