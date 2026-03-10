// components/PartnersSection.tsx
import React from "react";
import { partners } from "../data/partners";
import { PartnersMarquee } from "../components/PartnersMarquee";

type PartnersSectionProps = {
  title: string;
};

export function PartnersSection({ title }: PartnersSectionProps) {
  return (
    <section className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
          {title}
        </p>
      </div>

      <PartnersMarquee partners={partners} />
    </section>
  );
}