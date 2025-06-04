import { VideoHero } from './components/VideoHero';
import BioSection from './components/BioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <VideoHero />
      <BioSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
}
