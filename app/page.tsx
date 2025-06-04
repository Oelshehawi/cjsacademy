import HeroSection from './components/HeroSection';
import BioSection from './components/BioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <BioSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
}
