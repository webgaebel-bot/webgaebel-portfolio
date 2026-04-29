import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MousePointerClick, Star, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FeedbackEntry = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  createdAt: string;
};

type TestimonialCard = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

const trustedBrands = [
  'NorthGrid',
  'BrightPath',
  'EstateFlow',
  'ScaleForge',
  'NovaCart',
];

const fallbackTestimonials: TestimonialCard[] = [
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'BrightPath Health',
    quote:
      'WebGaebel turned a cluttered product pitch into a system clients could immediately understand and trust.',
    rating: 5,
    initials: 'ER',
  },
  {
    id: 'marcus-lee',
    name: 'Marcus Lee',
    role: 'Operations Lead',
    company: 'NorthGrid Commerce',
    quote:
      'The new interface feels sharper, faster, and far more aligned with how our team actually works day to day.',
    rating: 5,
    initials: 'ML',
  },
  {
    id: 'sofia-khan',
    name: 'Sofia Khan',
    role: 'Product Manager',
    company: 'EstateFlow',
    quote:
      'What stood out most was the clarity. The product now feels premium, structured, and built to convert serious buyers.',
    rating: 5,
    initials: 'SK',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase() ?? '')
    .join('');

const splitRoleAndCompany = (roleText: string) => {
  const [role, company] = roleText.split(',').map((item) => item.trim());
  return {
    role: role || 'Client',
    company: company || 'WebGaebel Partner',
  };
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialCard | null>(null);

  useEffect(() => {
    const loadFeedback = async () => {
      if (!supabase) return;

      try {
        const { data, error } = await supabase
          .from('feedback')
          .select('id, name, role, content, rating, created_at')
          .order('created_at', { ascending: false });

        if (error) throw error;

        const nextFeedback = (data ?? []).map((item) => ({
          id: item.id,
          name: item.name,
          role: item.role,
          content: item.content,
          rating: item.rating,
          createdAt: item.created_at,
        }));

        setFeedbacks(nextFeedback);
      } catch {
        setFeedbacks([]);
      }
    };

    void loadFeedback();
  }, []);

  useEffect(() => {
    if (!activeTestimonial) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveTestimonial(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeTestimonial]);

  const testimonials = useMemo<TestimonialCard[]>(() => {
    if (feedbacks.length === 0) return fallbackTestimonials;

    return feedbacks.map((item) => {
      const meta = splitRoleAndCompany(item.role);

      return {
        id: item.id,
        name: item.name,
        role: meta.role,
        company: meta.company,
        quote: item.content,
        rating: item.rating,
        initials: getInitials(item.name),
      };
    });
  }, [feedbacks]);

  const marqueeTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials]
  );

  return (
    <>
      <section id="testimonials" className="section-wash py-18 md:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="theme-badge">Testimonials</div>
            <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Trusted by growing businesses
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Real feedback from clients, shown in a smooth slow carousel so every review gets seen.
            </p>

            <div className="mt-7 flex justify-center">
              <a
                href="/feedback"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[rgba(11,61,102,0.12)] bg-white/82 px-5 py-3.5 text-sm font-semibold text-[var(--color-corporate-blue)] shadow-[0_14px_34px_rgba(11,61,102,0.08)] transition-soft hover:-translate-y-1 hover:border-[rgba(47,178,177,0.32)] hover:shadow-[0_18px_40px_rgba(11,61,102,0.14)]"
              >
                <span>Leave Feedback</span>
                <motion.span
                  animate={{ x: [0, 3, 0], y: [0, 2, 0], scale: [1, 0.94, 1] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_12px_26px_rgba(11,61,102,0.16)]"
                >
                  <MousePointerClick className="h-4 w-4" />
                </motion.span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative mt-10 overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-white/80 px-4 py-5 shadow-[0_18px_40px_rgba(11,61,102,0.08)] backdrop-blur-sm sm:px-6"
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent" />
            <div className="animate-marquee flex w-max gap-4 sm:gap-5">
              {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                <div key={`${brand}-${index}`} className="logo-wordmark min-w-max">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="relative mt-12 overflow-hidden"
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[rgba(245,251,253,0.98)] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[rgba(245,251,253,0.98)] to-transparent sm:w-16" />

            <div className="animate-marquee-slow flex w-max gap-4 py-2 pr-4">
              {marqueeTestimonials.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.id}-${index}`}
                  whileHover={{ y: -6 }}
                  className="theme-panel group flex min-h-[255px] w-[255px] shrink-0 flex-col rounded-[24px] p-5 transition-soft hover:shadow-[0_22px_44px_rgba(11,61,102,0.14)] sm:w-[285px]"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="theme-heading mt-4 text-base italic leading-7 text-slate-900 sm:text-lg sm:leading-8">
                    &ldquo;{testimonial.quote.length > 115 ? `${testimonial.quote.slice(0, 115)}...` : testimonial.quote}&rdquo;
                  </blockquote>

                  <button
                    type="button"
                    onClick={() => setActiveTestimonial(testimonial)}
                    className="mt-4 w-fit text-sm font-semibold text-[var(--color-teal)] transition-soft hover:text-[var(--color-corporate-blue)]"
                  >
                    Show more
                  </button>

                  <div className="mt-auto flex items-center gap-3 border-t border-[rgba(11,61,102,0.08)] pt-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-xs font-bold text-white shadow-[0_12px_26px_rgba(11,61,102,0.16)]">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="theme-heading text-base font-bold text-slate-900">{testimonial.name}</div>
                      <div className="mt-1 text-xs font-medium leading-5 text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(7,18,33,0.64)] p-4 backdrop-blur-sm"
            onClick={() => setActiveTestimonial(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="theme-panel relative w-full max-w-2xl rounded-[28px] p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveTestimonial(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,61,102,0.1)] bg-white text-slate-600 transition-soft hover:border-[rgba(47,178,177,0.3)] hover:text-[var(--color-corporate-blue)]"
                aria-label="Close testimonial"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex gap-1">
                {Array.from({ length: activeTestimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="theme-heading mt-6 text-xl italic leading-9 text-slate-900 sm:text-2xl">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-[rgba(11,61,102,0.08)] pt-6">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-sm font-bold text-white shadow-[0_14px_30px_rgba(11,61,102,0.16)]">
                  {activeTestimonial.initials}
                </div>
                <div>
                  <div className="theme-heading text-lg font-bold text-slate-900">{activeTestimonial.name}</div>
                  <div className="mt-1 text-sm font-medium text-slate-500">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
