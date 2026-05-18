import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Client Reviews</span>
            <h1 className="theme-heading mt-6 text-[2.2rem] font-bold text-slate-900 sm:text-[2.7rem] md:text-[3.1rem]">
              Testimonials and client feedback now have their own focused page.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This keeps the home page cleaner while giving trust-building content its own dedicated space.
            </p>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
