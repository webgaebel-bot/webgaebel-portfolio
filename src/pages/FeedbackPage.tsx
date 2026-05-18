import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageSquareQuote, Sparkles, Star } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
  });

  useEffect(() => {
    if (!isSubmitted) return;

    if (countdown <= 0) {
      window.location.href = '/';
      return;
    }

    const timer = window.setTimeout(() => {
      setCountdown((value) => value - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isSubmitted, countdown]);

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

      setIsSubmitted(true);
      setCountdown(3);
      setStatusMessage('Thank you. Your feedback has been submitted successfully.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to save feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.12),transparent_28%)]" />
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[10%] top-28 hidden h-40 w-40 rounded-[30px] border border-white/50 bg-white/30 shadow-[0_22px_48px_rgba(11,61,102,0.12)] backdrop-blur-xl lg:block"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]">
                <ArrowLeft size={16} />
                Back to Website
              </a>

              <div className="text-center">
                <div className="theme-badge">Feedback Form</div>
                <h1 className="theme-heading mt-6 text-[2.2rem] font-bold text-slate-900 sm:text-[2.7rem] md:text-[3.1rem]">
                  Share your feedback
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Your review helps improve our service quality and gives future clients a clearer picture of the experience, communication, and delivery they can expect from WebGaebel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
            >
              <div className="overflow-hidden rounded-[30px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(145deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] p-6 text-white shadow-[0_28px_60px_rgba(11,61,102,0.18)] sm:p-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                  <MessageSquareQuote className="h-7 w-7" />
                </div>
                <h2 className="theme-heading mt-6 text-2xl font-bold">Why your feedback matters</h2>
                <p className="mt-4 text-sm leading-7 text-white/84 sm:text-base">
                  Thoughtful reviews help us refine our process, strengthen communication, and keep improving the quality of delivery across websites, apps, and digital systems.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    'Share what felt smooth, valuable, or especially helpful.',
                    'Mention improvements in clarity, speed, support, or outcomes.',
                    'Highlight any part of the collaboration that stood out positively.',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm leading-7 text-white/84">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-white/12 bg-white/8 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    <Sparkles className="h-4 w-4" />
                    Review focus
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    Delivery quality, communication, design clarity, technical execution, and overall satisfaction.
                  </p>
                </div>
              </div>

              <div className="theme-panel rounded-[30px] p-6 sm:p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(73,197,211,0.14)] text-[var(--color-teal)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h2 className="theme-heading mt-6 text-3xl font-bold text-slate-900">
                      Feedback submitted
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{statusMessage}</p>
                    <p className="mt-3 text-sm font-medium text-[var(--color-corporate-blue)]">
                      Redirecting to the website in {countdown} second{countdown === 1 ? '' : 's'}...
                    </p>
                    <a href="/" className="theme-button-primary mt-8">
                      Return Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
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
                        className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
                        placeholder="Founder, Company Name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Rating</label>
                      <div className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.78)] p-4">
                        <div className="mb-3 text-sm leading-6 text-slate-600">Choose the rating that best matches your overall experience.</div>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFormData({ ...formData, rating: star })}
                              className="transition-soft hover:-translate-y-0.5"
                              aria-label={`Give ${star} star rating`}
                            >
                              <Star
                                size={28}
                                className={star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Feedback</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="w-full resize-none rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[rgba(73,197,211,0.18)]"
                        placeholder="Share your experience with WEBGAEBEL..."
                      />
                    </div>

                    {statusMessage && (
                      <p className="text-sm font-medium text-[var(--color-corporate-blue)]">{statusMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !isSupabaseConfigured}
                      className="theme-button-primary disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : isSupabaseConfigured ? 'Submit Feedback' : 'Feedback Unavailable'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
