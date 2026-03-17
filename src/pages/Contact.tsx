import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8"
          >
            <span className="text-sm font-bold tracking-wide uppercase">{t('contact.tagline')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('contact.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('contact.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
          >
            {t('contact.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">{t('contact.info.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -4 }} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.address.title')}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  <span dangerouslySetInnerHTML={{ __html: t('contact.info.address.val') }} />
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kovriginova+1684/1,+147+00+Prague+4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 text-sm font-bold mt-4 transition-colors"
                >
                  {t('contact.info.address.mapLink') || 'Zobrazit na mapě'}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.phone.title')}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  <a href="tel:+420123456789" className="hover:text-brand-400 transition-colors">{t('contact.info.phone.val')}</a><br />
                  <span className="text-sm text-slate-500">{t('contact.info.phone.desc')}</span>
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.email.title')}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  <a href="mailto:info@exact-tech.cz" className="hover:text-brand-400 transition-colors">{t('contact.info.email.val1')}</a><br />
                  <a href="mailto:support@exact-tech.cz" className="hover:text-brand-400 transition-colors">{t('contact.info.email.val2')}</a>
                </p>
              </motion.div>
            </div>

            <div className="mt-8 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-slate-400 font-light">{t('contact.info.quick')}</p>
              <a href={`mailto:${t('contact.info.email.val1')}`} className="inline-flex items-center gap-2 font-bold text-lg text-white hover:text-brand-400 transition-colors group">
                {t('contact.info.call')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-slate-900 rounded-[3rem] p-4 border border-slate-800 shadow-2xl overflow-hidden h-[450px] relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Kovriginova%201684/1,%20147%2000%20Praha%204&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer"
              className="rounded-[2.5rem] border-0 opacity-90 group-hover:opacity-100 transition-all duration-700"
              title="Google Maps"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

