/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Home stays in the main bundle (landing page); other pages load on demand.
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Cooperation = lazy(() => import('./pages/Cooperation'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Seo from './components/Seo';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Seo />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-300 bg-slate-950 selection:bg-brand-500/30">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sluzby" element={<Services />} />
            <Route path="/sluzby/:id" element={<ServiceDetail />} />
            <Route path="/spoluprace" element={<Cooperation />} />
            <Route path="/projekty" element={<Projects />} />
            <Route path="/projekty/:id" element={<ProjectDetail />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
