import { ArrowRight, CalendarDays, CheckCircle2, ExternalLink, GraduationCap, Users, Clock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROGRAM_REGISTRATION_URL, programs } from '../data/programs';

type ProgramsPageProps = {
  onOpenProgram: (slug: string) => void;
};

export default function ProgramsPage({ onOpenProgram }: ProgramsPageProps) {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-conic from-teal-400/5 via-cyan-400/5 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100/80 to-teal-100/80 px-4 py-2 backdrop-blur-sm border border-white/50 shadow-sm mb-6">
              <GraduationCap className="h-4 w-4 text-cyan-700" />
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">Gaebel Talent Hub</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-cyan-800 to-teal-800 bg-clip-text text-transparent mb-6">
              Accelerate Your Career
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join our comprehensive training programs designed to build in-demand technical and professional skills for the modern workforce.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a 
                href={PROGRAM_REGISTRATION_URL} 
                target="_blank" 
                rel="noreferrer noopener" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-2xl font-semibold shadow-lg shadow-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply Online Now
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Active Programs', value: '6+', icon: BookOpen },
              { label: 'Expert Instructors', value: '5+', icon: Users },
              { label: 'Duration Range', value: '2-5 Months', icon: Clock },
              { label: 'Happy Students', value: '500+', icon: CheckCircle2 },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-sm hover:shadow-md transition-all"
              >
                <stat.icon className="h-8 w-8 mx-auto text-cyan-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Programs Grid - Fixed Image Display */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <motion.article
                key={program.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Card Image - Fixed positioning and sizing */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100">
                  <img 
                    src={program.cardImage} 
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-contain bg-slate-100 p-4 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/400x225/cyan-100/cyan-700?text=Program+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-xl text-xs font-bold text-cyan-700 shadow-sm">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-xl text-xs font-bold text-teal-700 shadow-sm">
                      {program.schedule.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-cyan-700" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-slate-900 line-clamp-2 leading-tight">
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {program.summary}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Users className="h-3 w-3" />
                      <span className="font-medium">Target Audience</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {program.audience}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {program.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500 mt-0.5" />
                        <span className="text-xs text-slate-600 line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-auto pt-2">
                    <button
                      onClick={() => onOpenProgram(program.slug)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-200 transition-all hover:-translate-y-0.5"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={PROGRAM_REGISTRATION_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border-2 border-cyan-200 text-cyan-700 font-semibold text-sm hover:bg-cyan-50 hover:border-cyan-300 transition-all"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}