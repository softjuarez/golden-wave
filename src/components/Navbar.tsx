import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-black py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary font-bold text-2xl">
          RUNIK
          <span className="text-white">LOGO</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Inicio
          </button>
          <button onClick={() => scrollToSection('team')} className="nav-link">
            Nuestro Equipo
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            Sobre Nosotros
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contactanos
          </button>
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;