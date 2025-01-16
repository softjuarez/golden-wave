const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-primary">Our Agency</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
          We create amazing digital experiences that inspire and transform businesses
        </p>
        <button
          onClick={scrollToContact}
          className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 animate-fade-in"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;