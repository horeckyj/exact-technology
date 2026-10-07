import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden border-t border-brand-500/20 bg-slate-950 py-14 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="relative mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-brand-400">EXACT Technology</span>
              <h4 className="text-3xl font-bold tracking-tight">{t('footer.contact.title')}</h4>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-brand-500/50 to-transparent sm:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span className="text-sm leading-relaxed text-slate-300" dangerouslySetInnerHTML={{ __html: t('footer.contact.address') }} />
            </div>
            <a href={`mailto:${t('footer.contact.email')}`} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-brand-500/50 hover:bg-slate-900">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span className="text-sm text-slate-300">{t('footer.contact.email')}</span>
            </a>
            <a href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-colors hover:border-brand-500/50 hover:bg-slate-900">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span className="text-sm text-slate-300">{t('footer.contact.phone')}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
