import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, ExternalLink, GraduationCap, Users, Clock, Award, Target, BookOpen, Sparkles, ChevronRight, Star, Briefcase, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PROGRAM_REGISTRATION_URL, type ProgramItem } from '../data/programs';

type ProgramDetailPageProps = {
  program: ProgramItem;
  onBackToPrograms: () => void;
};

export default function ProgramDetailPage({ program, onBackToPrograms }: ProgramDetailPageProps) {
  const [navbarHeight, setNavbarHeight] = useState(80);
  
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      {/* Hero Section with increased top padding */}
      <section className="relative" style={{ paddingTop: `${navbarHeight + 40}px` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button - Now with more spacing */}
          <div className="mb-8">
            <button 
              onClick={onBackToPrograms} 
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-md rounded-full text-slate-700 hover:bg-slate-50 transition-all duration-300 border border-slate-200"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Programs</span>
            </button>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full mb-6">
                <GraduationCap className="h-4 w-4 text-cyan-700" />
                <span className="text-sm font-medium text-cyan-700">Gaebel Talent Hub</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {program.title}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {program.summary}
              </p>

              {/* Quick Info Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-100">
                  <Clock className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm text-slate-700 font-medium">{program.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-100">
                  <Users className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm text-slate-700 font-medium">{program.schedule}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-100">
                  <Award className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm text-slate-700 font-medium">Certificate Included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={PROGRAM_REGISTRATION_URL} 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-200 transition-all hover:-translate-y-0.5"
                >
                  Register Now
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button 
                  onClick={onBackToPrograms} 
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                >
                  View All Programs
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div>
              <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-white" />
                  <h3 className="text-white font-bold text-2xl">Program Highlights</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <Zap className="h-5 w-5" />
                    <span className="text-base">Industry-recognized certification</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Zap className="h-5 w-5" />
                    <span className="text-base">Hands-on projects & assignments</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Zap className="h-5 w-5" />
                    <span className="text-base">Live interactive sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Zap className="h-5 w-5" />
                    <span className="text-base">Career support & guidance</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">Limited Seats</div>
                    <p className="text-white/80 text-base mt-2">Enroll now to secure your spot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Registration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 mb-12 shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Limited Seats Available!</h3>
                <p className="text-white/80 text-sm">Secure your spot in the upcoming batch</p>
              </div>
            </div>
            <a 
              href={PROGRAM_REGISTRATION_URL} 
              target="_blank" 
              rel="noreferrer noopener" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap"
            >
              Register Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-cyan-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Program Highlights</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Who It's For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-cyan-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Who Is This Program For?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{program.audience}</p>
            </motion.div>

            {/* Modules Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-cyan-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Curriculum Modules</h2>
              </div>
              <div className="space-y-4">
                {program.modules.map((module, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">{module.title}</h3>
                        <ChevronRight className="h-5 w-5 text-cyan-600" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 text-sm mb-3">{module.detail}</p>
                      <div className="flex flex-wrap gap-2">
                        {module.highlights.map((highlight, hidx) => (
                          <span key={hidx} className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Instructor Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl sticky top-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-cyan-300 text-sm font-semibold">Lead Instructor</p>
                  <h3 className="text-xl font-bold">{program.instructor}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                  <span className="text-sm">Program Duration</span>
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                  <span className="text-sm">Weekly Schedule</span>
                  <span className="font-semibold">{program.schedule}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                  <span className="text-sm">Certification</span>
                  <span className="font-semibold">Yes</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold">What You'll Get</span>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">✓ Live interactive sessions</li>
                  <li className="flex items-center gap-2">✓ Hands-on projects</li>
                  <li className="flex items-center gap-2">✓ Industry-recognized certificate</li>
                  <li className="flex items-center gap-2">✓ Lifetime access to materials</li>
                </ul>
              </div>

              <a
                href={PROGRAM_REGISTRATION_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Enroll Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays className="h-5 w-5 text-cyan-600" />
                <h3 className="font-bold text-slate-900">Registration Info</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Registration is done through Google Forms. Click the button below to secure your spot.
              </p>
              <a
                href={PROGRAM_REGISTRATION_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-cyan-200 text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-all"
              >
                Registration Form
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Need Help Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <h3 className="font-bold text-slate-900 text-lg mb-3">Need Help?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Have questions about the program? Contact our admissions team.
              </p>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all">
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join {program.title.split(' ').slice(0, 3).join(' ')} and transform your career with industry-ready skills
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={PROGRAM_REGISTRATION_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Enroll Now
                <ExternalLink className="h-5 w-5" />
              </a>
              <button
                onClick={onBackToPrograms}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/20 transition-all"
              >
                Explore Other Programs
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}