const teamMembers = [
  {
    name: 'John Doe',
    role: 'Director Creativo',
    image: '/placeholder.svg',
    description: '10+ años de experiencia.',
    contact: 'john@example.com'
  },
  {
    name: 'Jane Smith',
    role: 'Lider de Operaciones',
    image: '/placeholder.svg',
    description: 'Experto en........',
    contact: 'jane@example.com'
  },
  {
    name: 'Mike Johnson',
    role: 'Asesor 1',
    image: '/placeholder.svg',
    description: 'Se involucra en .....',
    contact: 'mike@example.com'
  },
  {
    name: 'Sarah Williams',
    role: 'Asesor 2',
    image: '/placeholder.svg',
    description: 'Soporte en ......',
    contact: 'sarah@example.com'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestro <span className="text-primary">Equipo</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="profile-card">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.description}</p>
              <p className="text-sm text-primary">{member.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;