import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

type FeedbackEntry = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  createdAt: string;
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
  });

  const loadFeedback = async () => {
    if (!supabase) {
      setFeedbacks([]);
      setStatusMessage('Testimonials are temporarily unavailable because Supabase is not configured.');
      return;
    }

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
      setCurrentIndex(0);
      setStatusMessage('');
    } catch {
      setFeedbacks([]);
      setStatusMessage('Testimonials are temporarily unavailable. Please try again shortly.');
    }
  };

  useEffect(() => {
    void loadFeedback();
  }, []);

  const testimonials = useMemo(() => feedbacks, [feedbacks]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, testimonials.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    if (!supabase) {
      setStatusMessage('Feedback submission is temporarily unavailable because Supabase is not configured.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from('feedback').insert({
        name: formData.name.trim(),
        role: formData.role.trim(),
        content: formData.content.trim(),
        rating: formData.rating,
      });

      if (error) throw error;

      setFormData({
        name: '',
        role: '',
        content: '',
        rating: 5,
      });
      setStatusMessage('Your feedback has been saved successfully.');
      await loadFeedback();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to save feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="section-wash py-18 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="theme-badge">Testimonials</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Real feedback from businesses we&apos;ve helped grow
          </p>
        </motion.div>

        {testimonials.length > 0 && (
          <div className="mx-auto max-w-5xl">
            <div className="theme-panel relative overflow-hidden p-6 sm:p-8 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(73,197,211,0.75),transparent)]" />
              <div className="absolute left-5 top-5 text-[var(--color-cyan)]/10 sm:left-8 sm:top-8">
                <Quote size={56} className="sm:h-16 sm:w-16" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45 }}
                  className="relative z-10"
                >
                  <div className="mb-5 flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mx-auto mb-7 max-w-3xl text-center text-base leading-8 text-slate-700 sm:text-xl sm:leading-9">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                  <div className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.9)] px-5 py-4 text-center sm:mx-auto sm:max-w-md">
                    <div className="theme-heading text-lg font-bold text-slate-900 sm:text-xl">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="mt-1 text-sm font-medium text-[var(--color-teal)]">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={prevTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,61,102,0.1)] bg-white text-slate-700 transition-all duration-300 hover:scale-105 hover:border-[var(--color-teal)] hover:bg-[var(--color-corporate-blue)] hover:text-white sm:h-11 sm:w-11"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-8 bg-[var(--color-corporate-blue)]' : 'w-2 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,61,102,0.1)] bg-white text-slate-700 transition-all duration-300 hover:scale-105 hover:border-[var(--color-teal)] hover:bg-[var(--color-corporate-blue)] hover:text-white sm:h-11 sm:w-11"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="theme-panel rounded-[28px] p-6 sm:p-8"
          >
            <h3 className="theme-heading mb-2 text-2xl font-bold text-slate-900">Leave Your Feedback</h3>
            <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
              Your feedback will be stored in the database and reviewed by our team.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-all focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
                  placeholder="Client name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Role / Company</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-all focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
                  placeholder="Founder, Company Name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition-transform hover:scale-105"
                    >
                      <Star
                        size={26}
                        className={star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Feedback</label>
                <textarea
                  required
                  rows={5}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-all focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
                  placeholder="Share your experience with WEBGAEBEL..."
                />
              </div>
              {statusMessage && <p className="text-sm font-medium text-[var(--color-corporate-blue)]">{statusMessage}</p>}
              <button
                type="submit"
                disabled={isSubmitting || !isSupabaseConfigured}
                className="theme-button-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Saving...' : isSupabaseConfigured ? 'Save Feedback' : 'Feedback Unavailable'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
