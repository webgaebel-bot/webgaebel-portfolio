import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, ServerCog, ShieldCheck, Smartphone, Zap } from 'lucide-react';

const trustedBrands = [
  'NorthGrid',
  'ScaleForge',
  'NovaCart',
  'BrightPath',
  'Clario Health',
  'EstateFlow',
];

const capabilities = [
  {
    title: 'Frontend Systems',
    description: 'React, Next.js, Tailwind, and conversion-focused UX patterns.',
    icon: Layers3,
  },
  {
    title: 'Backend Delivery',
    description: 'Robust APIs, database design, integrations, and automation workflows.',
    icon: ServerCog,
  },
  {
    title: 'AI Implementation',
    description: 'OpenAI-enabled products, assistants, internal tools, and workflow automation.',
    icon: BrainCircuit,
  },
  {
    title: 'Mobile Experiences',
    description: 'Cross-platform product flows built for real users and fast iteration.',
    icon: Smartphone,
  },
  {
    title: 'Performance Focus',
    description: 'Speed, reliability, and scalable architecture considered from day one.',
    icon: Zap,
  },
  {
    title: 'Secure Delivery',
    description: 'Practical auth, access control, and production-minded implementation.',
    icon: ShieldCheck,
  },
];

export default function TechStack() {
  const marqueeItems = [...trustedBrands, ...trustedBrands];

  return (
    <section id="tech-stack" className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="theme-badge">Trusted by growing businesses</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted delivery for teams that need modern execution, stronger UX, and scalable systems.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help founders and operators move from scattered tools and unclear messaging to
            cleaner products, better conversion paths, and dependable technical delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-10 overflow-hidden rounded-[30px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(180deg,rgba(244,251,253,0.96),rgba(255,255,255,0.92))] px-4 py-5 shadow-[0_18px_40px_rgba(11,61,102,0.08)] sm:px-6"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white via-white/90 to-transparent" />
          <div className="animate-marquee flex w-max gap-4 sm:gap-5">
            {marqueeItems.map((brand, index) => (
              <div key={`${brand}-${index}`} className="logo-wordmark min-w-max">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="theme-panel group p-6"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_30px_rgba(11,61,102,0.14)] transition-soft group-hover:scale-105">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="theme-heading text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
