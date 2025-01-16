const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    image: '/placeholder.svg'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that users love to interact with.',
    image: '/placeholder.svg'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive growth and engagement.',
    image: '/placeholder.svg'
  },
  {
    title: 'Brand Strategy',
    description: 'Comprehensive brand development and positioning strategies.',
    image: '/placeholder.svg'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-primary">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card flex gap-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;