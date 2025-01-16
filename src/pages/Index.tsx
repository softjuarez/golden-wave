import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Team />
      <About />
      <Contact />
    </div>
  );
};

export default Index;