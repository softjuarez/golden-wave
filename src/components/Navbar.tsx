import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-primary font-bold text-2xl">
          RUNIK
          <span className="text-white">LOGO</span>
        </Link>
        
        {/* Desktop Menu */}
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
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white p-2"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4 px-6">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-left py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="nav-link text-left py-2"
            >
              Nuestro Equipo
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-left py-2"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-left py-2"
            >
              Contactanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;