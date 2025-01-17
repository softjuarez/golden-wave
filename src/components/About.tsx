const services = [
  {
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg'
  },
  {
    title: 'Auditoria',
    description: ' sdcn asjndc lan sdclna lsdc nlanlcdna lskdc nlka sldc a.',
    image: '/placeholder.svg'
  },
  {
    title: 'Implementación',
    description: 'ajksdn ckajnsd ck aklsdcn alsc ndlan lsdcn alksd clka sldckan ls.',
    image: '/placeholder.svg'
  },
  {
    title: 'Seguimiento',
    description: 'jsd canj sdcn alskdj nclaknsdc lkjna lsdcn alkslcdkan s.',
    image: '/placeholder.svg'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros <span className="text-primary">Servicios</span>
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