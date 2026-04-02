import { motion } from 'framer-motion';
import { ArrowRight, Code2, LayoutGrid, Sparkles, Workflow } from 'lucide-react';

type AboutPageProps = {
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
};

const principles = [
  {
    icon: Code2,
    title: 'Clear architecture',
    text: 'We plan pages, features, and integrations around a structure that is easy to maintain and scale.',
  },
  {
    icon: LayoutGrid,
    title: 'Keyword-first page planning',
    text: 'Each page is assigned a primary keyword, then supported by related terms that match search intent.',
  },
  {
    icon: Workflow,
    title: 'Practical delivery flow',
    text: 'We keep the process simple: define the offer, shape the content, refine the layout, and launch cleanly.',
  },
  {
    icon: Sparkles,
    title: 'Structured execution',
    text: 'We keep delivery focused, organized, and practical so every page supports the wider site goal.',
  },
];

const teamMembers = [
  {
    name: 'Hunain Haider',
    role: 'Full-Stack Developer',
    image: '/team/hunain-haider.png',
    bio:
      'Full-stack engineer focused on .NET, MERN, AI integrations, and scalable backend systems. Hunain leads delivery with a strong focus on practical architecture and long-term maintainability.',
  },
  {
    name: 'Taqi Mehdi',
    role: 'Digital Marketing & E-Commerce Specialist',
    image: '/team/taqi-mehdi.jpeg',
    bio:
      'Digital marketing and Shopify specialist focused on online stores, campaign execution, client acquisition, and lead generation. Taqi helps brands improve visibility and turn traffic into sales.',
  },
  {
    name: 'Ali Ashad',
    role: 'Digital Growth & Shopify Specialist',
    image: '/team/Ali-ashad.jpeg',
    bio:
      'Digital growth and Shopify specialist supporting store operations, client hunting, and lead generation. Ali focuses on practical execution that helps brands scale with consistency.',
  },
  {
    name: 'Wasif',
    role: 'Data Analyst',
    image: '/team/wasif.png',
    bio:
      'Data analyst focused on reporting, pattern finding, and insight generation. Wasif helps the team make clearer decisions from performance data and campaign results.',
  },
];

export default function AboutPage({ onNavigateToServices, onNavigateToContact }: AboutPageProps) {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">About WEBGAEBEL</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Software and AI development agency built by specialists who keep delivery practical.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              WEBGAEBEL helps businesses build better websites, stronger service pages, mobile apps, and
              AI-enabled systems with a focus on SEO structure, usability, and long-term maintainability.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={onNavigateToServices} className="theme-button-secondary gap-2">
                View Services
                <ArrowRight size={16} />
              </button>
              <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                Contact Us
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="theme-panel p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-teal),var(--color-cyan))] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="theme-heading text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="theme-badge">Team Intro</span>
              <h2 className="theme-heading mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Meet the team behind WebGaebel
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A small, focused team covering engineering, digital marketing, Shopify, and data.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="overflow-hidden rounded-[22px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[0_12px_24px_rgba(11,61,102,0.08)]"
                >
                  <div className="relative aspect-[1/1.08] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                      {member.role}
                    </p>
                    <h3 className="theme-heading mt-2 text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{member.bio}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
