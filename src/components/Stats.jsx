import React from 'react';

const Stat = ({ value, label }) => (
  <div className="rounded-xl bg-white/70 ring-1 ring-slate-200 p-6 shadow-sm">
    <div className="text-3xl font-extrabold text-slate-900">{value}</div>
    <div className="mt-1 text-sm text-slate-600">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section id="stats" className="bg-gradient-to-br from-emerald-50 to-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Momentum in the Making</h2>
        <p className="mt-2 text-slate-600">Optimism meets evidence. A few signals from the movement.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat value="56k+" label="People pledged to unplug" />
          <Stat value="1.8M" label="Hours reclaimed" />
          <Stat value="42%" label="Report better focus on Mondays" />
          <Stat value="92" label="Partner organizations" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
