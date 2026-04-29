import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ScaleCTA from '../components/ScaleCTA';

type HomePageProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
  onNavigateToProjects: () => void;
  onOpenProject: (slug: string) => void;
  onNavigateToContact: () => void;
};

export default function HomePage({
  onNavigateToServices,
  onOpenService,
  onNavigateToProjects,
  onOpenProject,
  onNavigateToContact,
}: HomePageProps) {
  return (
    <>
      <Hero onNavigateToContact={onNavigateToContact} onNavigateToProjects={onNavigateToProjects} />
      <TechStack />
      <Services onNavigateToServices={onNavigateToServices} onOpenService={onOpenService} />
      <WhyChooseUs />
      <SuccessStories onNavigateToProjects={onNavigateToProjects} onOpenProject={onOpenProject} />
      <Testimonials />
      <FAQ />
      <ScaleCTA onNavigateToContact={onNavigateToContact} />
    </>
  );
}
