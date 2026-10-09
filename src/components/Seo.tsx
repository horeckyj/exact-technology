import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { projectsData } from '../data/projects';

const SITE_URL = 'https://exact-tech.cz';

const pageMetadata = {
  '/': {
    cs: ['EXACT Technology | Vývoj výrobků od návrhu po výrobu', 'Komplexní vývoj výrobků: průzkum trhu, průmyslový design, konstrukční řešení, dokumentace a podpora výroby.'],
    en: ['EXACT Technology | Product Development from Design to Production', 'Comprehensive product development from market research and industrial design to engineering, documentation and production support.'],
  },
  '/sluzby': {
    cs: ['Služby vývoje výrobků | EXACT Technology', 'Průmyslový design, 3D konstrukce, reverzní inženýrství, výkresová dokumentace a podpora výroby.'],
    en: ['Product Development Services | EXACT Technology', 'Industrial design, 3D engineering, reverse engineering, technical documentation and production support.'],
  },
  '/spoluprace': {
    cs: ['Proces spolupráce při vývoji výrobku | EXACT Technology', 'Provedeme vás celým procesem vývoje výrobku od poptávky a skic až po konstrukci, dokumentaci a výrobu.'],
    en: ['Our Product Development Process | EXACT Technology', 'A complete product development process from initial brief and sketches to engineering, documentation and production.'],
  },
  '/projekty': {
    cs: ['Projekty průmyslového designu | EXACT Technology', 'Prohlédněte si reference EXACT Technology z oblasti dopravy, medicíny, elektroniky a průmyslového designu.'],
    en: ['Industrial Design Projects | EXACT Technology', 'Explore EXACT Technology projects in transport, medicine, electronics and industrial design.'],
  },
  '/o-nas': {
    cs: ['O nás | EXACT Technology', 'EXACT Technology vyvíjí výrobky od prvního návrhu přes konstrukční řešení až po úspěšné spuštění výroby.'],
    en: ['About EXACT Technology', 'EXACT Technology develops products from the first concept through engineering to successful production launch.'],
  },
  '/kontakt': {
    cs: ['Kontakt | EXACT Technology Praha', 'Kontaktujte EXACT Technology v Praze a proberte s námi vývoj vašeho nového výrobku.'],
    en: ['Contact EXACT Technology in Prague', 'Contact EXACT Technology in Prague to discuss the development of your new product.'],
  },
} as const;

const ensureMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const ensureLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

export default function Seo() {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith('en') ? 'en' : 'cs';

  useEffect(() => {
    const basePath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const project = basePath.startsWith('/projekty/')
      ? projectsData.find((item) => item.id === basePath.split('/')[2])
      : undefined;
    const serviceId = basePath.startsWith('/sluzby/') ? basePath.split('/')[2] : undefined;
    const serviceIds = ['pruzkum-trhu', 'design-grafika', 'konstrukcni-reseni', 'reverzni-inzenyrstvi', 'vykresova-dokumentace', 'podpora-vyroby'];
    const serviceIndex = serviceIds.indexOf(serviceId ?? '');

    const metadata = project
      ? {
          title: `${project.title} | EXACT Technology`,
          description: language === 'cs'
            ? `Projekt ${project.title} pro klienta ${project.client}: průmyslový design a konstrukční řešení od EXACT Technology.`
            : `${project.title} for ${project.client}: industrial design and engineering by EXACT Technology.`,
        }
      : serviceIndex >= 0
        ? {
            title: `${t(`services.s${serviceIndex + 1}.title`)} | EXACT Technology`,
            description: t(`services.s${serviceIndex + 1}.desc`),
          }
        : {
            title: pageMetadata[basePath as keyof typeof pageMetadata]?.[language][0] ?? 'EXACT Technology',
            description: pageMetadata[basePath as keyof typeof pageMetadata]?.[language][1] ?? 'EXACT Technology | Product development and industrial design.',
          };

    const canonicalUrl = `${SITE_URL}${basePath}`;
    document.title = metadata.title;
    document.documentElement.lang = language;
    ensureMeta('name', 'description', metadata.description);
    ensureMeta('name', 'robots', 'index, follow');
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:site_name', 'EXACT Technology');
    ensureMeta('property', 'og:title', metadata.title);
    ensureMeta('property', 'og:description', metadata.description);
    ensureMeta('property', 'og:url', canonicalUrl);
    ensureMeta('property', 'og:locale', language === 'cs' ? 'cs_CZ' : 'en_US');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', metadata.title);
    ensureMeta('name', 'twitter:description', metadata.description);
    ensureLink('canonical', canonicalUrl);

    const existingSchema = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema]');
    existingSchema?.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.seoSchema = 'true';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': project ? 'CreativeWork' : 'Organization',
      name: project ? project.title : 'EXACT Technology, s.r.o.',
      url: canonicalUrl,
      ...(project ? { description: metadata.description, creator: { '@type': 'Organization', name: 'EXACT Technology' } } : {
        description: metadata.description,
        email: 'mailto:info@exact-tech.cz',
        telephone: '+420 234 139 884',
        address: { '@type': 'PostalAddress', streetAddress: 'Ocelkova 643/20', postalCode: '198 00', addressLocality: 'Praha 9', addressCountry: 'CZ' },
      }),
    });
    document.head.appendChild(schema);
  }, [language, pathname, t]);

  return null;
}
