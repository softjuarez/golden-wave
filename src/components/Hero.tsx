const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Bienvenido a  <span className="text-primary">Runik</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
          Somos una agencia de servicios ......
        </p>
        <button
          onClick={scrollToContact}
          className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 animate-fade-in"
        >
          Contactanos
        </button>
      </div>
    </section>
  );
};

export default Hero;