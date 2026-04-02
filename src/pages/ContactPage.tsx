import { motion } from 'framer-motion';
import Contact from '../components/Contact';

export default function ContactPage() {
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
            <span className="theme-badge">Contact WEBGAEBEL</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Contact a software development agency for web, mobile, and AI projects.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Use this page to start a project conversation, request a service page plan, or share
              your target keyword list for SEO-focused content and page structure.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We keep the intake simple. Tell us what you want to rank for, which services matter
              most, and whether you need a homepage, service page, about page, or supporting page
              refresh.
            </p>
          </motion.div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
