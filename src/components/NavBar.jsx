import React from 'react';

const NavBar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('top')} className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-sky-400 to-emerald-400"></span>
          Reclaim Fridays
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('manifesto')} className="hover:text-emerald-600">Manifesto</button>
          <button onClick={() => scrollTo('stats')} className="hover:text-emerald-600">Stats</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-emerald-600">Partners</button>
          <button onClick={() => scrollTo('kits')} className="hover:text-emerald-600">Social Kits</button>
          <a href="#join" onClick={(e) => {e.preventDefault(); scrollTo('kits');}} className="px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-500">Join</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
