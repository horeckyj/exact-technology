import { resolveAssetUrl } from '../utils/assetPath';

export type Partner = {
  name: string;
  href?: string;
  logo: string;
};

const referenceLogoFiles = [
  '1250595329_reference_abb.jpg',
  '1250596531_reference_ateh.jpg',
  '1250603357_reference_btl.jpg',
  '1250686124_reference_adast.jpg',
  '1250686259_reference_alimex.jpg',
  '1250686360_reference_amit.jpg',
  '1250687069_reference_axl.jpg',
  '1250687157_reference_bio.jpg',
  '1250687254_reference_botas.jpg',
  '1250687364_reference_cic.jpg',
  '1250687587_reference_czub.jpg',
  '1250687681_reference_anet.jpg',
  '1250687847_reference_divan.jpg',
  '1250687930_reference_dzd.jpg',
  '1250688066_reference_efg.jpg',
  '1250688170_reference_ekovuk.jpg',
  '1250688363_reference_amv.jpg',
  '1250689051_reference_elmarco.jpg',
  '1250689091_reference_gost.jpg',
  '1250689179_reference_ibc.jpg',
  '1250689417_reference_inekon.jpg',
  '1250689557_reference_jablotron.jpg',
  '1250689660_reference_knoll.jpg',
  '1250689692_reference_koh-i-noor.jpg',
  '1250689806_reference_konektel.jpg',
  '1250689895_reference_kora.jpg',
  '1250690015_reference_koukaam.jpg',
  '1250690123_reference_linet.jpg',
  '1250690290_reference_mikroelektronika.jpg',
  '1250690369_reference_moltec.jpg',
  '1250690472_reference_mzliberec.jpg',
  '1250690567_reference_nelan.jpg',
  '1250690638_reference_neomed.jpg',
  '1250690825_reference_novotny.jpg',
  '1250690914_reference_paramo.jpg',
  '1250690999_reference_patron.jpg',
  '1250691075_reference_princip.jpg',
  '1250691155_reference_proma.jpg',
  '1250691324_reference_ravak.jpg',
  '1250691422_reference_resi.jpg',
  '1250691496_reference_rukov.jpg',
  '1250691592_reference_singig-rock.jpg',
  '1250691722_reference_skoda.jpg',
  '1250691800_reference_sor.jpg',
  '1250691882_reference_tau.jpg',
  '1250691952_reference_tedom.jpg',
  '1250692022_reference_telmax.jpg',
  '1253881896_reference_zelezny.jpg'
] as const;

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

export const partners: Partner[] = referenceLogoFiles
  .map((fileName) => {
    const slug = slugFromPath(fileName);
    const meta = partnerMetaBySlug[slug];

    return {
      name: meta?.name ?? toFallbackName(slug),
      href: meta?.href,
      logo: resolveAssetUrl(`/image/reference/${fileName}`)
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'cs'));