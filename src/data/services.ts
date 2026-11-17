import { Search, Palette, Box, RotateCcw, FileText, Settings, type LucideIcon } from 'lucide-react';
import { resolveAssetUrl } from '../utils/assetPath';

export interface ServiceDefinition {
  id: string;
  /** Translation key prefix, e.g. `services.s1` */
  key: string;
  icon: LucideIcon;
  image: string;
}

export const servicesData: ServiceDefinition[] = [
  { id: 'pruzkum-trhu', key: 'services.s1', icon: Search, image: resolveAssetUrl('/image/Support.jpg') },
  { id: 'design-grafika', key: 'services.s2', icon: Palette, image: resolveAssetUrl('/image/DetailedGraphics.jpg') },
  { id: 'konstrukcni-reseni', key: 'services.s3', icon: Box, image: resolveAssetUrl('/image/ManufacturingSolution.jpg') },
  { id: 'reverzni-inzenyrstvi', key: 'services.s4', icon: RotateCcw, image: resolveAssetUrl('/image/ReverseEngineering.png') },
  { id: 'vykresova-dokumentace', key: 'services.s5', icon: FileText, image: resolveAssetUrl('/image/TechnicalDrawing.jpg') },
  { id: 'podpora-vyroby', key: 'services.s6', icon: Settings, image: resolveAssetUrl('/image/ManufacuringSolutions.png') },
];
