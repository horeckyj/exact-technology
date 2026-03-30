import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { resolveAssetUrl } from '../utils/assetPath';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stats.s1'), value: '35+' },
    { label: t('about.stats.s2'), value: '120+' },
    { label: t('about.stats.s3'), value: '8+' },
    { label: t('about.stats.s4'), value: '1' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-brand-500" />,
      title: t('about.values.v1.title'),
      description: t('about.values.v1.desc')
    },
    {
      icon: <Users className="w-8 h-8 text-brand-500" />,
      title: t('about.values.v2.title'),
      description: t('about.values.v2.desc')
    },
    {
      icon: <Award className="w-8 h-8 text-brand-500" />,
      title: t('about.values.v3.title'),
      description: t('about.values.v3.desc')
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-500" />,
      title: t('about.values.v4.title'),
      description: t('about.values.v4.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 z-10"></div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8"
          >
            <span className="text-sm font-bold tracking-wide uppercase">{t('about.tagline')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('about.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('about.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">{t('about.story.title')}</h2>
            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                {t('about.story.p1')}
              </p>
              <p>
                {t('about.story.p2')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-900 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-800 text-center"
                >
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-amber-300 mb-2">{stat.value}</div>
                  <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Masonry Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="space-y-4 h-full">
              <img src={resolveAssetUrl('/image/ManufacturingSolution.jpg')} alt="3D Modeling" className="w-full h-3/5 object-cover rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src={resolveAssetUrl('/image/designdocumentation.png')} alt="Engineering" className="w-full h-2/5 object-cover rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 h-full pt-12">
              <img src={resolveAssetUrl('/image/TechnicalDrawing.jpg')} alt="Documentation" className="w-full h-2/5 object-cover rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src={resolveAssetUrl('/image/public/ExTech_Making_2.png')} alt="Design" className="w-full h-3/5 object-cover rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6 tracking-tight"
            >
              {t('about.values.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 font-light"
            >
              {t('about.values.description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-900 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-800 flex flex-col sm:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-brand-900/20 to-amber-900/20 rounded-2xl flex items-center justify-center shadow-inner border border-brand-500/10">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl border border-slate-800"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/seed/abstract-dark/1200/400" alt="Abstract" className="w-full h-full object-cover opacity-20 mix-blend-overlay" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/60 to-slate-900/90"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('about.cta.title')}</h2>
            <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto font-light">
              {t('about.cta.desc')}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              {t('about.cta.btn')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

