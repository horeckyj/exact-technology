import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronDown, ExternalLink, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const hoverTimerRef = useRef<number | null>(null);
  const openedByHoverRef = useRef(false);

  const projectById = useMemo(() => {
    return Object.fromEntries(projectsData.map((item) => [item.id, item]));
  }, []);

  const defaultProject = projectsData[0];
  const project = (id && projectById[id]) || defaultProject;

  const localizedDescription = i18n.language.startsWith('cs')
    ? `Návrh a konstrukční řešení projektu ${project.title} pro klienta ${project.client}.`
    : project.description;

  const results = [
    t('projectDetail.dynamic.r1'),
    t('projectDetail.dynamic.r2'),
    t('projectDetail.dynamic.r3')
  ];

  const cancelHoverPreview = () => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const startHoverPreview = (image: string) => {
    cancelHoverPreview();
    hoverTimerRef.current = window.setTimeout(() => {
      openedByHoverRef.current = true;
      setSelectedImage(image);
      hoverTimerRef.current = null;
    }, 500);
  };

  const closeHoverPreviewOnMove = () => {
    if (!openedByHoverRef.current) return;

    openedByHoverRef.current = false;
    setSelectedImage(null);
  };

  useEffect(() => {
    const closePreviewOnScroll = () => {
      if (!openedByHoverRef.current) return;

      openedByHoverRef.current = false;
      setSelectedImage(null);
    };

    window.addEventListener('scroll', closePreviewOnScroll, { passive: true });

    return () => {
      cancelHoverPreview();
      window.removeEventListener('scroll', closePreviewOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-8 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-2xl border border-slate-800"
        >
          <header className="mb-8">
            <div className="flex items-center gap-4">
            <Link
              to="/projekty"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
              aria-label={t('projectDetail.backToProjects')}
              title={t('projectDetail.backToProjects')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
              <h1 className="min-w-0 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                {project.title}
              </h1>
            </div>
            <p className="ml-16 mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              {project.client}
            </p>
          </header>

          {project.images.length > 0 && (
            <div className="grid grid-cols-2 auto-rows-[10rem] gap-3 overflow-hidden rounded-2xl sm:auto-rows-[14rem] lg:grid-cols-12 lg:auto-rows-[13rem]">
              {project.images.map((img, index) => (
                <button
                  type="button"
                  key={img}
                  className={`group relative overflow-hidden bg-slate-950 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 ${
                    index === 0
                      ? 'col-span-2 row-span-2 lg:col-span-8'
                      : index === 1
                        ? 'lg:col-span-4'
                        : 'lg:col-span-4'
                  }`}
                  onMouseEnter={() => startHoverPreview(img)}
                  onMouseMove={() => startHoverPreview(img)}
                  onMouseLeave={cancelHoverPreview}
                  onClick={() => {
                    cancelHoverPreview();
                    openedByHoverRef.current = false;
                    setSelectedImage(img);
                  }}
                  aria-label={`${t('projectDetail.openImage')} ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-slate-800 pt-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-white transition-colors hover:text-brand-400"
              onClick={() => setIsInfoOpen((isOpen) => !isOpen)}
              aria-expanded={isInfoOpen}
              aria-controls="project-information"
            >
              {t('projectDetail.moreInfo')}
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isInfoOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence initial={false}>
              {isInfoOpen && (
                <motion.div
                  id="project-information"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-8">
                    <h2 className="mb-4 text-2xl font-bold text-white">{t('projectDetail.aboutProject')}</h2>
                    <p className="mb-10 text-lg leading-relaxed text-slate-400">
                      {localizedDescription}
                    </p>

                    <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-xl font-bold text-white">{t('projectDetail.process')}</h3>
                        <p className="leading-relaxed text-slate-400">{t('projectDetail.dynamic.process')}</p>
                      </div>
                      <div>
                        <h3 className="mb-4 text-xl font-bold text-white">{t('projectDetail.challenges')}</h3>
                        <p className="leading-relaxed text-slate-400">{t('projectDetail.dynamic.challenges')}</p>
                      </div>
                    </div>

                    <h3 className="mb-6 text-xl font-bold text-white">{t('projectDetail.technologies')}</h3>
                    <div className="mb-10 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-6 text-xl font-bold text-white">{t('projectDetail.keyResults')}</h3>
                    <ul className="mb-10 space-y-4">
                      {results.map((result) => (
                        <li key={result} className="flex items-start gap-4">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                            <CheckCircle2 className="h-4 w-4 text-brand-500" />
                          </span>
                          <span className="text-slate-300">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-center border-t border-slate-800 pt-10">
                      <Link
                        to="/kontakt"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-center text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)] transition-colors hover:bg-brand-600"
                      >
                        {t('projectDetail.interestedBtn')}
                        <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
            onMouseMove={closeHoverPreviewOnMove}
            onClick={() => {
              openedByHoverRef.current = false;
              setSelectedImage(null);
            }}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-slate-900/50 hover:bg-slate-800 rounded-full text-white transition-colors"
              aria-label={t('projectDetail.closeImage', { defaultValue: 'Close image' })}
              title={t('projectDetail.closeImage', { defaultValue: 'Close image' })}
              onClick={() => {
                openedByHoverRef.current = false;
                setSelectedImage(null);
              }}
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
