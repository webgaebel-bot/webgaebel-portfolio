import {
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Facebook,
  Instagram,
  MessageCircle,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { PROGRAM_REGISTRATION_URL, programs } from '../data/programs';

const TALENT_HUB_INSTAGRAM = 'https://www.instagram.com/gaebeltalenthub';
const TALENT_HUB_FACEBOOK = 'https://www.facebook.com/profile.php?id=61576470094663&mibextid=ZbWKw';
const TALENT_HUB_WHATSAPP = 'https://wa.me/923700822507';
const HERO_IMAGE = encodeURI('/program-images/ChatGPT Image May 29, 2026, 12_22_57 PM.png');
const HERO_IMAGE_2 = encodeURI('/program-images/s1.jpeg');
const HERO_IMAGE_3 = encodeURI('/program-images/s2.jpeg');

type ProgramsPageProps = {
  onOpenProgram: (slug: string) => void;
};

export default function ProgramsPage({ onOpenProgram }: ProgramsPageProps) {
  const heroSlides = useMemo(
    () => [
      { src: HERO_IMAGE, title: 'Courses' },
      { src: HERO_IMAGE_2, title: 'Courses 2' },
      { src: HERO_IMAGE_3, title: 'Courses 3' },
      { src: HERO_IMAGE, title: 'Admission Guide' },
      { src: HERO_IMAGE, title: 'Talent Hub' },
    ],
    [],
  );

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const jumpToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const moveSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-conic from-teal-400/5 via-cyan-400/5 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="absolute inset-0">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={`${slide.title}-${index}`}
                  initial={false}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    scale: activeSlide === index ? 1 : 1.06,
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/86 to-white/56" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-teal-950/10" />
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-4 md:flex">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                aria-label="Previous hero slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/85 text-slate-700 shadow-lg backdrop-blur transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => moveSlide(1)}
                aria-label="Next hero slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/85 text-slate-700 shadow-lg backdrop-blur transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-4xl text-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-4 py-2 shadow-sm">
                  <GraduationCap className="h-4 w-4 text-cyan-700" />
                  <span className="text-sm font-semibold text-cyan-700">Gaebel Talent Hub</span>
                </div>

                <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Accelerate Your Career
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl">
                  Join our comprehensive training programs designed to build in-demand technical and professional skills for the modern workforce.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4">
                  <a
                    href={PROGRAM_REGISTRATION_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-300"
                  >
                    Apply Online Now
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  {/* <a
                    href={TALENT_HUB_WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-100 bg-white px-8 py-4 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    WhatsApp
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                  </a> */}
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href={TALENT_HUB_INSTAGRAM}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pink-100 bg-white text-slate-700 shadow-sm transition hover:border-pink-200 hover:text-pink-700"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </a>
                  <a
                    href={TALENT_HUB_WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="WhatsApp"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                  </a>
                  <a
                    href={TALENT_HUB_FACEBOOK}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </motion.div>

              <div className="mt-8 flex items-center justify-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => jumpToSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? 'w-8 bg-cyan-600' : 'w-2.5 bg-cyan-200 hover:bg-cyan-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 lg:grid-cols-4">
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
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-white bg-white/75 p-4 text-center shadow-sm backdrop-blur-sm transition hover:shadow-md sm:p-6"
              >
                <stat.icon className="mx-auto mb-3 h-7 w-7 text-cyan-600 sm:h-8 sm:w-8" />
                <div className="text-xl font-bold text-slate-900 sm:text-2xl">{stat.value}</div>
                <div className="text-xs text-slate-600 sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-end justify-between gap-4"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Programs</p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Course Cards</h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-500">
              Small cards, three in a row on desktop, keeping the focus on the course content.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <motion.article
                key={program.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/30"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100">
                  <img
                    src={program.cardImage}
                    alt={program.title}
                    className="absolute inset-0 h-full w-full object-contain p-2.5 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = HERO_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-bold text-cyan-700 shadow-sm backdrop-blur-sm">
                      {program.duration}
                    </span>
                    <span className="rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-bold text-teal-700 shadow-sm backdrop-blur-sm">
                      {program.schedule.split(',')[0]}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100">
                      <GraduationCap className="h-5 w-5 text-cyan-700" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight text-slate-900 line-clamp-2 sm:text-lg">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
                    {program.summary}
                  </p>

                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <Users className="h-3 w-3" />
                      <span className="font-medium">Target Audience</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {program.audience}
                    </p>
                  </div>

                  <ul className="mb-5 space-y-1.5">
                    {program.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                        <span className="text-xs text-slate-600 line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onOpenProgram(program.slug)}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-200"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12" />
        </div>
      </section>
    </main>
  );
}
