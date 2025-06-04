import { VideoHero } from './components/VideoHero/VideoHero';
import BioSection from './components/BioSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(4,120,87,0.2),rgba(0,0,0,0))]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(4,120,87,0.1),rgba(0,0,0,0))]' />
      <VideoHero />
      <BioSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
