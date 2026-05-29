import { ArrowRight, CalendarDays, CheckCircle2, GraduationCap, Users, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { programs } from '../data/programs';

type ProgramsProps = {
  onNavigateToPrograms: () => void;
  onOpenProgram: (slug: string) => void;
};

export default function Programs({ onNavigateToPrograms, onOpenProgram }: ProgramsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-90px' });
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-slate-50 via-white to-cyan-50/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100/80 to-teal-100/80 px-4 py-2 backdrop-blur-sm mb-5">
            <Sparkles className="h-4 w-4 text-cyan-700" />
            <span className="text-sm font-semibold text-cyan-700">Featured Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-cyan-800 bg-clip-text text-transparent mb-5">
            Gaebel Talent Hub
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Career-focused programs for development, marketing, e-commerce, freelancing, and creative media.
            Transform your career with industry-ready skills.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredPrograms.map((program, index) => (
            <motion.article
              key={program.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Card Image - Fixed with proper sizing */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100">
                <img 
                  src={program.cardImage} 
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x225/cyan-100/cyan-700?text=Program+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badges moved to bottom for better visibility */}
                <div className="absolute bottom-3 left-3 flex gap-2 z-10">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold text-cyan-700 shadow-sm">
                    {program.duration}
                  </span>
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold text-teal-700 shadow-sm">
                    {program.schedule.split(',')[0]}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                  {program.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
                  {program.summary}
                </p>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {program.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-500 mt-0.5" />
                      <span className="text-xs text-slate-600 line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenProgram(program.slug)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-200 transition-all hover:-translate-y-0.5 group"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-cyan-200 shadow-sm">
            <CalendarDays className="h-4 w-4 text-cyan-600" />
            <span className="text-sm text-slate-600">Limited spots available for upcoming batch</span>
          </div>
          <button 
            onClick={onNavigateToPrograms} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-600 transition-all"
          >
            View All Programs
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}