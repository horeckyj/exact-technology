import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../image/public/logo_no_bg.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('header.nav.home'), path: '/' },
    { name: t('header.nav.services'), path: '/sluzby' },
    { name: t('header.nav.cooperation'), path: '/spoluprace' },
    { name: t('header.nav.projects'), path: '/projekty' },
    { name: t('header.nav.about'), path: '/o-nas' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="EXACT Logo" className="h-auto w-auto" />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-500'
                    : 'text-slate-300 hover:text-brand-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center p-1 bg-slate-900 border border-slate-700 rounded-xl">
              <button 
                onClick={() => changeLanguage('cs')}
                className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors ${i18n.language === 'cs' ? 'bg-brand-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                CS
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors ${i18n.language === 'en' ? 'bg-brand-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <Link
              to="/kontakt"
              className="bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-600 transition-colors shadow-sm"
            >
              {t('header.contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-brand-500 bg-brand-500/10'
                    : 'text-slate-300 hover:text-brand-500 hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between px-3 mb-6">
                <span className="text-sm font-medium text-slate-400">{t('header.language')}</span>
                <div className="flex items-center p-1 bg-slate-900 border border-slate-700 rounded-xl">
                  <button 
                    onClick={() => changeLanguage('cs')}
                    className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors ${i18n.language === 'cs' ? 'bg-brand-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                  >
                    CS
                  </button>
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors ${i18n.language === 'en' ? 'bg-brand-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-brand-500 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-brand-600 transition-colors"
              >
                {t('header.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
