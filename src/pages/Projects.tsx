import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setVisibleCount(4);
  };

  const categories = [
    { id: 'all', label: t('projects.categories.all') },
    { id: 'transport', label: t('projects.categories.transport') },
    { id: 'medicine', label: t('projects.categories.medicine') },
    { id: 'electronics', label: t('projects.categories.electronics') },
    { id: 'weapons_furniture', label: t('projects.categories.weapons_furniture') },
    { id: 'other', label: t('projects.categories.other') }
  ];

  const projects = useMemo(() => {
    const shuffled = [...projectsData];

    // Shuffle once per page load so the first visible cards are not locked to one category.
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }, []);

  const getLocalizedDescription = (project: (typeof projectsData)[number]) => {
    if (i18n.language.startsWith('cs')) {
      return `Návrh a konstrukční řešení projektu ${project.title} pro klienta ${project.client}.`;
    }

    return project.description;
  };

  const categoryLabelById: Record<string, string> = {
    transport: t('projects.categories.transport'),
    medicine: t('projects.categories.medicine'),
    electronics: t('projects.categories.electronics'),
    weapons_furniture: t('projects.categories.weapons_furniture'),
    other: t('projects.categories.other')
  };

  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === 'all' || p.categoryId === filter;
    const localizedDescription = getLocalizedDescription(p);
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localizedDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8"
          >
            <span className="text-sm font-bold tracking-wide uppercase">{t('projects.tagline')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('projects.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">{t('projects.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
          >
            {t('projects.description')}
          </motion.p>
        </div>

        {/* Filter and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8 mb-16"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('projects.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-full text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                  filter === cat.id 
                    ? 'bg-brand-500 text-white shadow-brand-500/20 scale-105' 
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Link
                  to={`/projekty/${project.id}`}
                  className="block group relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-800 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-sm uppercase tracking-wider border border-slate-800">
                        {categoryLabelById[project.categoryId]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10 relative">
                    <div className="absolute -top-10 right-10 w-20 h-20 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center z-30 transform group-hover:-translate-y-2 transition-transform duration-300 border border-slate-800">
                      
                      <ExternalLink className="w-8 h-8 text-white relative z-10" />
                    </div>

                    <div className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-widest">
                      {project.client}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                      {getLocalizedDescription(project)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 text-sm font-medium rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-brand-400 transition-colors group/link">
                      {t('projects.more')}
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-slate-500 font-light">{t('projects.noResults')}</p>
          </motion.div>
        )}

        {filteredProjects.length > visibleCount && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600"
            >
              {t('projects.loadMore')}
            </button>
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl border border-slate-800"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-brand-500/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t('projects.cta.title')}</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              {t('projects.cta.desc')}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex justify-center items-center gap-2 bg-brand-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-400 transition-colors shadow-[0_0_40px_-10px_rgba(232,120,23,0.5)]"
            >
              {t('projects.cta.btn')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

