import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.08}
      whileDrag={{ scale: 1.02 }}
      className="fixed bottom-5 right-5 z-[85]"
    >
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute bottom-[calc(100%+12px)] right-0 w-[318px] overflow-hidden rounded-[20px] border border-[rgba(11,61,102,0.12)] bg-white shadow-[0_24px_54px_rgba(11,61,102,0.18)]"
            >
              <div className="flex items-start justify-between bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal))] px-5 py-4 text-white">
                <div>
                  <div className="theme-heading text-2xl font-bold">WebGaebel</div>
                  <div className="mt-1 text-sm text-white/84">We typically reply instantly</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/16 text-white transition-soft hover:bg-white/24"
                  aria-label="Close contact widget"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <div className="rounded-[18px] bg-[rgba(244,247,251,0.96)] px-5 py-4 text-lg leading-8 text-slate-700">
                  Hi there! How can we help you today? Start a conversation with us!
                </div>

                <div className="mt-4 space-y-3">
                  <a
                    href="https://wa.me/17402522078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-teal)] px-5 py-4 text-lg font-semibold text-white transition-soft hover:brightness-95"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:contact@webgaebel.com"
                    className="flex items-center justify-center gap-3 rounded-2xl border-2 border-[var(--color-corporate-blue)] bg-white px-5 py-4 text-lg font-semibold text-[var(--color-corporate-blue)] transition-soft hover:bg-[rgba(11,61,102,0.04)]"
                  >
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[3px] border-[var(--color-ink)] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal))] text-white shadow-[0_18px_40px_rgba(11,61,102,0.2)]"
          aria-label={isOpen ? 'Close contact widget' : 'Open contact widget'}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </motion.button>
      </div>
    </motion.div>
  );
}
