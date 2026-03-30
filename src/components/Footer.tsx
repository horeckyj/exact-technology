import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../image/public/logo_no_bg.png';


const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="EXACT Logo" className="h-auto w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Služby */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/sluzby/pruzkum-trhu" className="hover:text-brand-400 transition-colors">{t('footer.services.research')}</Link></li>
              <li><Link to="/sluzby/design-grafika" className="hover:text-brand-400 transition-colors">{t('footer.services.design')}</Link></li>
              <li><Link to="/sluzby/konstrukcni-reseni" className="hover:text-brand-400 transition-colors">{t('footer.services.construction')}</Link></li>
              <li><Link to="/sluzby/reverzni-inzenyrstvi" className="hover:text-brand-400 transition-colors">{t('footer.services.reverse')}</Link></li>
              <li><Link to="/sluzby/vykresova-dokumentace" className="hover:text-brand-400 transition-colors">{t('footer.services.documentation')}</Link></li>
              <li><Link to="/sluzby/podpora-vyroby" className="hover:text-brand-400 transition-colors">{t('footer.services.production')}</Link></li>
            </ul>
          </div>

          {/* Společnost */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.company.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/o-nas" className="hover:text-brand-400 transition-colors">{t('footer.company.about')}</Link></li>
              <li><Link to="/projekty" className="hover:text-brand-400 transition-colors">{t('footer.company.projects')}</Link></li>
              <li><Link to="/spoluprace" className="hover:text-brand-400 transition-colors">{t('footer.company.process')}</Link></li>
              <li><Link to="/kontakt" className="hover:text-brand-400 transition-colors">{t('footer.company.contact')}</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-brand-500 text-xl">location_on</span>
                <span dangerouslySetInnerHTML={{ __html: t('footer.contact.address') }} />
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-500 text-xl">mail</span>
                <a href={`mailto:${t('footer.contact.email')}`} className="hover:text-brand-400 transition-colors">{t('footer.contact.email')}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-500 text-xl">phone</span>
                <a href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{t('footer.contact.phone')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-brand-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
