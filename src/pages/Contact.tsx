import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

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
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-900/20 to-transparent rounded-bl-full -z-10"></div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">{t('contact.info.title')}</h2>
                
                <div className="space-y-10">
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.address.title')}</h3>
                      <p className="text-slate-400 leading-relaxed font-light">
                        <span dangerouslySetInnerHTML={{ __html: t('contact.info.address.val') }} /><br />
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Kovriginova+1684/1,+147+00+Prague+4" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 text-sm font-bold mt-2 transition-colors"
                        >
                          {t('contact.info.address.mapLink') || 'Zobrazit na mapě'}
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.phone.title')}</h3>
                      <p className="text-slate-400 leading-relaxed font-light">
                        <a href="tel:+420123456789" className="hover:text-brand-400 transition-colors">{t('contact.info.phone.val')}</a><br />
                        <span className="text-sm text-slate-500">{t('contact.info.phone.desc')}</span>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('contact.info.email.title')}</h3>
                      <p className="text-slate-400 leading-relaxed font-light">
                        <a href="mailto:info@exact-tech.cz" className="hover:text-brand-400 transition-colors">{t('contact.info.email.val1')}</a><br />
                        <a href="mailto:support@exact-tech.cz" className="hover:text-brand-400 transition-colors">{t('contact.info.email.val2')}</a>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-slate-800">
                <p className="text-slate-500 font-light mb-4">{t('contact.info.quick')}</p>
                <a href="tel:+420123456789" className="inline-flex items-center gap-2 font-bold text-xl text-white hover:text-brand-400 transition-colors group">
                  {t('contact.info.call')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">{t('contact.form.title')}</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-900/20 text-emerald-400 p-10 rounded-3xl text-center h-full flex flex-col items-center justify-center border border-emerald-900/50"
                >
                  <div className="w-24 h-24 bg-emerald-900/40 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t('contact.form.success')}</h3>
                  <p className="text-emerald-300 text-lg font-light max-w-md mx-auto">
                    {t('contact.form.successDesc')}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30"
                  >
                    {t('contact.form.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-slate-300 mb-2">{t('contact.form.firstName')}</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none bg-slate-950 focus:bg-slate-900 text-white"
                        placeholder={t('contact.form.placeholders.firstName')}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-slate-300 mb-2">{t('contact.form.lastName')}</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none bg-slate-950 focus:bg-slate-900 text-white"
                        placeholder={t('contact.form.placeholders.lastName')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none bg-slate-950 focus:bg-slate-900 text-white"
                      placeholder={t('contact.form.placeholders.email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-300 mb-2">{t('contact.form.company')}</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none bg-slate-950 focus:bg-slate-900 text-white"
                      placeholder={t('contact.form.placeholders.company')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">{t('contact.form.message')}</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none resize-none bg-slate-950 focus:bg-slate-900 text-white"
                      placeholder={t('contact.form.placeholders.message')}
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="group w-full flex justify-center items-center gap-2 bg-brand-500 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-brand-600 transition-all shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)] hover:shadow-[0_0_60px_-15px_rgba(232,120,23,0.7)]"
                    >
                      {t('contact.form.submit')}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 text-center mt-6 font-light">
                    {t('contact.form.consent')}
                  </p>
                </form>
              )}
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
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer"
              className="rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-all duration-700"
              title="Google Maps"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

