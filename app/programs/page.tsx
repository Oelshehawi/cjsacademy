import {
  HeroSection,
  FeaturedProgramSection,
  ProgramsSection,
  ServicesSection,
  TechnologySection,
  JourneySection,
  CTASection,
} from './components';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProgramSection />
      <ProgramsSection />
      <ServicesSection />
      <TechnologySection />
      <JourneySection />
      <CTASection />
    </main>
  );
}
