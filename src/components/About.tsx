import { useNavigate } from 'react-router-dom';

const services = [
  {
    id:"1",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg'
  },
  {
    id:"2",
    title: 'Auditoria',
    description: ' sdcn asjndc lan sdclna lsdc nlanlcdna lskdc nlka sldc a.',
    image: '/placeholder.svg'
  },
  {
    id:"3",
    title: 'Implementación',
    description: 'ajksdn ckajnsd ck aklsdcn alsc ndlan lsdcn alksd clka sldckan ls.',
    image: '/placeholder.svg'
  },
  {
    id:"4",
    title: 'Seguimiento',
    description: 'jsd canj sdcn alskdj nclaknsdc lkjna lsdcn alkslcdkan s.',
    image: '/placeholder.svg'
  },
  {
    id:"5",
    title: 'Investigación',
    description: 'jc aljskdnc ja sdkjcalksjdclasn dlcnia lsdn clkjan sdlcn',
    image: '/placeholder.svg'
  },
  {
    id:"6",
    title: 'Administracion',
    description: 'k lc laksn dckjnaskjdc las ndcjksl dcla nskjdcl sndcls',
    image: '/placeholder.svg'
  }
];

const About = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card flex gap-6 cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-colors"
              onClick={() => handleServiceClick(service.id)}
            >
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