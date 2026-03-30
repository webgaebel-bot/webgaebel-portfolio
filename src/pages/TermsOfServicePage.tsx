import LegalPage from './LegalPage';

const sections = [
  {
    heading: 'Introduction',
    body: 'These Terms and Conditions outline the general rules, responsibilities, and limitations related to using the WEBGAEBEL website and engaging with our digital services.',
  },
  {
    heading: 'Use of Website',
    body: 'By using this website, you agree to access the content lawfully and respectfully. You must not misuse, disrupt, copy, or exploit the website in a way that harms the platform or brand.',
  },
  {
    heading: 'Service Scope',
    body: 'Project scope, pricing, revisions, delivery timelines, and custom requirements are discussed separately with each client and may vary depending on the work agreed in writing.',
  },
  {
    heading: 'Intellectual Property',
    body: 'Website branding, visuals, structure, copy, and original material on this site remain the property of WEBGAEBEL unless a separate written agreement states otherwise for a client deliverable.',
  },
  {
    heading: 'Third-Party Tools and Links',
    body: 'Our website may reference or integrate third-party services such as analytics, maps, payment tools, or communication platforms. Their terms and privacy practices remain subject to their own policies.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'While we aim to keep the website accurate and accessible, WEBGAEBEL does not guarantee uninterrupted service, complete accuracy, or freedom from temporary technical errors at all times.',
  },
  {
    heading: 'Updates to Terms',
    body: 'We may revise these Terms and Conditions from time to time. Continued use of the website after changes are published means the updated terms will apply moving forward.',
  },
  {
    heading: 'Contact',
    body: 'If you have questions regarding these terms or would like clarification before starting a project, contact WEBGAEBEL at webgaebel@gmail.com.',
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The legal pages now use the same clean accordion treatment so the information is easier to scan, expand, and understand without looking outdated."
      sections={sections}
    />
  );
}
