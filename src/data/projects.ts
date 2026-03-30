import { resolveAssetUrl } from '../utils/assetPath';

export interface Project {
  id: string;
  title: string;
  client: string;
  categoryId: 'transport' | 'medicine' | 'electronics' | 'weapons_furniture' | 'other';
  description: string;
  images: string[];
  tags: string[];
  color: string;
}

const rawProjectsData: Project[] = [
  // ============ TRANSPORT ============
  {
    id: 'transport-skoda-tramvaje',
    title: 'Tramvaj pro Prahu',
    client: 'ŠKODA Transportation',
    categoryId: 'transport',
    description: 'Modern tram design for Prague public transport. Technical design and optimization of passenger cabin ergonomics, electrical systems integration, and structural engineering.',
    images: [
      '/image/gallery/1248873592_image_skoda-t-1.jpg',
      '/image/gallery/1248873727_image_skoda-t-2.jpg',
      '/image/gallery/1248873757_image_skoda-t-3.jpg',
      '/image/gallery/1248873788_image_skoda-t-4.jpg',
      '/image/gallery/1248873817_image_skoda-t-5.jpg',
      '/image/gallery/1248873905_image_skoda-t-6.jpg',
      '/image/gallery/1248874193_image_skoda-t-7.jpg',
      '/image/gallery/1248873992_image_skoda-t8.jpg',
      '/image/text/1251191865_skoda-oceneni-t14.jpg',
      '/image/text/1251191901_skoda-oceneni-t14-male.jpg'
    ],
    tags: ['Transport Design', 'Public Transit', 'Engineering'],
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'transport-skoda-metro',
    title: 'Metrážní vozidla ŠKODA',
    client: 'ŠKODA Transportation',
    categoryId: 'transport',
    description: 'Metropolitan train vehicle design with advanced cabin layout, comfort optimization, and integration of modern rail technology systems.',
    images: [
      '/image/gallery/1248879228_image_skoda-mt-1.jpg',
      '/image/gallery/1248879258_image_skoda-mt-2.jpg',
      '/image/gallery/1248879274_image_skoda-mt-3.jpg',
      '/image/gallery/1248879315_image_skoda-mt-4.jpg'
    ],
    tags: ['Metro Design', 'Rail Transport', 'Urban Mobility'],
    color: 'from-blue-700 to-indigo-500'
  },
  {
    id: 'transport-sor-autobusy',
    title: 'Autobusy SOR',
    client: 'SOR',
    categoryId: 'transport',
    description: 'Professional bus design and optimization for various city transport configurations. Interior ergonomics, material selection, and passenger capacity optimization.',
    images: [
      '/image/gallery/1248779267_image_design-sor1-copy.jpg',
      '/image/gallery/1248779285_image_design-sor2-copy.jpg',
      '/image/gallery/1248779331_image_sor_1_pic-copy.jpg',
      '/image/gallery/1248876349_image_sor-04.jpg',
      '/image/gallery/1248876364_image_sor-05.jpg'
    ],
    tags: ['Bus Design', 'Public Transport', 'Interior Design'],
    color: 'from-emerald-600 to-teal-500'
  },
  {
    id: 'transport-tedom-kogeneratory',
    title: 'TEDOM Kogenerační jednotky',
    client: 'TEDOM',
    categoryId: 'transport',
    description: 'Cogeneration unit design combining heat and power generation. Technical optimization, thermal management, and industrial integration for efficient energy solutions.',
    images: [
      '/image/gallery/1248717142_image_tedom-mk2-kopie.jpg',
      '/image/gallery/1248717478_image_tedom-003.jpg',
      '/image/gallery/1248717552_image_tedom-005.jpg',
      '/image/gallery/1248717725_image_tedom-novinka-2008.jpg',
      '/image/gallery/1248873106_image_tedom-6.jpg',
      '/image/gallery/1248873159_image_tedom-8.jpg',
      '/image/gallery/1253800772_image_tedom-5.jpg'
    ],
    tags: ['Energy Systems', 'Industrial Design', 'Thermodynamics'],
    color: 'from-orange-600 to-red-500'
  },
  {
    id: 'transport-inekon-kolejova',
    title: 'Kolejová vozidla INEKON',
    client: 'INEKON',
    categoryId: 'transport',
    description: 'Railway vehicle platform design with optimized weight distribution, aerodynamic efficiency, and integrated rail safety systems. Multi-configuration modular design.',
    images: [
      '/image/gallery/1248875423_image_in-l1.jpg',
      '/image/gallery/1248875450_image_in-l2.jpg',
      '/image/gallery/1248875478_image_in-p1.jpg',
      '/image/gallery/1248875609_image_in-so1.jpg',
      '/image/gallery/1248875624_image_in-so2.jpg',
      '/image/gallery/1248875882_image_in-tu-1.jpg',
      '/image/gallery/1248875911_image_in-tu-2.jpg'
    ],
    tags: ['Railway Design', 'Vehicle Engineering', 'Transit Systems'],
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 'transport-olympia-obrabeci',
    title: 'Obráběcí centra Olympia Engineering',
    client: 'Olympia Engineering',
    categoryId: 'transport',
    description: 'Precision machining center design with advanced CNC integration, tool changing mechanisms, and optimal workspace ergonomics for industrial manufacturing.',
    images: [
      '/image/gallery/1248878582_image_ol-1.jpg',
      '/image/gallery/1248878666_image_ol-2.jpg',
      '/image/gallery/1248878680_image_ol-3.jpg'
    ],
    tags: ['Precision Engineering', 'CNC Systems', 'Manufacturing'],
    color: 'from-gray-700 to-slate-600'
  },
  {
    id: 'transport-airfin-chladice',
    title: 'AirFin Chladiče a ventilátory',
    client: 'AirFin',
    categoryId: 'transport',
    description: 'Thermal management systems design including air coolers and ventilation units. Optimized for energy efficiency and industrial cooling applications.',
    images: [
      '/image/gallery/1251126091_image_airfin-01.jpg',
      '/image/gallery/1251126296_image_airfin-03.jpg',
      '/image/gallery/1251126342_image_airfin-04.jpg',
      '/image/gallery/1251126368_image_airfin-05.jpg',
      '/image/gallery/1251126407_image_airfin-07.jpg',
      '/image/gallery/1251126433_image_airfin-06.jpg',
      '/image/gallery/1251126457_image_airfin-08.jpg'
    ],
    tags: ['Thermal Systems', 'Industrial Cooling', 'HVAC'],
    color: 'from-cyan-600 to-blue-500'
  },
  {
    id: 'transport-seat-vlaky',
    title: 'Sedadla pro vlaky',
    client: 'Alstom',
    categoryId: 'transport',
    description: 'Railway seating systems design combining passenger comfort, durability, and easy maintenance. Ergonomic studies and material optimization.',
    images: [
      '/image/gallery/1248946574_image_al-t-01.jpg',
      '/image/gallery/1248947907_image_al-tr-07.jpg',
      '/image/gallery/1248947978_image_al-tr-08.jpg',
      '/image/gallery/1248948008_image_al-tr-09.jpg'
    ],
    tags: ['Seating Design', 'Rail Transport', 'Comfort Ergonomics'],
    color: 'from-indigo-600 to-purple-500'
  },

  // ============ MEDICINE ============
  {
    id: 'medicine-biostimul-550',
    title: 'Biostimul BS 550',
    client: 'BIOtherapy',
    categoryId: 'medicine',
    description: 'Advanced therapeutic stimulation device for physical rehabilitation. User interface optimization, ergonomic controls, and integrated therapeutic protocols.',
    images: [
      '/image/gallery/1250245367_image_bio-550-003.jpg',
      '/image/gallery/1250245395_image_bio-550-001.jpg',
      '/image/gallery/1250245414_image_bio-550-002.jpg',
      '/image/gallery/1250245445_image_bio-stojan-005.jpg',
      '/image/gallery/1250245610_image_bio-stojan-003.jpg',
      '/image/gallery/1250245632_image_bio-stojan-004.jpg',
      '/image/gallery/1250245668_image_biostimul-b-550-3-copy.jpg',
      '/image/gallery/1250245766_image_biostimul-b-550-2-copy.jpg'
    ],
    tags: ['Medical Device', 'Physiotherapy', 'Rehabilitation'],
    color: 'from-red-600 to-rose-500'
  },
  {
    id: 'medicine-biostimul-103',
    title: 'Biostimul BS 103/303',
    client: 'BIOtherapy',
    categoryId: 'medicine',
    description: 'Compact therapeutic device series for targeted rehabilitation and pain management. Portable design with advanced electrode systems.',
    images: [
      '/image/gallery/1250246558_image_bio-103-001.jpg',
      '/image/gallery/1250246582_image_bio-103-002.jpg',
      '/image/gallery/1250246681_image_bio-103-005.jpg',
      '/image/gallery/1250246924_image_bio-103-006.jpg',
      '/image/gallery/1250247060_image_bio-103-009.jpg',
      '/image/gallery/1250247249_image_bio-103-008.jpg',
      '/image/gallery/1250247380_image_bio-103-007.jpg'
    ],
    tags: ['Portable Medical Device', 'Therapy Equipment', 'Pain Management'],
    color: 'from-pink-600 to-rose-500'
  },
  {
    id: 'medicine-btl-5000-terapie',
    title: 'BTL 5000 Smart',
    client: 'BTL',
    categoryId: 'medicine',
    description: 'Professional therapeutic device with intelligent technology for rehabilitation clinics. Multi-modality treatment capabilities and smart connectivity.',
    images: [
      '/image/gallery/1250251901_image_btl-5000-001.jpg',
      '/image/gallery/1250251926_image_btl-5000-002.jpg',
      '/image/gallery/1250251943_image_btl-5000-004.jpg',
      '/image/gallery/1250251964_image_btl-5000-003.jpg',
      '/image/gallery/1250251996_image_btl-5000-006.jpg',
      '/image/gallery/1250252215_image_btl-5000-007.jpg'
    ],
    tags: ['Medical Equipment', 'Physical Therapy', 'Professional Device'],
    color: 'from-red-700 to-orange-500'
  },
  {
    id: 'medicine-btl-hlavice',
    title: 'BTL Terapi - Aplikační hlavice',
    client: 'BTL',
    categoryId: 'medicine',
    description: 'Specialized therapeutic application heads for BTL systems. Precision engineering for various treatment modalities and clinical applications.',
    images: [
      '/image/gallery/1250255080_image_btl-hlavice-001.jpg',
      '/image/gallery/1250255094_image_btl-hlavice-002.jpg',
      '/image/gallery/1250255107_image_btl-hlavice-003.jpg',
      '/image/gallery/1250255120_image_btl-hlavice-004.jpg',
      '/image/gallery/1250255135_image_btl-hlavice-005.jpg',
      '/image/gallery/1250255149_image_btl-hlavice-006.jpg',
      '/image/gallery/1250255164_image_hlavice.jpg',
      '/image/gallery/1250255176_image_hlavice-2.jpg'
    ],
    tags: ['Therapy Accessories', 'Medical Equipment', 'Clinical Tools'],
    color: 'from-red-600 to-pink-400'
  },
  {
    id: 'medicine-amv-infuzni-davkovac',
    title: 'Infuzní dávkovač AMV',
    client: 'AMV Technics',
    categoryId: 'medicine',
    description: 'Precision infusion delivery system for medical applications. Safe injection mechanisms, display interface optimization, and compliance with medical standards.',
    images: [
      '/image/gallery/1250245026_image_amv-007.jpg',
      '/image/gallery/1250245050_image_amv-008-copy.jpg',
      '/image/gallery/1250245068_image_amv-009.jpg',
      '/image/gallery/1250245092_image_amv-004-copy.jpg',
      '/image/gallery/1250245104_image_amv-005.jpg',
      '/image/gallery/1250245161_image_amv-pumpa-001.gif',
      '/image/text/1250849374_amv-oceneni-male.jpg',
      '/image/text/1250850923_amv-oceneni-medicalfair2008.jpg'
    ],
    tags: ['Medical Device', 'Infusion Systems', 'Healthcare'],
    color: 'from-green-600 to-emerald-500'
  },
  {
    id: 'medicine-linet-davkovac',
    title: 'Infuzní dávkovač LINET',
    client: 'LINET',
    categoryId: 'medicine',
    description: 'Advanced infusion pump system integrated with medical bed platforms. Precision flow control, alarm systems, and seamless bed integration.',
    images: [
      '/image/gallery/1250254386_image_linet-davka-001.jpg',
      '/image/gallery/1250254414_image_linet-davka-003.jpg',
      '/image/gallery/1250254438_image_linet-davka-004.jpg',
      '/image/gallery/1250254464_image_linet-davka-002.jpg',
      '/image/gallery/1250254479_image_linet-davka-005.jpg',
      '/image/gallery/1250254496_image_linet-davka-006.jpg',
      '/image/gallery/1250254919_image_linet-davka-007.jpg'
    ],
    tags: ['Hospital Equipment', 'Infusion Technology', 'Medical Integration'],
    color: 'from-teal-600 to-cyan-500'
  },
  {
    id: 'medicine-proma-luzko',
    title: 'Lůžko Proma Reha',
    client: 'PROMA',
    categoryId: 'medicine',
    description: 'Rehabilitation medical bed with motorized positioning and integrated therapeutic equipment support. Ergonomic design for patient comfort and clinical efficiency.',
    images: [
      '/image/gallery/1250247771_image_proma-luzko-004.jpg',
      '/image/gallery/1250247785_image_proma-luzko-005.jpg',
      '/image/gallery/1250247800_image_proma-luzko-006.jpg',
      '/image/gallery/1250247823_image_proma-luzko-007.jpg',
      '/image/gallery/1250516513_image_proma-luzko-001-1.jpg',
      '/image/gallery/1250518463_image_proma-luzko-002-1.jpg',
      '/image/gallery/1250518481_image_proma-luzko-003-1.jpg'
    ],
    tags: ['Medical Furniture', 'Rehabilitation Equipment', 'Hospital Bed'],
    color: 'from-amber-600 to-yellow-500'
  },
  {
    id: 'medicine-resi-terapeuticke-luzko',
    title: 'Terapeutické lůžko RESI',
    client: 'RESI',
    categoryId: 'medicine',
    description: 'Advanced therapeutic bed system for patient rehabilitation and recovery. Pressure management, positioning automation, and integrated monitoring systems.',
    images: [
      '/image/gallery/1250247884_image_resi-001.jpg',
      '/image/gallery/1250247897_image_resi-002.jpg',
      '/image/gallery/1250247950_image_resi-004.jpg',
      '/image/gallery/1250247963_image_resi-005.jpg'
    ],
    tags: ['Medical Bed', 'Rehabilitation', 'Patient Care'],
    color: 'from-lime-600 to-green-500'
  },
  {
    id: 'medicine-ibc-kosmeticke-pristroje',
    title: 'Kosmetický přístroj IBC',
    client: 'IBC',
    categoryId: 'medicine',
    description: 'Professional cosmetic treatment device for aesthetic applications. Multi-modal therapy capabilities, safety features, and user interface design optimization.',
    images: [
      '/image/gallery/1250253356_image_ibc-002.jpg',
      '/image/gallery/1250253370_image_ibc-003.jpg',
      '/image/gallery/1250253384_image_ibc-004.jpg',
      '/image/gallery/1250253403_image_ibc-005.jpg',
      '/image/gallery/1250253428_image_ibc-006.jpg'
    ],
    tags: ['Cosmetic Device', 'Aesthetic Technology', 'Beauty Equipment'],
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 'medicine-dzd-dragice-ohrivace',
    title: 'Ohřívače DZ Dražice',
    client: 'Dražice',
    categoryId: 'medicine',
    description: 'Heating and water management systems design. Thermal efficiency optimization, industrial manufacturing processes, and installation integration.',
    images: [
      '/image/gallery/1250252953_image_dzd-ctverec-04.jpg',
      '/image/gallery/1250253623_image_dzd-ctverec-01.jpg',
      '/image/gallery/1250253682_image_dzd-ctverec-02.jpg',
      '/image/gallery/1250253698_image_dzd-ctverec-03.jpg',
      '/image/gallery/1250253757_image_dzd-ctverec-05.jpg',
      '/image/gallery/1250253878_image_dzd-ctverec-07.jpg',
      '/image/gallery/1250253887_image_dzd-kulaty-02.jpg'
    ],
    tags: ['Heating Systems', 'Water Technology', 'Industrial Equipment'],
    color: 'from-yellow-600 to-amber-500'
  },
  {
    id: 'medicine-kessler-dokumentace',
    title: 'Dokumentace Franz Kessler',
    client: 'Franz Kessler',
    categoryId: 'medicine',
    description: 'Technical documentation and visualization of medical and industrial equipment. Comprehensive design research and product photography for technical communication.',
    images: [
      '/image/gallery/1250246933_image_kessler-001.jpg',
      '/image/gallery/1250246952_image_kessler-002.jpg',
      '/image/gallery/1250247000_image_kessler-003.jpg',
      '/image/gallery/1250247014_image_kessler-004.jpg',
      '/image/gallery/1250247029_image_kessler-005.jpg',
      '/image/gallery/1250247049_image_kessler-006.jpg',
      '/image/gallery/1250247065_image_kessler-007.jpg',
      '/image/gallery/1250247076_image_kessler-008.jpg'
    ],
    tags: ['Technical Documentation', 'Product Photography', 'Design Documentation'],
    color: 'from-slate-600 to-slate-500'
  },

  // ============ ELECTRONICS ============
  {
    id: 'electronics-jablotron-zabezpeceni',
    title: 'Bezpečnostní systémy Jablotron',
    client: 'Jablotron',
    categoryId: 'electronics',
    description: 'Advanced security system components and control devices. Smart home integration, wireless connectivity, and user interface optimization for security applications.',
    images: [
      '/image/gallery/1249047823_image_jablotron-01-copy.jpg',
      '/image/gallery/1249047869_image_jablotron-02-copy.jpg',
      '/image/gallery/1249047904_image_jablotron-e-006.jpg',
      '/image/gallery/1249047943_image_jablotron-e-001.jpg',
      '/image/gallery/1249048130_image_jablotron-p-002.jpg',
      '/image/gallery/1249048571_image_jablotron-p-005-.jpg',
      '/image/gallery/1250601433_image_jablotron-titulka.jpg'
    ],
    tags: ['Security Systems', 'Smart Home', 'Electronics'],
    color: 'from-slate-700 to-slate-600'
  },
  {
    id: 'electronics-abb-soupravy',
    title: 'Zásuvky TANGO ABB',
    client: 'ABB',
    categoryId: 'electronics',
    description: 'Premium electrical outlet and switch systems design. Modern aesthetic integration, safety standards compliance, and standardized manufacturing processes.',
    images: [
      '/image/gallery/1250161375_image_abb-001-1.jpg',
      '/image/gallery/1250161391_image_abb-002-1.jpg',
      '/image/gallery/1250161413_image_abb-003-1.jpg',
      '/image/gallery/1250161430_image_abb-004-1.jpg',
      '/image/gallery/1250161443_image_abb-005-1.jpg',
      '/image/gallery/1250161461_image_abb-006-1.jpg'
    ],
    tags: ['Electrical Equipment', 'Building Installation', 'Design'],
    color: 'from-orange-700 to-orange-600'
  },
  {
    id: 'electronics-alimex-terminaly',
    title: 'Vstupní terminál Alimex',
    client: 'Alimex',
    categoryId: 'electronics',
    description: 'Telecom access terminals and antenna systems for modern communication infrastructure. Industrial design, weatherproofing, and installation optimization.',
    images: [
      '/image/gallery/1250161944_image_alimex-term-011.jpg',
      '/image/gallery/1250161988_image_alimex-antena-001.jpg',
      '/image/gallery/1250162672_image_alimex-term-004.jpg',
      '/image/gallery/1250162708_image_alimex-term-009.jpg',
      '/image/gallery/1250162763_image_alimex-antena-004.jpg',
      '/image/gallery/1250172576_image_alimex-t104-001.jpg',
      '/image/gallery/1250172601_image_alimex-t104-002.jpg',
      '/image/gallery/1250172642_image_alimex-t52-001.jpg',
      '/image/gallery/1250172668_image_alimex-t00-001.jpg',
      '/image/gallery/1250172691_image_alimex-t28-002.jpg',
      '/image/gallery/1250172722_image_alimex-t28-004.jpg',
      '/image/gallery/1250693138_image_alimex-term-003.jpg',
      '/image/gallery/1251106158_image_alimex-open.jpg',
      '/image/gallery/1251107119_image_alimex-term-014-b.jpg'
    ],
    tags: ['Telecom Equipment', 'Network Infrastructure', 'Industrial Design'],
    color: 'from-blue-700 to-blue-600'
  },
  {
    id: 'electronics-konektel-kontroler',
    title: 'Řídící jednotka Konektel',
    client: 'Konektel',
    categoryId: 'electronics',
    description: 'Industrial control and regulation units for automated systems. System integration, user interface design, and robust manufacturing for industrial environments.',
    images: [
      '/image/gallery/1250243361_image_konektel-ridic-001.jpg',
      '/image/gallery/1250243384_image_konektel-ridic-002.jpg',
      '/image/gallery/1250243402_image_konektel-ridic-004.jpg',
      '/image/gallery/1250243422_image_konektel-ridic-006.jpg',
      '/image/gallery/1250243437_image_konektel-ridic-007.jpg',
      '/image/gallery/1250243459_image_konektel-ridic-008.jpg',
      '/image/gallery/1250243509_image_konektel-ridic-010.jpg'
    ],
    tags: ['Industrial Control', 'Automation', 'Electronics'],
    color: 'from-green-700 to-green-600'
  },
  {
    id: 'electronics-cic-datove-terminaly',
    title: 'Datový terminál CIC',
    client: 'CIC',
    categoryId: 'electronics',
    description: 'Portable data entry and processing terminals for field operations. Rugged design, touchscreen interfaces, and wireless connectivity for mobile workforce solutions.',
    images: [
      '/image/gallery/1250243770_image_cic-001.jpg',
      '/image/gallery/1250243789_image_cic-002.jpg',
      '/image/gallery/1250243806_image_cic-003.jpg',
      '/image/gallery/1250243938_image_cic-004.jpg',
      '/image/gallery/1250244053_image_cic-005.jpg',
      '/image/gallery/1250244479_image_cic-005.jpg',
      '/image/gallery/1250244510_image_cic-006.jpg'
    ],
    tags: ['Mobile Devices', 'Data Collection', 'Field Equipment'],
    color: 'from-indigo-700 to-indigo-600'
  },
  {
    id: 'electronics-mikro-jizdenky',
    title: 'Jízdenkový terminál Mikroelektronika',
    client: 'Mikroelektronika',
    categoryId: 'electronics',
    description: 'Ticket and fare collection system terminals for public transport. Card reader integration, payment processing, and user interface for passenger transactions.',
    images: [
      '/image/gallery/1250244211_image_mikro-001.jpg',
      '/image/gallery/1250244231_image_mikro-002.jpg',
      '/image/gallery/1250244256_image_mikro-003.jpg',
      '/image/gallery/1250244274_image_mikro-004.jpg',
      '/image/gallery/1250244286_image_mikro-005.jpg',
      '/image/text/1259752117_mikroelektronika-oceneni.jpg',
      '/image/text/1259752107_mikroelektronika-oceneni-male.jpg'
    ],
    tags: ['Payment Systems', 'Public Transport', 'Ticket Machines'],
    color: 'from-purple-700 to-purple-600'
  },
  {
    id: 'electronics-czechlabs-psychowalkman',
    title: 'Psychowalkman CzechLabs',
    client: 'CzechLabs',
    categoryId: 'electronics',
    description: 'Portable entertainment and therapeutic audio device. Compact ergonomic form factor, intuitive controls, and integrated therapeutic audio content management.',
    images: [
      '/image/gallery/1250243012_image_czechlabs-001.jpg',
      '/image/gallery/1250243044_image_czechlabs-002.jpg',
      '/image/gallery/1250243062_image_czechlabs-005.jpg',
      '/image/gallery/1250243085_image_czechlabs-006.jpg',
      '/image/gallery/1250243104_image_czechlabs-008.jpg',
      '/image/gallery/1250243125_image_czechlabs-009.jpg',
      '/image/gallery/1250243142_image_czechlabs-010.jpg',
      '/image/gallery/1250243160_image_czechlabs-011.jpg',
      '/image/gallery/1250243179_image_czechlabs-012.jpg'
    ],
    tags: ['Portable Audio', 'Therapeutic Device', 'Consumer Electronics'],
    color: 'from-pink-600 to-rose-500'
  },
  {
    id: 'electronics-amit-terminalove-moduly',
    title: 'Řídící terminál AMIT',
    client: 'AMIT',
    categoryId: 'electronics',
    description: 'Industrial touchscreen control terminals for process management. Modular system architecture, ruggedized housing, and factory integration standards.',
    images: [
      '/image/gallery/1250242537_image_amit-004.jpg',
      '/image/gallery/1250242561_image_amit-005.jpg',
      '/image/gallery/1250242580_image_amit-009.jpg',
      '/image/gallery/1250242729_image_amit-010.jpg',
      '/image/gallery/1251194349_image_amit-001.jpg',
      '/image/gallery/1251194369_image_amit-002.jpg',
      '/image/gallery/1251194388_image_amit-003.jpg',
      '/image/gallery/1250518980_image_mk4-1.jpg',
      '/image/gallery/1250519134_image_mk1-1.jpg',
      '/image/gallery/1250519161_image_mk9-1.jpg',
      '/image/gallery/1250692767_image_amit-titulka.jpg'
    ],
    tags: ['Industrial HMI', 'Control Systems', 'Automation'],
    color: 'from-teal-700 to-teal-600'
  },
  {
    id: 'electronics-anet-panely',
    title: 'Terminál ANET',
    client: 'ANET',
    categoryId: 'electronics',
    description: 'Network and data panel systems for telecommunications infrastructure. Modular connector organization, cable management, and professional installation design.',
    images: [
      '/image/gallery/1250693332_image_anet_skica2_pic.jpg',
      '/image/gallery/1250693360_image_anet-006.jpg',
      '/image/gallery/1250693387_image_anet-003.jpg',
      '/image/gallery/1250693404_image_anet-005.jpg',
      '/image/gallery/1250693437_image_anet-007.jpg',
      '/image/gallery/1250693776_image_anet-007black.jpg'
    ],
    tags: ['Network Equipment', 'Telecom Infrastructure', 'Panel Systems'],
    color: 'from-cyan-700 to-blue-600'
  },
  {
    id: 'electronics-singing-rock-komponenty',
    title: 'Komponenty Singing Rock',
    client: 'Singing Rock',
    categoryId: 'electronics',
    description: 'Outdoor and safety equipment components for adventure sports. Technical material optimization, weather resistance, and safety certification compliance.',
    images: [
      '/image/gallery/1250251573_image_singing-01.jpg',
      '/image/gallery/1250251583_image_singing-02.jpg',
      '/image/gallery/1250251594_image_singing-03.jpg',
      '/image/gallery/1250251606_image_singing-04.jpg',
      '/image/gallery/1250251618_image_singing-05.jpg',
      '/image/gallery/1250251637_image_singing-06.jpg',
      '/image/gallery/1250692238_image_singing-07.jpg',
      '/image/gallery/1250692365_image_singing-08.jpg'
    ],
    tags: ['Outdoor Gear', 'Safety Equipment', 'Adventure Sports'],
    color: 'from-red-700 to-red-600'
  },

  // ============ FURNITURE & WEAPONS ============
  {
    id: 'furniture-ateh-svitidlo-kytka',
    title: 'Svítidlo Trojlístek ATEH',
    client: 'ATEH Design',
    categoryId: 'weapons_furniture',
    description: 'Decorative lighting fixture with artistic three-leaf design. Contemporary lighting design, material selection, and integrated LED technology.',
    images: [
      '/image/gallery/1250175367_image_ateh-kytka-002.jpg',
      '/image/gallery/1250175735_image_ateh-kytka-005.jpg',
      '/image/gallery/1250175762_image_ateh-kytka-007.jpg',
      '/image/gallery/1250175793_image_ateh-kytka-008.jpg',
      '/image/gallery/1250177435_image_ateh-kytka-010.jpg',
      '/image/gallery/1250177845_image_ateh-kytka-011.jpg'
    ],
    tags: ['Lighting Design', 'Decorative Fixture', 'Contemporary Art'],
    color: 'from-yellow-600 to-amber-500'
  },
  {
    id: 'furniture-ateh-svitidlo-vzduch',
    title: 'Svítidlo Vzducholoď ATEH',
    client: 'ATEH Design',
    categoryId: 'weapons_furniture',
    description: 'Artistic lighting sculpture with airship/zeppelin concept. Freeform design, integrated lighting technology, and sculptural aesthetics.',
    images: [
      '/image/gallery/1250177325_image_ateh-vzduch-001.jpg',
      '/image/gallery/1250177339_image_ateh-vzduch-002.jpg',
      '/image/gallery/1250177357_image_ateh-vzduch-003.jpg',
      '/image/gallery/1250177382_image_ateh-vzduch-004.jpg'
    ],
    tags: ['Artistic Lighting', 'Sculpture Design', 'Decorative Art'],
    color: 'from-blue-600 to-purple-500'
  },
  {
    id: 'furniture-knoll-seating',
    title: 'Židle KNOLL',
    client: 'Knoll',
    categoryId: 'weapons_furniture',
    description: 'Contemporary office and lounge seating collection. Ergonomic analysis, comfort engineering, and modular seating systems for corporate environments.',
    images: [
      '/image/gallery/1250236746_image_knoll-001.jpg',
      '/image/gallery/1250236760_image_knoll-002.jpg',
      '/image/gallery/1250236775_image_knoll-003.jpg',
      '/image/gallery/1250236794_image_knoll-004.jpg',
      '/image/gallery/1250236810_image_knoll-005.jpg',
      '/image/gallery/1250236824_image_knoll-006.jpg',
      '/image/gallery/1250236840_image_knoll-007.jpg',
      '/image/gallery/1250236864_image_knoll-008.jpg',
      '/image/gallery/1251105956_image_knoll-b.jpg'
    ],
    tags: ['Office Furniture', 'Ergonomic Seating', 'Contemporary Design'],
    color: 'from-gray-600 to-slate-500'
  },
  {
    id: 'furniture-tau-seating',
    title: 'Sedadla TAU',
    client: 'TAU Design',
    categoryId: 'weapons_furniture',
    description: 'Modern seating system with modular design philosophy. Upholstery optimization, frame engineering, and flexible spatial arrangements.',
    images: [
      '/image/gallery/1250237146_image_tau-001.jpg',
      '/image/gallery/1250237170_image_tau-002.jpg',
      '/image/gallery/1250237215_image_tau-004.jpg',
      '/image/gallery/1250237248_image_tau-005.jpg',
      '/image/gallery/1250237267_image_tau-006.jpg',
      '/image/gallery/1250237292_image_tau-007.jpg',
      '/image/gallery/1250239978_image_tau-008.jpg',
      '/image/gallery/1250239994_image_tau-009.jpg',
      '/image/gallery/1250240016_image_tau-010.jpg'
    ],
    tags: ['Furniture Design', 'Seating Solutions', 'Interior Design'],
    color: 'from-lime-600 to-green-500'
  },
  {
    id: 'furniture-kora-seating',
    title: 'Židle KORA',
    client: 'KORA Design',
    categoryId: 'weapons_furniture',
    description: 'Sophisticated seating collection featuring curved forms and premium materials. Craftsmanship focus, wood bending techniques, and luxury finish options.',
    images: [
      '/image/gallery/1250174442_image_kora-002-black.jpg',
      '/image/gallery/1250174457_image_kora-001-black.jpg',
      '/image/gallery/1250174483_image_kora-003.jpg',
      '/image/gallery/1250174501_image_kora-004.jpg',
      '/image/gallery/1250174527_image_kora-006-copy.jpg',
      '/image/gallery/1250174546_image_kora-007-copy.jpg',
      '/image/gallery/1250174564_image_kora-008-copy.jpg',
      '/image/gallery/1250236365_image_kora-009.jpg'
    ],
    tags: ['Premium Seating', 'Wood Furniture', 'Interior Design'],
    color: 'from-amber-700 to-yellow-600'
  },
  {
    id: 'furniture-botas-nabytek',
    title: 'Nábytek BOTAS',
    client: 'BOTAS',
    categoryId: 'weapons_furniture',
    description: 'Contemporary furniture collection combining aesthetics and functionality. Sustainable material selection, modular design systems, and manufacturing optimization.',
    images: [
      '/image/gallery/1250238667_image_botas-falcon-002.jpg',
      '/image/gallery/1250238731_image_botas-falcon-003.jpg',
      '/image/gallery/1250238766_image_botas-falcon-004.jpg',
      '/image/gallery/1250238826_image_botas-new-001.jpg',
      '/image/gallery/1250238840_image_botas-new-002.jpg',
      '/image/gallery/1250240985_image_botas-falcon-001.jpg',
      '/image/gallery/1273143924_image_botas-falcon-005.jpg'
    ],
    tags: ['Furniture', 'Interior Design', 'Sustainable Design'],
    color: 'from-brown-600 to-amber-500'
  },
  {
    id: 'weapons-grand-pistole',
    title: 'Revolver GRAND',
    client: 'Česká zbrojovka GRAND',
    categoryId: 'weapons_furniture',
    description: 'Precision engineered revolver design combining mechanical excellence with ergonomic handling. Mechanical design, safety systems, and manufacturing excellence.',
    images: [
      '/image/gallery/1250173236_image_grand-001.jpg',
      '/image/gallery/1250173258_image_grand-007.jpg',
      '/image/gallery/1250173344_image_grand-002.jpg',
      '/image/gallery/1250173360_image_grand-003.jpg',
      '/image/gallery/1250173375_image_grand-004.jpg',
      '/image/gallery/1250173395_image_grand-005.jpg',
      '/image/gallery/1250173411_image_grand-006.jpg'
    ],
    tags: ['Firearms Design', 'Mechanical Engineering', 'Precision Craft'],
    color: 'from-gray-800 to-slate-700'
  },

  // ============ OTHER PRODUCTS ============
  {
    id: 'other-czub-design',
    title: 'Produkty České zbrojovky ČÚZK',
    client: 'Česká zbrojovka ČÚZK',
    categoryId: 'other',
    description: 'Industrial and consumer products from renowned Czech weapons manufacturer. Design and technical documentation of diverse product portfolio.',
    images: [
      '/image/gallery/1250173854_image_czub-005.jpg',
      '/image/gallery/1250174165_image_czub-001.jpg',
      '/image/gallery/1250174179_image_czub-002.jpg',
      '/image/gallery/1250174189_image_czub-003.jpg',
      '/image/gallery/1250174200_image_czub-004.jpg',
      '/image/gallery/1251111612_image_czub-006.jpg',
      '/image/gallery/1251115939_image_czub-007.jpg'
    ],
    tags: ['Industrial Products', 'Czech Manufacturing', 'Design'],
    color: 'from-slate-700 to-gray-600'
  },
  {
    id: 'other-patron-koljarek',
    title: 'Tříkolový kočárek PATRON',
    client: 'PATRON',
    categoryId: 'other',
    description: 'Modern three-wheeled stroller/carriage design combining mobility and safety. Pediatric ergonomics, structural optimization, and lifestyle integration.',
    images: [
      '/image/gallery/1273142544_image_patron-001.jpg',
      '/image/gallery/1273152573_image_patron-002.jpg',
      '/image/gallery/1273153139_image_patron-003.jpg',
      '/image/gallery/1273217108_image_patron-004.jpg',
      '/image/text/1273145192_patron-001-small.jpg'
    ],
    tags: ['Baby Products', 'Stroller Design', 'Child Safety'],
    color: 'from-pink-600 to-rose-400'
  },
  {
    id: 'other-protherm-systemy',
    title: 'Komponenty PROTHERM',
    client: 'PROTHERM',
    categoryId: 'other',
    description: 'Heating system components and boiler design for residential and commercial applications. Thermal efficiency, smart control systems, and environmental compliance.',
    images: [
      '/image/gallery/1251382789_image_protherm-001.jpg',
      '/image/gallery/1251382870_image_protherm-002.jpg',
      '/image/gallery/1251382883_image_protherm-003.jpg',
      '/image/gallery/1251382924_image_protherm-004.jpg',
      '/image/gallery/1251382997_image_protherm-005.jpg',
      '/image/gallery/1251383016_image_protherm-006.jpg',
      '/image/gallery/1251383029_image_protherm-007.jpg',
      '/image/gallery/1251383052_image_protherm-008.jpg'
    ],
    tags: ['Heating Systems', 'Energy Efficiency', 'HVAC Technology'],
    color: 'from-orange-600 to-red-500'
  },
  {
    id: 'other-zelezny-kovy',
    title: 'Metalwork ŽELEZNÝ',
    client: 'ŽELEZNÝ',
    categoryId: 'other',
    description: 'Custom metalwork and structural steel design for industrial and architectural applications. Welding techniques, structural optimization, and custom fabrication.',
    images: [
      '/image/gallery/1253880085_image_zelezny-01.jpg',
      '/image/gallery/1253880147_image_zelezny-02.jpg',
      '/image/gallery/1253880176_image_zelezny-03.jpg',
      '/image/gallery/1253880210_image_zelezny-04.jpg',
      '/image/gallery/1253880229_image_zelezny-05.jpg'
    ],
    tags: ['Metalwork', 'Structural Design', 'Fabrication'],
    color: 'from-slate-800 to-slate-700'
  },
  {
    id: 'other-sls-model',
    title: 'SLS Model maketování',
    client: 'SLS Technology',
    categoryId: 'other',
    description: 'Selective Laser Sintering rapid prototyping and scale model design. Advanced 3D printing technology, iterative design validation, and prototype production.',
    images: [
      '/image/gallery/1250253444_image_sls-dily1-copy.jpg',
      '/image/gallery/1250253609_image_sls-model.jpg'
    ],
    tags: ['3D Printing', 'Rapid Prototyping', 'Manufacturing'],
    color: 'from-indigo-600 to-blue-500'
  },
  {
    id: 'other-general-design',
    title: 'Design a průmyslový rozvoj',
    client: 'Exact Technology',
    categoryId: 'other',
    description: 'Comprehensive design consultation and industrial development services spanning multiple product categories and client industries.',
    images: [
      '/image/gallery/1248717289_image_design-evo-ii-bb.jpg',
      '/image/gallery/1249048226_image_ov-3-copy.jpg',
      '/image/gallery/1249048262_image_ov-2-copy.jpg',
      '/image/gallery/1250177656_image_pict0006w.jpg',
      '/image/gallery/1250177675_image_kubistic-b-copy.jpg',
      '/image/gallery/1250177731_image_oristano-antrazit.jpg',
      '/image/gallery/1250177755_image_vestre_cervena_300_dpi.jpg',
      '/image/gallery/1250177777_image_bergamo-str.-dv..jpg',
      '/image/gallery/1250177792_image_marma-cervena.jpg',
      '/image/gallery/1250692796_image_noa70_06.jpg',
      '/image/gallery/1251194044_image_fotka-ufon-mala.jpg'
    ],
    tags: ['Design Consulting', 'Product Development', 'Industrial Design'],
    color: 'from-purple-600 to-pink-500'
  }
];

export const projectsData: Project[] = rawProjectsData.map((project) => ({
  ...project,
  images: project.images.map(resolveAssetUrl)
}));

export default projectsData;
