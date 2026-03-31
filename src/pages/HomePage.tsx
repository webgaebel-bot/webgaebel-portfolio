import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

type HomePageProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
};

export default function HomePage({
  onNavigateToServices,
  onOpenService,
  onNavigateToProjects,
  onNavigateToContact,
}: HomePageProps) {
  return (
    <>
      <Hero onNavigateToProjects={onNavigateToProjects} onNavigateToContact={onNavigateToContact} />
      <TechStack />
      <Services onNavigateToServices={onNavigateToServices} onOpenService={onOpenService} />
      <WhyChooseUs onNavigateToContact={onNavigateToContact} />
      <Testimonials />
      <FAQ onNavigateToContact={onNavigateToContact} />
    </>
  );
}
