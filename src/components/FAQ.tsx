import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

type FAQProps = {
  onNavigateToContact: () => void;
};

const faqs = [
  {
    question: 'How long does a website development project usually take?',
    answer:
      'Most website development projects take two to six weeks, depending on page count, design complexity, content readiness, and integrations.',
  },
  {
    question: 'What pages should a service website include for SEO?',
    answer:
      'A strong service website usually includes a homepage, service pages, an about page, a contact page, and any supporting pages that answer buyer intent clearly.',
  },
  {
    question: 'Will my website be mobile-friendly and fast?',
    answer:
      'Yes. Every page is designed for mobile responsiveness, clean layout structure, and practical performance improvements that help both users and search engines.',
  },
  {
    question: 'Can you write SEO content for my service pages?',
    answer:
      'Yes. We shape service-page copy around primary and secondary keywords while keeping the tone professional, human, and easy to read.',
  },
  {
    question: 'Do you optimize one primary keyword per page?',
    answer:
      'Yes. Each page should focus on one primary keyword, then use related terms naturally to support topical clarity and avoid keyword cannibalization.',
  },
  {
    question: 'Can you build dedicated mobile app service pages?',
    answer:
      'Yes. We can create dedicated pages for mobile app development, iOS, Android, and cross-platform app services with unique search intent.',
  },
  {
    question: 'Can you create AI development service pages too?',
    answer:
      'Yes. We can create dedicated AI development pages for workflow automation, model integration, assistants, and other AI-focused services.',
  },
  {
    question: 'Do you include internal linking in the SEO structure?',
    answer:
      'Yes. We connect home, service, about, and contact pages with keyword-based anchor text so the site stays easy to navigate and easier to crawl.',
  },
  {
    question: 'Can the copy target US, UK, and international English markets?',
    answer:
      'Yes. We can write in neutral international English while still supporting US, UK, Canadian, and Australian search phrasing where needed.',
  },
  {
    question: 'Will the pages include metadata and proper heading hierarchy?',
    answer:
      'Yes. Each page should use a clear meta title, a compelling meta description, and a clean H1, H2, and H3 structure.',
  },
  {
    question: 'How do I start the project?',
    answer:
      'Use the contact page and share your target pages, services, and keyword goals. From there, the content and structure can be shaped around your SEO priorities.',
  },
];

export default function FAQ({ onNavigateToContact }: FAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="border-b border-[rgba(11,61,102,0.10)] pb-6 text-center">
            <div className="theme-heading text-2xl font-bold uppercase tracking-[0.02em] text-slate-900 sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Clear answers to common questions about page structure, keyword targeting, mobile responsiveness,
              content planning, and SEO setup.
            </p>
          </div>

          <div className="mt-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[rgba(11,61,102,0.10)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-soft hover:text-[var(--color-corporate-blue)]"
                  >
                    <span className="pr-4 text-left text-sm font-medium leading-7 text-slate-800 md:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 flex-shrink-0 text-slate-900" />
                    ) : (
                      <Plus className="h-5 w-5 flex-shrink-0 text-slate-900" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-10 text-sm leading-8 text-slate-600 md:text-base">{faq.answer}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="pt-8 text-center">
            <p className="text-base leading-8 text-slate-600">
              Still have questions? Contact us and we&apos;ll help shape the page plan and keyword map.
            </p>
            <button onClick={onNavigateToContact} className="theme-button-secondary mt-5">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
