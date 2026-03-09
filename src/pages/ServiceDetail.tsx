import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, MonitorSmartphone, Code2, Cloud, Database, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // In a real app, you would fetch the service data based on the ID
  const service = {
    id: 'vyvoj-webovych-aplikaci',
    title: t('services.s1.title'),
    icon: <MonitorSmartphone className="w-12 h-12 text-brand-500" />,
    description: t('services.s1.desc'),
    fullDescription: t('serviceDetail.fullDescription'),
    image: 'https://picsum.photos/seed/web-dev/1200/600?blur=1',
    features: [
      t('serviceDetail.features.f1'),
      t('serviceDetail.features.f2'),
      t('serviceDetail.features.f3'),
      t('serviceDetail.features.f4'),
      t('serviceDetail.features.f5'),
      t('serviceDetail.features.f6')
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS']
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/90 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/sluzby" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" />
              {t('serviceDetail.backToServices')}
            </Link>
            <div className="w-24 h-24 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl border border-slate-800">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-slate-800"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">{t('serviceDetail.serviceDetail')}</h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              {service.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{t('serviceDetail.whatYouGet')}</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-brand-500" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{t('serviceDetail.technologies')}</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 text-sm font-medium rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-800 flex justify-center">
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-colors shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)]"
            >
              {t('serviceDetail.requestService')}
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
