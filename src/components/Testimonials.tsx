import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

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
    <section id="testimonials" className="bg-gray-50 py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Testimonials</span>
          <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Real feedback from businesses we&apos;ve helped grow</p>
        </motion.div>

        {testimonials.length > 0 && (
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 md:p-12">
              <div className="absolute left-5 top-5 text-blue-600/10 sm:left-8 sm:top-8"><Quote size={64} className="sm:h-20 sm:w-20" /></div>
              <AnimatePresence mode="wait">
                <motion.div key={testimonials[currentIndex].id} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="relative z-10">
                  <div className="mb-6 flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-8 text-center text-lg leading-relaxed text-gray-700 italic sm:text-xl md:text-2xl">"{testimonials[currentIndex].content}"</p>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                    <div className="font-medium text-blue-600">{testimonials[currentIndex].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button onClick={prevTestimonial} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"><ChevronLeft size={22} /></button>
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button key={item.id} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`} />
                  ))}
                </div>
                <button onClick={nextTestimonial} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"><ChevronRight size={22} /></button>
              </div>
            </div>
          </div>
        )}

        {feedbacks.length > 0 && (
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Latest Client Feedback</h3>
              <p className="mt-2 text-gray-600">Client feedback is loaded directly from the database to keep testimonials current and reliable.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedbacks.map((item) => (
                <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
                  <div className="mb-4 flex gap-1">{[...Array(item.rating)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}</div>
                  <p className="mb-5 line-clamp-5 text-sm leading-7 text-gray-600">{item.content}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-blue-600">{item.role}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Leave Your Feedback</h3>
            <p className="mb-6 text-gray-600">Your feedback will be stored in the database and reviewed by our team.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label className="mb-2 block text-sm font-medium text-gray-700">Your Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" placeholder="Client name" /></div>
              <div><label className="mb-2 block text-sm font-medium text-gray-700">Role / Company</label><input type="text" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" placeholder="Founder, Company Name" /></div>
              <div><label className="mb-2 block text-sm font-medium text-gray-700">Rating</label><div className="flex gap-2">{[1, 2, 3, 4, 5].map((star) => (<button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })} className="transition-transform hover:scale-110"><Star size={28} className={star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} /></button>))}</div></div>
              <div><label className="mb-2 block text-sm font-medium text-gray-700">Feedback</label><textarea required rows={5} value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" placeholder="Share your experience with WEBGAEBEL..." /></div>
              {statusMessage && <p className="text-sm font-medium text-blue-600">{statusMessage}</p>}
              <button type="submit" disabled={isSubmitting} className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Saving...' : 'Save Feedback'}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
