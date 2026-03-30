import LegalPage from './LegalPage';

const sections = [
  {
    heading: 'Introduction',
    body: 'This Privacy Policy explains how WEBGAEBEL collects, uses, stores, and protects the information shared through our website, inquiry forms, project discussions, and communication channels.',
  },
  {
    heading: 'Personal Data We Collect',
    body: 'We may collect your name, email address, phone number, company details, project requirements, feedback, and any other information you voluntarily submit while contacting us.',
  },
  {
    heading: 'Cookie Policy',
    body: 'Our website may use standard cookies or analytics tools to understand traffic trends, improve user experience, and help us measure site performance more effectively.',
  },
  {
    heading: 'How We Use Your Data',
    body: 'We use submitted information to respond to inquiries, prepare quotations, manage communication, improve services, and provide project-related follow-up when needed.',
  },
  {
    heading: 'Retention and Deletion',
    body: 'We retain your submitted information only for as long as reasonably necessary to respond to inquiries, manage ongoing communication, or maintain relevant business records.',
  },
  {
    heading: "Children's Privacy",
    body: 'Our website and services are intended for business and professional use. We do not knowingly collect personal data from children under the age required by applicable law.',
  },
  {
    heading: 'Your Rights to Your Personal Data',
    body: 'You may request access, correction, or deletion of the information you have shared with us, subject to legal, operational, and record-keeping obligations where applicable.',
  },
  {
    heading: 'Changes',
    body: 'We may update this Privacy Policy when our website, services, or legal requirements change. The latest version on this page will apply from the date it is posted.',
  },
  {
    heading: 'Contact Us',
    body: 'For questions about this policy or your submitted data, you can contact WEBGAEBEL at webgaebel@gmail.com and we will guide you through the next steps.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Privacy and Terms pages have been redesigned in a clean expandable layout so they feel more formal, readable, and visually aligned with the rest of the website."
      sections={sections}
    />
  );
}
