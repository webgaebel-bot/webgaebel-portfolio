import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPinned, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || 'Not provided'}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=webgaebel@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-wash py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="theme-badge">Contact Us</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Let&apos;s plan your next website, app, or automation system.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Share your goals and we will turn them into a clean roadmap, sharp interface, and
            reliable development process.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="theme-panel p-8"
          >
            <h3 className="theme-heading mb-6 text-2xl font-bold text-slate-900">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3.5 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
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
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3.5 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
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
                  className="w-full rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3.5 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="+92 300 0000000"
                />
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
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-[rgba(11,61,102,0.12)] bg-white px-4 py-3.5 outline-none transition-soft focus:border-[var(--color-teal)] focus:shadow-[0_0_0_4px_rgba(73,197,211,0.14)]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="theme-button-primary w-full gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="theme-panel p-8">
              <h3 className="theme-heading mb-6 text-2xl font-bold text-slate-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(11,61,102,0.08)]">
                    <Mail className="h-6 w-6 text-[var(--color-corporate-blue)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">Email Us</div>
                    <a href="mailto:webgaebel@gmail.com" className="text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]">
                      webgaebel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(47,178,177,0.14)]">
                    <MessageSquare className="h-6 w-6 text-[var(--color-teal)]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">WhatsApp</div>
                    <p className="mb-2 text-sm text-slate-600">Get a quick reply for project discussion and quotations.</p>
                    <a
                      href="https://wa.me/1234567890"
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
                    <div className="mb-1 font-semibold text-slate-900">Location Coverage</div>
                    <p className="text-sm leading-7 text-slate-600">
                      We work with local and international clients on websites, applications, and
                      complete digital systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.12)] bg-white shadow-[var(--shadow-card)]">
              <div className="bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] px-6 py-5 text-white">
                <h3 className="theme-heading text-2xl font-bold">Find Us on the Map</h3>
                <p className="mt-2 text-sm text-white/80">
                  Contact section me map bhi add kar diya gaya hai for a more complete company presence.
                </p>
              </div>
              <div className="h-[320px]">
                <iframe
                  title="Webgaebel location map"
                  src="https://www.google.com/maps?q=Pakistan&z=5&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
