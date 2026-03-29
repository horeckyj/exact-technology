import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, ChevronRight, PaintBucket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Guys from '../../public/ExTech_Making_2.png';
import Drawing from '../../public/ExTech_Drawing.png';
import { partners } from "../data/partners";
import { PartnersSection } from '../components/PartnersSection';

type PartnersSectionProps = {
  title: string;
};

const Home: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring' as const, 
        stiffness: 100, 
        damping: 15 
      } 
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-brand-900/20 z-10"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-full h-full opacity-10"
          >
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1920"
              alt="Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide">{t('home.hero.tagline')}</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
                {t('home.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('home.hero.title2')}</span> {t('home.hero.title3')}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
                {t('home.hero.description')}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/sluzby"
                  className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-600 transition-all shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)] hover:shadow-[0_0_60px_-15px_rgba(232,120,23,0.7)]"
                >
                  {t('home.hero.servicesBtn')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                >
                  {t('home.hero.consultationBtn')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Images Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block relative h-[600px]"
            >
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src= {Guys}
                alt="AI CAD Design"
                className="absolute top-10 right-0 w-4/5 rounded-2xl shadow-2xl border border-white/10 z-20"
                referrerPolicy="no-referrer"
              />
              <motion.img
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                src= {Drawing}
                alt="AI Manufacturing"
                className="absolute bottom-10 left-0 w-3/5 rounded-2xl shadow-2xl border border-white/10 z-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Marquee Section */}
      <PartnersSection title={t("home.marquee.trusted")} />

      {/* Features Section with Images */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('home.features.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('home.features.title2')}</span></h2>
            <p className="text-xl text-slate-400 font-light">
              {t('home.features.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <PaintBucket className="w-6 h-6 text-white" />,
                title: t('home.features.f1.title'),
                description: t('home.features.f1.desc'),
                image: '/public/ExTech_Making_3.png',
                path: '/spoluprace'
              },
              {
                icon: <Cloud className="w-6 h-6 text-white" />,
                title: t('home.features.f2.title'),
                description: t('home.features.f2.desc'),
                image: '/public/ExTech_Making.png',
                path: '/spoluprace'
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t('home.features.f3.title'),
                description: t('home.features.f3.desc'),
                image: '/public/ExTech_Production_Medica.png',
                path: '/spoluprace'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-800 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-brand-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20 shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light mb-6">{feature.description}</p>
                  <Link to={feature.path} className="inline-flex items-center text-brand-400 font-semibold hover:text-brand-300 transition-colors focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {t('home.features.more')} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-500/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
          >
            {t('home.cta.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-12 font-light"
          >
            {t('home.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-brand-600 transition-colors shadow-2xl hover:shadow-brand-500/50"
            >
              {t('home.cta.btn')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;

