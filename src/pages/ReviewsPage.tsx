import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Client Reviews</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Testimonials and client feedback now have their own focused page.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Is se home page overloaded nahi lagta aur trust-building content bhi apni dedicated space me zyada effective nazar aata hai.
            </p>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
