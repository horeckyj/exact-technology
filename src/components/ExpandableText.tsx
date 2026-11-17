import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ExpandableTextProps = {
  children: React.ReactNode;
  className?: string;
  lines?: number;
};

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, className = '', lines = 3 }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const lineClampClass = lines === 4 ? 'line-clamp-4' : 'line-clamp-3';

  return (
    <>
      <div className={`${expanded ? '' : lineClampClass} sm:line-clamp-none ${className}`}>
        {children}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="sm:hidden inline-flex items-center gap-1 text-brand-400 font-semibold mt-3"
        aria-expanded={expanded}
      >
        {expanded ? t('common.readLess') : t('common.readMore')}
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
    </>
  );
};

export default ExpandableText;
