import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isChinese = location.pathname === '/cn';
  const isThai = location.pathname === '/th';
  
  const getCurrentLanguage = () => {
    if (isChinese) return '中文';
    if (isThai) return 'ไทย';
    return 'EN';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F8F9FA]/98 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div style={{ fontFamily: 'var(--font-display)' }} className="text-[#0B1F33] text-xl font-semibold tracking-tight">
              Stonebridge Prime Capital
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/') ? 'text-[#0B1F33] font-medium' : 'text-gray-600 hover:text-[#0B1F33]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/about') ? 'text-[#0B1F33] font-medium' : 'text-gray-600 hover:text-[#0B1F33]'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/services') ? 'text-[#0B1F33] font-medium' : 'text-gray-600 hover:text-[#0B1F33]'
              }`}
            >
              Services
            </Link>
            <Link
              to="/clients"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/clients') ? 'text-[#0B1F33] font-medium' : 'text-gray-600 hover:text-[#0B1F33]'
              }`}
            >
              Clients
            </Link>
            <Link
              to="/insights"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/insights') ? 'text-[#0B1F33] font-medium' : 'text-gray-600 hover:text-[#0B1F33]'
              }`}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#0B1F33] text-white text-sm tracking-wide hover:bg-[#0B1F33]/90 transition-colors"
            >
              Contact
            </Link>
            {/* Language Switch */}
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-sm text-[#C8A96A] hover:text-[#0B1F33] transition-colors"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="w-4 h-4" />
                <span>{getCurrentLanguage()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-10">
                  <Link
                    to="/"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    to="/cn"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    中文
                  </Link>
                  <Link
                    to="/th"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    ไทย
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0B1F33]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-200">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/clients"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              to="/insights"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-600 hover:text-[#0B1F33]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Language Switch - Mobile */}
            <div className="relative">
              <button
                className="flex items-center gap-2 py-2 text-[#C8A96A] hover:text-[#0B1F33]"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="w-4 h-4" />
                <span>{getCurrentLanguage()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-10">
                  <Link
                    to="/"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    to="/cn"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    中文
                  </Link>
                  <Link
                    to="/th"
                    className="block py-2 px-4 text-gray-600 hover:text-[#0B1F33]"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    ไทย
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}