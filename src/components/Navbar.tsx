
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
    <nav className="fixed w-full bg-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Runik Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('home')} className="nav-link text-black">
            Inicio
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link text-black">
            Sobre Nosotros
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link text-black">
            Contactanos
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-black p-2"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-black text-left py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-black text-left py-2"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-black text-left py-2"
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
