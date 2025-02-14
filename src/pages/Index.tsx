
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import We from '@/components/We'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <We />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
