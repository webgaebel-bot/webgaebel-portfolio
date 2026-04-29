import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
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
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.12),transparent_28%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <a href="/" className="theme-button-secondary mx-auto gap-2 !px-4 !py-3 text-sm sm:!px-5">
                <ArrowLeft size={16} />
                Back to Website
              </a>

              <div className="theme-badge mt-8">Feedback Form</div>
              <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                Share your feedback
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Your review helps us improve the experience and show future clients what it is like to work with WebGaebel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="theme-panel mt-12 rounded-[30px] p-6 sm:p-8 md:p-10"
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
