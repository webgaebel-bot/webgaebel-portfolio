import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

type HomePageProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
  onNavigateToContact: () => void;
};

export default function HomePage({
  onNavigateToServices,
  onOpenService,
  onNavigateToContact,
}: HomePageProps) {
  return (
    <>
      <Hero onNavigateToServices={onNavigateToServices} onNavigateToContact={onNavigateToContact} />
      <TechStack />
      <Services onNavigateToServices={onNavigateToServices} onOpenService={onOpenService} />
      <Testimonials />
      <FAQ onNavigateToContact={onNavigateToContact} />
    </>
  );
}
