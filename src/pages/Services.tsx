import React from 'react';
import { motion } from 'motion/react';
import { Search, Palette, Box, RotateCcw, FileText, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'pruzkum-trhu',
      icon: <Search className="w-8 h-8 text-brand-500" />,
      title: t('services.s1.title'),
      description: t('services.s1.desc'),
      features: [t('services.s1.f1'), t('services.s1.f2'), t('services.s1.f3'), t('services.s1.f4')],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'design-grafika',
      icon: <Palette className="w-8 h-8 text-brand-500" />,
      title: t('services.s2.title'),
      description: t('services.s2.desc'),
      features: [t('services.s2.f1'), t('services.s2.f2'), t('services.s2.f3'), t('services.s2.f4')],
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'konstrukcni-reseni',
      icon: <Box className="w-8 h-8 text-brand-500" />,
      title: t('services.s3.title'),
      description: t('services.s3.desc'),
      features: [t('services.s3.f1'), t('services.s3.f2'), t('services.s3.f3'), t('services.s3.f4')],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'reverzni-inzenyrstvi',
      icon: <RotateCcw className="w-8 h-8 text-brand-500" />,
      title: t('services.s4.title'),
      description: t('services.s4.desc'),
      features: [t('services.s4.f1'), t('services.s4.f2'), t('services.s4.f3'), t('services.s4.f4')],
      image: 'https://images.unsplash.com/photo-1581092926214-ee37378e0ce1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'vykresova-dokumentace',
      icon: <FileText className="w-8 h-8 text-brand-500" />,
      title: t('services.s5.title'),
      description: t('services.s5.desc'),
      features: [t('services.s5.f1'), t('services.s5.f2'), t('services.s5.f3'), t('services.s5.f4')],
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'podpora-vyroby',
      icon: <Settings className="w-8 h-8 text-brand-500" />,
      title: t('services.s6.title'),
      description: t('services.s6.desc'),
      features: [t('services.s6.f1'), t('services.s6.f2'), t('services.s6.f3'), t('services.s6.f4')],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    }
  ];

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
            <span className="text-sm font-bold tracking-wide uppercase">{t('services.tagline')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('services.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('services.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-800 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 left-8 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center z-20 shadow-lg border border-slate-700">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 pt-16 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  <Link to={`/sluzby/${service.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </Link>
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-3 border-t border-slate-800 pt-6 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-slate-300 font-medium text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex items-center text-brand-400 font-bold text-sm uppercase tracking-wider group/link">
                  {t('services.more')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative bg-brand-500 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/seed/abstract-orange/1200/400" alt="Abstract" className="w-full h-full object-cover opacity-20 mix-blend-overlay" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/80 to-brand-900/90"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('services.cta.title')}</h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto font-light">
              {t('services.cta.desc')}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-white text-brand-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              {t('services.cta.btn')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

