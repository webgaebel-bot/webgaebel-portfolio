import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Minus, Phone, Plus } from 'lucide-react';

type FAQProps = {
  onNavigateToContact: () => void;
};

const faqs = [
  {
    question: 'How long does it take to build a Shopify store?',
    answer:
      'It usually takes 3 to 7 days depending on the complexity of the project, the number of required features, and the design direction.',
  },
  {
    question: 'Do you provide winning products?',
    answer:
      'Yes. We can help identify trending and high-demand products based on market research for Pakistan and international markets.',
  },
  {
    question: 'Will my store be mobile-friendly?',
    answer:
      'Absolutely. Every store is fully optimized for mobile devices to ensure a smoother user experience and stronger conversion performance.',
  },
  {
    question: 'Do you offer Facebook and Instagram ads services?',
    answer:
      'Yes. We provide complete Meta Ads management, including account setup, targeting, creative direction, optimization, and scaling strategy.',
  },
  {
    question: 'What payment methods do you support?',
    answer:
      'We support Cash on Delivery (COD) for Pakistan and can also integrate online payment gateways for international stores.',
  },
  {
    question: 'Can you manage my store after delivery?',
    answer:
      'Yes. We offer monthly store management services, including product uploads, order handling, store updates, and support assistance.',
  },
  {
    question: 'Do you provide revisions?',
    answer:
      'Yes. We provide revisions to help ensure the final delivery aligns with your expectations and project goals.',
  },
  {
    question: 'Do you build stores for international clients?',
    answer:
      'Yes. We work with clients in the USA, UK, and worldwide, and tailor stores according to the needs of their target markets.',
  },
  {
    question: 'Will my store be SEO optimized?',
    answer:
      'Yes. We implement basic Search Engine Optimization (SEO) practices to help your store build stronger visibility on Google.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply click the Get Started button or contact us directly, and we will guide you through the next steps from planning to launch.',
  },
];

export default function FAQ({ onNavigateToContact }: FAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[320px_1fr] xl:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-[8px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(180deg,#fbfdff,#f5f9fc)] p-6 shadow-[0_14px_34px_rgba(11,61,102,0.06)]"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Need Assistance?
            </div>
            <div className="mt-4 h-px bg-[rgba(11,61,102,0.10)]" />

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,61,102,0.08)] bg-white text-[var(--color-corporate-blue)]">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">(888) 455-9200</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                  Client Support
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <div className="font-semibold text-slate-800">Monday - Thursday</div>
                <div className="mt-2 text-slate-400">8:00am - 5:00pm PST</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">Friday</div>
                <div className="mt-2 text-slate-400">9:00am - 5:00pm PST</div>
              </div>
            </div>

            <button
              onClick={onNavigateToContact}
              className="mt-10 flex items-center gap-3 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </button>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[8px] bg-white"
          >
            <div className="border-b border-[rgba(11,61,102,0.10)] pb-6">
              <div className="theme-heading text-3xl font-bold uppercase tracking-[0.02em] text-slate-900 md:text-4xl">
                Frequently Asked Questions
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Clear answers to common questions about Shopify stores, Search Engine Optimization,
                Meta Ads, support, revisions, and project delivery.
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
                      <span className="pr-4 text-sm font-medium text-slate-800 md:text-base">
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
                      <div className="pb-6 pr-10 text-sm leading-8 text-slate-600 md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8">
              <p className="text-base leading-8 text-slate-600">
                Still have questions? Contact us now and get a free consultation.
              </p>
              <button onClick={onNavigateToContact} className="theme-button-secondary mt-5">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
