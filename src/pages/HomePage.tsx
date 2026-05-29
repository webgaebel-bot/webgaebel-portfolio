import Hero from '../components/Hero';
import Services from '../components/Services';
import Programs from '../components/Programs';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

type HomePageProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
  onNavigateToPrograms: () => void;
  onOpenProgram: (slug: string) => void;
  onNavigateToProjects: () => void;
  onOpenProject: (slug: string) => void;
  onNavigateToContact: () => void;
};

export default function HomePage({
  onNavigateToServices,
  onOpenService,
  onNavigateToPrograms,
  onOpenProgram,
  onNavigateToProjects,
  onOpenProject,
  onNavigateToContact,
}: HomePageProps) {
  return (
    <>
      <Hero onNavigateToContact={onNavigateToContact} onNavigateToProjects={onNavigateToProjects} />
      <TechStack />
      <Services onNavigateToServices={onNavigateToServices} onOpenService={onOpenService} />
      <Programs onNavigateToPrograms={onNavigateToPrograms} onOpenProgram={onOpenProgram} />
      <WhyChooseUs />
      <SuccessStories onNavigateToProjects={onNavigateToProjects} onOpenProject={onOpenProject} />
      <Testimonials />
      <FAQ />
    </>
  );
}
