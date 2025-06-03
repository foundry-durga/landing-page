import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LogoIcon } from '../ui/LogoIcon';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
        }
      `}
    >
      <Container>
        <nav className="relative flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-20">
            <LogoIcon />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Foundarly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
              Home
            </a>
            <a href="#ai-workflow" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
              Features
            </a>
            <a href="#collaboration" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
              Community
            </a>
            <a href="#investors" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
              Investors
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/waitlist">
              <Button variant="primary" size="md">Join Waitlist</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 z-20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-white dark:bg-gray-900 z-10 transition-transform duration-300 ease-in-out md:hidden
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="h-full flex flex-col pt-20 pb-6 px-6">
              <div className="flex-1">
                <nav className="space-y-6">
                  <a 
                    href="#how-it-works" 
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a 
                    href="#ai-workflow" 
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#collaboration" 
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Community
                  </a>
                  <a 
                    href="#investors" 
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Success Stories
                  </a>
                </nav>
              </div>

              <div className="mt-6">
                <Link 
                  to="/waitlist" 
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="primary" size="lg" fullWidth>
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}