import React, { useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ExternalLink, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ModelViewer = lazy(() => import('../components/ModelViewer'));

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // In a real app, you would fetch the project data based on the ID
  const projectsData: Record<string, any> = {
    'design-transport': {
      id: 'design-transport',
      title: t('projects.p1.title'),
      client: t('projects.p1.client'),
      category: t('projects.categories.transport'),
      description: t('projects.p1.desc'),
      fullDescription: t('projectDetail.p1.fullDescription'),
      process: t('projectDetail.p1.process'),
      challenges: t('projectDetail.p1.challenges'),
      tags: ['Design', 'Construction', 'Transport'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      color: 'from-brand-500 to-amber-400',
      results: t('projectDetail.p1.results', { returnObjects: true }),
      gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581092926214-ee37378e0ce1?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800'
      ]
    },
    'design-elektronika': {
      id: 'design-elektronika',
      title: t('projects.p2.title'),
      client: t('projects.p2.client'),
      category: t('projects.categories.electronics'),
      description: t('projects.p2.desc'),
      fullDescription: t('projectDetail.p2.fullDescription'),
      process: t('projectDetail.p2.process'),
      challenges: t('projectDetail.p2.challenges'),
      tags: ['Industrial Design', 'Electronics', 'Manufacturability'],
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
      color: 'from-slate-600 to-slate-400',
      results: t('projectDetail.p2.results', { returnObjects: true }),
      gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581092926214-ee37378e0ce1?auto=format&fit=crop&q=80&w=800'
      ]
    },
    'lekarske-pristroje': {
      id: 'lekarske-pristroje',
      title: t('projects.p3.title'),
      client: t('projects.p3.client'),
      category: t('projects.categories.medicine'),
      description: t('projects.p3.desc'),
      fullDescription: t('projectDetail.p3.fullDescription'),
      process: t('projectDetail.p3.process'),
      challenges: t('projectDetail.p3.challenges'),
      tags: ['Medical Tech', 'Ergonomics', 'Innovation'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      color: 'from-brand-600 to-brand-400',
      results: t('projectDetail.p3.results', { returnObjects: true }),
      gallery: [
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581092926214-ee37378e0ce1?auto=format&fit=crop&q=80&w=800'
      ]
    },
    'ergonomie-reverzni-inzenyrstvi': {
      id: 'ergonomie-reverzni-inzenyrstvi',
      title: t('projects.p4.title'),
      client: t('projects.p4.client'),
      category: t('projects.categories.weapons_furniture'),
      description: t('projects.p4.desc'),
      fullDescription: t('projectDetail.p4.fullDescription'),
      process: t('projectDetail.p4.process'),
      challenges: t('projectDetail.p4.challenges'),
      tags: ['Reverse Engineering', 'Freeform Surfaces', 'Ergonomics'],
      image: 'https://images.unsplash.com/photo-1581092926214-ee37378e0ce1?auto=format&fit=crop&q=80&w=800',
      color: 'from-amber-500 to-yellow-400',
      results: t('projectDetail.p4.results', { returnObjects: true }),
      gallery: [
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
      ]
    },
    '3d-konfigurator': {
      id: '3d-konfigurator',
      title: t('projects.p5.title'),
      client: t('projects.p5.client'),
      category: t('projects.categories.demo'),
      description: t('projects.p5.desc'),
      fullDescription: t('projectDetail.p5.fullDescription'),
      process: t('projectDetail.p5.process'),
      challenges: t('projectDetail.p5.challenges'),
      tags: ['3D Modeling', 'Web Integration', 'Interactive'],
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0dd?auto=format&fit=crop&q=80&w=800',
      color: 'from-brand-500 to-indigo-400',
      results: t('projectDetail.p5.results', { returnObjects: true }),
      has3D: true
    }
  };

  const project = projectsData[id || 'design-transport'] || projectsData['design-transport'];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10 mix-blend-multiply`}></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
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
                {project.category}
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
              {project.fullDescription}
            </p>

            {project.has3D && (
              <div className="mb-12">
                <Suspense fallback={
                  <div className="w-full h-[500px] bg-slate-900 rounded-[2.5rem] border border-slate-800 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">Načítám 3D model...</span>
                    </div>
                  </div>
                }>
                  <ModelViewer />
                </Suspense>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('projectDetail.process')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.process}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('projectDetail.challenges')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.challenges}
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
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  </div>
                  <span className="text-slate-300">{result}</span>
                </li>
              ))}
            </ul>

            {project.gallery && project.gallery.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mb-6 mt-12">{t('projectDetail.gallery') || 'Galerie'}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.gallery.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group border border-slate-800"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
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
