// components/PartnersMarquee.tsx
import React from "react";
import type { Partner } from "../data/partners";

type PartnersMarqueeProps = {
  partners: Partner[];
  repeat?: number;
};

// Reference logos only - intentionally no links to customers' websites.
export function PartnersMarquee({
  partners,
  repeat = 4,
}: PartnersMarqueeProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-8 px-4 animate-[marquee_180s_linear_infinite]">
        {Array.from({ length: repeat }).map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {partners.map((partner) => (
              <div
                key={`${arrayIndex}-${partner.name}`}
                title={partner.name}
                className="w-48 h-24 shrink-0 rounded-xl border border-slate-700 bg-slate-800/80 p-4 flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-slate-500 transition-all duration-800"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PartnersMarquee;
