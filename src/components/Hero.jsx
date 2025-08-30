import React from 'react';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Reclaim Fridays</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600">
          A global movement to unplug one day a week — to rest, reconnect, and remember what matters.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#manifesto" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Read the Manifesto</a>
          <a href="#kits" className="px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500">Get the Social Kit</a>
        </div>
        <p className="mt-6 text-sm text-slate-500">Imagine Fridays for breathing room, creativity, and community.</p>
      </div>
    </section>
  );
};

export default Hero;
