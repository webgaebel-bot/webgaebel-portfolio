import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  const [openIndex, setOpenIndex] = useState<number>(sections.length - 1);

  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl rounded-[30px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)]"
          >
            <div className="border-b border-[rgba(11,61,102,0.08)] px-6 py-6 text-center md:px-10">
              <span className="theme-badge">WEBGAEBEL Legal</span>
              <h1 className="theme-heading mt-4 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                {intro}
              </p>
            </div>

            <div className="divide-y divide-[rgba(11,61,102,0.08)]">
              {sections.map((section, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={section.heading} className="bg-white">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-soft hover:bg-[rgba(244,251,253,0.8)] md:px-8"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900 md:text-base">
                          {section.heading}
                        </span>
                      </div>
                      {isOpen ? (
                        <Minus className="h-5 w-5 flex-shrink-0 text-[var(--color-corporate-blue)]" />
                      ) : (
                        <Plus className="h-5 w-5 flex-shrink-0 text-slate-500" />
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.32 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-8">
                        <div className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.75)] p-5">
                          <p className="text-sm leading-7 text-slate-600 md:text-base">{section.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
