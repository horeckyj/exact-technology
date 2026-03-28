export type Partner = {
  name: string;
  href?: string;
  logo: string;
};

const referenceLogos = import.meta.glob('../../image/reference/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const partnerMetaBySlug: Record<string, { name: string; href?: string }> = {
  abb: { name: 'ABB', href: 'https://new.abb.com/cz' },
  alimex: { name: 'Alimex' },
  amv: { name: 'AMV Technics' },
  anet: { name: 'Anet' },
  ateh: { name: 'ATEH' },
  bio: { name: 'BIOtherapy' },
  botas: { name: 'Botas', href: 'https://www.botas.cz/' },
  btl: { name: 'BTL' },
  cic: { name: 'CIC' },
  czub: { name: 'Ceska zbrojovka', href: 'https://www.czub.cz/' },
  dzd: { name: 'Drazice' },
  ibc: { name: 'I.B.C.' },
  inekon: { name: 'INEKON' },
  jablotron: { name: 'JABLOTRON', href: 'https://www.jablotron.com/cs/' },
  knoll: { name: 'KNOLL' },
  konektel: { name: 'Konektel' },
  kora: { name: 'KORA' },
  linet: { name: 'LINET', href: 'https://www.linet.com/cs' },
  mikroelektronika: { name: 'Mikroelektronika' },
  patron: { name: 'PATRON' },
  proma: { name: 'PROMA REHA' },
  ravak: { name: 'RAVAK', href: 'https://www.ravak.cz/' },
  resi: { name: 'RESI' },
  'singig-rock': { name: 'Singing Rock' },
  skoda: { name: 'SKODA', href: 'https://www.skoda-auto.cz/' },
  sor: { name: 'SOR', href: 'https://www.sor.cz/' },
  tau: { name: 'TAU' },
  tedom: { name: 'TEDOM', href: 'https://www.tedom.com/' },
  zelezny: { name: 'Zelezny' }
};

const slugFromPath = (path: string) => {
  const match = path.match(/_reference_(.+)\.[^.]+$/i);
  return match?.[1] ?? path;
};

const toFallbackName = (slug: string) =>
  slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const partners: Partner[] = Object.entries(referenceLogos)
  .map(([path, logo]) => {
    const slug = slugFromPath(path);
    const meta = partnerMetaBySlug[slug];

    return {
      name: meta?.name ?? toFallbackName(slug),
      href: meta?.href,
      logo
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'cs'));