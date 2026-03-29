import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ExternalLink, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectById = useMemo(() => {
    return Object.fromEntries(projectsData.map((item) => [item.id, item]));
  }, []);

  const defaultProject = projectsData[0];
  const project = (id && projectById[id]) || defaultProject;

  const categoryLabelById: Record<string, string> = {
    transport: t('projects.categories.transport'),
    medicine: t('projects.categories.medicine'),
    electronics: t('projects.categories.electronics'),
    weapons_furniture: t('projects.categories.weapons_furniture'),
    other: t('projects.categories.other')
  };

  const localizedDescription = i18n.language.startsWith('cs')
    ? `Návrh a konstrukční řešení projektu ${project.title} pro klienta ${project.client}.`
    : project.description;

  const results = [
    t('projectDetail.dynamic.r1'),
    t('projectDetail.dynamic.r2'),
    t('projectDetail.dynamic.r3')
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10 mix-blend-multiply`}></div>
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 z-20"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/projekty" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-6 font-medium">
              <ArrowLeft className="w-4 h-4" />
              {t('projectDetail.backToProjects')}
            </Link>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-sm uppercase tracking-wider border border-slate-800">
                {categoryLabelById[project.categoryId]}
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {project.client}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-slate-800"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">{t('projectDetail.aboutProject')}</h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              {localizedDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('projectDetail.process')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('projectDetail.dynamic.process')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('projectDetail.challenges')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('projectDetail.dynamic.challenges')}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">{t('projectDetail.technologies')}</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 text-sm font-medium rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-6">{t('projectDetail.keyResults')}</h3>
            <ul className="space-y-4 mb-10">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  </div>
                  <span className="text-slate-300">{result}</span>
                </li>
              ))}
            </ul>

            {project.images && project.images.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mb-6 mt-12">{t('projectDetail.gallery') || 'Galerie'}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group border border-slate-800"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mt-12 pt-10 border-t border-slate-800 flex justify-center">
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-colors shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)]"
            >
              {t('projectDetail.interestedBtn')}
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-slate-900/50 hover:bg-slate-800 rounded-full text-white transition-colors"
              aria-label={t('projectDetail.closeImage', { defaultValue: 'Close image' })}
              title={t('projectDetail.closeImage', { defaultValue: 'Close image' })}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full screen gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
