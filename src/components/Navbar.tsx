
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo className="text-studyjob-charcoal" />
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-studyjob-charcoal p-2 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`menu-link ${isActive('/') ? 'active' : ''}`}
          >
            Accueil
          </Link>
          
          <div className="relative submenu-trigger group">
            <Link 
              to="/entreprises" 
              className={`menu-link flex items-center ${isActive('/entreprises') ? 'active' : ''}`}
            >
              Devenir partenaire
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <div className="submenu-dropdown p-4">
              <Link to="/entreprises/pourquoi" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Pourquoi StudyJob ?
              </Link>
              <Link to="/entreprises/fonctionnement" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Comment ça fonctionne
              </Link>
              <Link to="/entreprises/tarifs" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Tarifs
              </Link>
            </div>
          </div>
          
          <div className="relative submenu-trigger group">
            <Link 
              to="/services" 
              className={`menu-link flex items-center ${isActive('/services') ? 'active' : ''}`}
            >
              Les services
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <div className="submenu-dropdown p-4 grid grid-cols-1 gap-2">
              <Link to="/services/ponctuels" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Les services ponctuels
              </Link>
              <Link to="/services/temporaires" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Les services temporaires
              </Link>
              <Link to="/services/specifiques" className="block px-4 py-2 hover:bg-studyjob-beige rounded-md">
                Les services spécifiques
              </Link>
            </div>
          </div>
          
          <Link 
            to="/a-propos" 
            className={`menu-link ${isActive('/a-propos') ? 'active' : ''}`}
          >
            À propos de nous
          </Link>
          
          <Link 
            to="/contact" 
            className={`menu-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/espace-entreprise" className="btn btn-primary">
              Espace entreprise
            </Link>
            <Link to="/espace-etudiants" className="btn btn-secondary">
              Espace Étudiants
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <Logo className="text-studyjob-charcoal" />
            <button
              onClick={toggleMenu}
              className="text-studyjob-charcoal p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`text-xl font-medium ${isActive('/') ? 'text-studyjob-turquoise' : 'text-studyjob-charcoal'}`}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Link 
                  to="/entreprises" 
                  className={`text-xl font-medium ${isActive('/entreprises') ? 'text-studyjob-turquoise' : 'text-studyjob-charcoal'}`}
                  onClick={toggleMenu}
                >
                  Devenir partenaire
                </Link>
                <ChevronRight className="w-5 h-5" />
              </div>
              <div className="pl-4 space-y-3 border-l-2 border-studyjob-beige">
                <Link 
                  to="/entreprises/pourquoi" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Pourquoi StudyJob ?
                </Link>
                <Link 
                  to="/entreprises/fonctionnement" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Comment ça fonctionne
                </Link>
                <Link 
                  to="/entreprises/tarifs" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Tarifs
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Link 
                  to="/services" 
                  className={`text-xl font-medium ${isActive('/services') ? 'text-studyjob-turquoise' : 'text-studyjob-charcoal'}`}
                  onClick={toggleMenu}
                >
                  Les services
                </Link>
                <ChevronRight className="w-5 h-5" />
              </div>
              <div className="pl-4 space-y-3 border-l-2 border-studyjob-beige">
                <Link 
                  to="/services/ponctuels" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Les services ponctuels
                </Link>
                <Link 
                  to="/services/temporaires" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Les services temporaires
                </Link>
                <Link 
                  to="/services/specifiques" 
                  className="block text-studyjob-charcoal"
                  onClick={toggleMenu}
                >
                  Les services spécifiques
                </Link>
              </div>
            </div>
            
            <Link 
              to="/a-propos" 
              className={`text-xl font-medium ${isActive('/a-propos') ? 'text-studyjob-turquoise' : 'text-studyjob-charcoal'}`}
              onClick={toggleMenu}
            >
              À propos de nous
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-xl font-medium ${isActive('/contact') ? 'text-studyjob-turquoise' : 'text-studyjob-charcoal'}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <div className="flex flex-col space-y-4 mt-6">
              <Link to="/espace-entreprise" className="btn btn-primary" onClick={toggleMenu}>
                Espace entreprise
              </Link>
              <Link to="/espace-etudiants" className="btn btn-secondary" onClick={toggleMenu}>
                Espace Étudiants
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
