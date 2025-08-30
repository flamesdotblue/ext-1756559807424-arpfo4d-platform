import React from 'react';

const partners = [
  { name: 'SlowNet', logo: '/partners/slownet.svg', url: '#' },
  { name: 'Deep Work Co', logo: '/partners/deepwork.svg', url: '#' },
  { name: 'Forest Foundation', logo: '/partners/forest.svg', url: '#' },
  { name: 'Open Fridays', logo: '/partners/openfridays.svg', url: '#' },
  { name: 'Humans First', logo: '/partners/humans.svg', url: '#' },
];

const kits = [
  { label: 'Instagram Post', file: '/kits/reclaim-fridays-ig.svg' },
  { label: 'Instagram Story', file: '/kits/reclaim-fridays-story.svg' },
  { label: 'LinkedIn Post', file: '/kits/reclaim-fridays-linkedin.svg' },
  { label: 'Twitter/X Post', file: '/kits/reclaim-fridays-x.svg' },
];

const PartnersAndKits = () => {
  return (
    <section className="py-16 bg-white">
      <div id="partners" className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Partner Organizations</h2>
            <p className="mt-2 text-slate-600">Coalitions, communities, and companies piloting the Friday unplug.</p>
          </div>
          <a href="#kits" className="hidden md:inline-flex px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Become a Partner</a>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {partners.map((p) => (
            <a key={p.name} href={p.url} className="flex items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 py-6 px-4 hover:shadow-md">
              <img src={p.logo} alt={p.name} className="h-8 opacity-80" />
            </a>
          ))}
        </div>
      </div>

      <div id="kits" className="mx-auto max-w-6xl px-4 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Download Social Kits</h2>
        <p className="mt-2 text-slate-600">Use these ready-to-share graphics to invite your community to unplug on Fridays.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((k) => (
            <a key={k.file} href={k.file} download className="group block overflow-hidden rounded-xl ring-1 ring-slate-200 hover:shadow-md">
              <img src={k.file} alt={k.label} className="aspect-square w-full object-cover bg-gradient-to-br from-emerald-50 to-sky-50" />
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700">{k.label}</div>
                <div className="text-xs text-slate-500">SVG • Click to download</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/kits/reclaim-fridays-ig.svg" download className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500">Download a sample</a>
          <span className="text-sm text-slate-500">CC0 — Remix freely. Spread the vibe.</span>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndKits;
