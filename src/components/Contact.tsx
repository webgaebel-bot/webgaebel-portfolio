import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPinned, MessageSquare, Phone, Send } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import XLogo from './icons/XLogo';

const serviceOptions = [
  'Web Development',
  'Custom Software',
  'Mobile Apps',
  'AI Solutions',
  'UI/UX Design',
  'E-Commerce',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    if (!supabase) {
      setStatusMessage('Contact form is temporarily unavailable because Supabase is not configured.');
      setIsSubmitting(false);
      return;
    }

    try {
      const selectedServices = formData.services.length > 0
        ? `Selected services: ${formData.services.join(', ')}\n\n`
        : '';

      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        message: `${selectedServices}${formData.message.trim()}`,
      });

      if (error) throw error;

      setFormData({
        name: '',
        email: '',
        phone: '',
        services: [],
        message: '',
      });
      setStatusMessage('Your inquiry has been submitted successfully. Our team will contact you shortly.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to submit your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  return (
    <section id="contact" className="section-wash py-12 md:py-18" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="theme-badge">Let&apos;s Talk</span>
          <h2 className="theme-heading mt-5 text-[2rem] font-bold text-slate-900 sm:text-[2.35rem] md:text-[2.8rem]">
            Plan the next step with clarity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Turn your ideas into a clear, action-ready roadmap we can execute with confidence.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="theme-panel h-full p-5 sm:p-6"
          >
              <h3 className="theme-heading mb-5 text-xl font-bold text-slate-900 sm:text-2xl">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="flex h-full flex-col space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="+1 740 252 2078"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Services
                </label>
                <p className="mb-3 text-sm leading-6 text-slate-600">
                  Select the services that best match your project requirements so we can tailor the solution accordingly.
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {serviceOptions.map((service) => {
                    const isSelected = formData.services.includes(service);

                    return (
                      <label
                        key={service}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-soft ${
                          isSelected
                            ? 'border-[var(--color-teal)] bg-[rgba(73,197,211,0.1)] text-[var(--color-corporate-blue)]'
                            : 'border-[rgba(11,61,102,0.12)] bg-white text-slate-700 hover:border-[var(--color-cyan)]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleServiceToggle(service)}
                          className="h-4 w-4 rounded border-[rgba(11,61,102,0.18)] text-[var(--color-teal)] focus:ring-[var(--color-cyan)]"
                        />
                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" disabled={!isSupabaseConfigured} className="theme-button-primary w-full gap-2 disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? 'Sending...' : isSupabaseConfigured ? 'Send Message' : 'Messaging Unavailable'}
                <Send size={18} />
              </button>
              {statusMessage && <p className="text-sm font-medium text-[var(--color-corporate-blue)]">{statusMessage}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="theme-panel h-full p-5 sm:p-8">
              <h3 className="theme-heading mb-6 text-xl font-bold text-slate-900 sm:text-2xl">Contact Information</h3>
              <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
                Reach out with your project scope, current challenges, or launch timeline and we will help shape the right direction, delivery plan, and technical path.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(11,61,102,0.08)]">
                    <Mail className="h-6 w-6 text-[var(--color-corporate-blue)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">Email Us</div>
                    <a href="mailto:contact@webgaebel.com" className="text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]">
                      contact@webgaebel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,178,177,0.14)]">
                    <Phone className="h-6 w-6 text-[var(--color-teal)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">Call Us</div>
                    <a href="tel:+17402522078" className="text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]">
                      +1 740 252 2078
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)]">
                    <MessageSquare className="h-6 w-6 text-[var(--color-cyan)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">WhatsApp</div>
                    <p className="mb-2 text-sm text-slate-600">Get a quick reply for project discussion and quotations.</p>
                    <a
                      href="https://wa.me/17402522078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-5 py-3 text-sm font-semibold text-white transition-soft hover:bg-[var(--color-corporate-blue)]"
                    >
                      <MessageSquare size={18} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)]">
                    <MapPinned className="h-6 w-6 text-[var(--color-cyan)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">Service Area</div>
                    <p className="text-sm leading-7 text-slate-600">
                      Serving clients across the United States and international markets for
                      websites, applications, and digital systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(11,61,102,0.08)]">
                    <Linkedin className="h-6 w-6 text-[var(--color-corporate-blue)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">Social Profiles</div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.instagram.com/webgaebel?igsh=MTAxMjl4b3B3aWEwdg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.12)] px-4 py-2 text-sm font-medium text-slate-700 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61576470094663&mibextid=ZbWKw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.12)] px-4 py-2 text-sm font-medium text-slate-700 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
                      >
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </a>
                      <a
                        href="https://www.linkedin.com/company/112655199/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.12)] px-4 py-2 text-sm font-medium text-slate-700 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href="https://x.com/WebGaebel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.12)] px-4 py-2 text-sm font-medium text-slate-700 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
                      >
                        <XLogo className="h-4 w-4" />
                        X
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.92)] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Response</div>
                    <div className="mt-2 font-semibold text-slate-900">Fast follow-up</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Quick replies for consultations, estimates, and project fit discussions.</p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.92)] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Project Fit</div>
                    <div className="mt-2 font-semibold text-slate-900">Business-focused scope</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Websites, internal tools, apps, automation systems, and product improvement work.</p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.92)] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Availability</div>
                    <div className="mt-2 font-semibold text-slate-900">Flexible engagement</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">From focused landing pages to full product builds and ongoing support retainers.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-[24px] border border-[rgba(11,61,102,0.12)] bg-white shadow-[var(--shadow-card)] lg:col-span-2 sm:rounded-[28px]"
          >
            <div className="bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] px-5 py-5 text-white sm:px-6">
              <h3 className="theme-heading text-xl font-bold sm:text-2xl">Find Us on the Map</h3>
              <p className="mt-2 text-sm text-white/80">
                A dedicated map view adds clearer location context for prospective clients.
              </p>
            </div>
            <div className="h-[420px] sm:h-[520px]">
              <iframe
                title="Webgaebel location map"
                src="https://www.google.com/maps?q=Columbus,+Ohio,+USA&z=10&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
