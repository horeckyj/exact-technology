import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Search, Palette, Box, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cooperation: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('cooperation.steps.s1.title'),
      description: t('cooperation.steps.s1.desc'),
      icon: <Search className="w-8 h-8 text-brand-500" />,
      color: 'bg-slate-900 border-brand-500/20 text-brand-500'
    },
    {
      title: t('cooperation.steps.s2.title'),
      description: t('cooperation.steps.s2.desc'),
      icon: <Palette className="w-8 h-8 text-amber-500" />,
      color: 'bg-slate-900 border-amber-500/20 text-amber-500'
    },
    {
      title: t('cooperation.steps.s3.title'),
      description: t('cooperation.steps.s3.desc'),
      icon: <Box className="w-8 h-8 text-yellow-500" />,
      color: 'bg-slate-900 border-yellow-500/20 text-yellow-500'
    },
    {
      title: t('cooperation.steps.s4.title'),
      description: t('cooperation.steps.s4.desc'),
      icon: <Settings className="w-8 h-8 text-emerald-500" />,
      color: 'bg-slate-900 border-emerald-500/20 text-emerald-500'
    }
  ];

  const benefits = [
    t('cooperation.benefits.b1'),
    t('cooperation.benefits.b2'),
    t('cooperation.benefits.b3'),
    t('cooperation.benefits.b4'),
    t('cooperation.benefits.b5'),
    t('cooperation.benefits.b6')
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8"
          >
            <span className="text-sm font-bold tracking-wide uppercase">{t('cooperation.tagline')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('cooperation.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('cooperation.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
          >
            {t('cooperation.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[40px] top-10 bottom-10 w-px bg-gradient-to-b from-brand-500/50 via-slate-700 to-slate-800 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex gap-8 group"
                >
                  <div className="flex-shrink-0 relative z-20">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 border ${step.color}`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-slate-950 z-30">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-800"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full -z-10"></div>
            <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">{t('cooperation.benefits.title')}</h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                  </div>
                  <span className="text-lg text-slate-300 font-medium pt-0.5">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-14 pt-10 border-t border-slate-800">
              <p className="text-slate-400 mb-8 text-lg font-light">
                {t('cooperation.benefits.desc')}
              </p>
              <Link
                to="/kontakt"
                className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-colors shadow-xl w-full sm:w-auto"
              >
                {t('cooperation.benefits.btn')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;

