import { useParams, Navigate, useNavigate } from 'react-router-dom';


// Importamos los servicios
const services = [
  {
    id: "1",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  },
  {
    id: "2",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  },
  {
    id: "3",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  },
  {
    id: "4",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  },
  {
    id: "5",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  },
  {
    id: "6",
    title: 'Asesoria',
    description: 'mcaskdl cma; sdmkc aklsmdc ;ams d;cm a;smd c;a.',
    image: '/placeholder.svg',
    fullDescription: 'Aquí va una descripción más detallada del servicio de asesoría...',
    benefits: [
      'Beneficio 1',
      'Beneficio 2',
      'Beneficio 3'
    ]
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);
  const navigate = useNavigate();

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const handleVolver = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/', { replace: true });
    setTimeout(() => {
      const scrollToSection = () => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      scrollToSection();
    }, 100);
  };

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-32 h-32 object-cover rounded mb-6"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">
            {service.title}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {service.fullDescription}
          </p>
          
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
            <ul className="list-disc pl-6">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-300 mb-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="bg-primary py-2 px-4 text-white rounded mb-4"
            onClick={handleVolver}
          >
            Volver a la página principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;